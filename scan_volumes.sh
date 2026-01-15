#!/bin/bash

# Get all local volumes, excluding known ones
VOLUMES=$(docker volume ls -q | grep -v "iboran_mongo_data" | grep -v "postgres" | grep -v "nexus" | grep -v "deploy" | grep -v "modules")

echo "Found volumes to scan: $(echo "$VOLUMES" | wc -l)"

for vol in $VOLUMES; do
    echo "Scanning volume: $vol"
    
    # Start temp container
    docker run -d --name temp-scan-$vol -v "$vol":/data/db mongo:7 > /dev/null
    
    # Give it a moment to start
    sleep 3
    
    # Check for any non-system databases and their sizes
    RESULT=$(docker exec temp-scan-$vol mongosh --quiet --eval "
        var dbs = db.adminCommand('listDatabases').databases;
        var foundAny = false;
        dbs.forEach(d => {
            if (d.name !== 'admin' && d.name !== 'local' && d.name !== 'config') {
                foundAny = true;
                print('--- DATABASE: ' + d.name + ' (' + d.sizeOnDisk + ') ---');
                var dbObj = db.getSiblingDB(d.name);
                var cols = dbObj.getCollectionNames();
                cols.forEach(c => {
                    try {
                        var count = dbObj.getCollection(c).countDocuments();
                        if (count > 0) {
                            print('  ' + c + ': ' + count);
                        }
                    } catch(e) {}
                });
            }
        });
        if (!foundAny) print('EMPTY_INSTANCE');
    " 2>/dev/null)
    
    echo "$RESULT"
    
    # Cleanup
    docker rm -f temp-scan-$vol > /dev/null
    
    if [[ "$RESULT" == *"DATABASE:"* ]]; then
        echo "🎉 DATA DETECTED IN VOLUME: $vol"
    fi
done
