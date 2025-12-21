# Plan: Knowledge Hub & Search

## Phase 1: Backend - Resource Collection
- [ ] Task: Create `Resources` Collection
    - [x] Subtask: Define Schema in `src/collections/Resources.ts` (Title, File, Category, Relations) [81439bd]
    - [x] Subtask: Register in `payload.config.ts` [a1557a4]
    - [x] Subtask: Configure `upload` properties (mime-types, resize options) [81439bd]
- [ ] Task: Configure Search Plugin
    - [x] Subtask: Verify/Configure `@payloadcms/plugin-search` in `payload.config.ts` to include `resources` [724c7c1]
- [ ] Task: Conductor - User Manual Verification 'Backend - Resource Collection' (Protocol in workflow.md)

## Phase 2: Frontend - Resource Components
- [ ] Task: Create `ResourceCard`
    - [ ] Subtask: Implement UI with 70/20/10 color ratio
    - [ ] Subtask: Add file type icons (using `lucide-react`)
    - [ ] Subtask: Add "Download" interaction
- [ ] Task: Create `SearchBar` Component
    - [ ] Subtask: Implement debounced input field
    - [ ] Subtask: Design dropdown/results view
- [ ] Task: Conductor - User Manual Verification 'Frontend - Resource Components' (Protocol in workflow.md)

## Phase 3: Frontend - Pages & Integration
- [ ] Task: Build `/resources` Page
    - [ ] Subtask: Implement layout with filters and grid
    - [ ] Subtask: Connect to Payload API for data fetching
- [ ] Task: Add "Related Resources" to Solution Pages
    - [ ] Subtask: Update `solutions/[slug]/page.tsx` to fetch and display linked resources
- [ ] Task: Conductor - User Manual Verification 'Frontend - Pages & Integration' (Protocol in workflow.md)
