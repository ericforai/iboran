# Plan: Knowledge Hub & Search

## Phase 1: Backend - Resource Collection
- [ ] Task: Create `Resources` Collection
    - [x] Subtask: Define Schema in `src/collections/Resources.ts` (Title, File, Category, Relations) [81439bd]
    - [x] Subtask: Register in `payload.config.ts` [a1557a4]
    - [x] Subtask: Configure `upload` properties (mime-types, resize options) [81439bd]
- [ ] Task: Configure Search Plugin
    - [x] Subtask: Verify/Configure `@payloadcms/plugin-search` in `payload.config.ts` to include `resources` [724c7c1]
- [x] Task: Conductor - User Manual Verification 'Backend - Resource Collection' (Protocol in workflow.md) [a1557a4]

## Phase 2: Frontend - Resource Components
- [x] Task: Create `ResourceCard` [ef26bf9]
    - [x] Subtask: Implement UI with 70/20/10 color ratio [ef26bf9]
    - [x] Subtask: Add file type icons (using `lucide-react`) [ef26bf9]
    - [x] Subtask: Add "Download" interaction [ef26bf9]
- [x] Task: Create `SearchBar` Component [ef26bf9]
    - [x] Subtask: Implement debounced input field [ef26bf9]
    - [x] Subtask: Design dropdown/results view [ef26bf9]
- [x] Task: Conductor - User Manual Verification 'Frontend - Resource Components' (Protocol in workflow.md) [ef26bf9]

## Phase 3: Frontend - Pages & Integration
- [x] Task: Build `/resources` Page [9e1231f]
    - [x] Subtask: Implement layout with filters and grid [9e1231f]
    - [x] Subtask: Connect to Payload API for data fetching [9e1231f]
- [x] Task: Add "Related Resources" to Solution Pages [9e1231f]
    - [x] Subtask: Update `solutions/[slug]/page.tsx` to fetch and display linked resources [9e1231f]
- [x] Task: Conductor - User Manual Verification 'Frontend - Pages & Integration' (Protocol in workflow.md) [9e1231f]
