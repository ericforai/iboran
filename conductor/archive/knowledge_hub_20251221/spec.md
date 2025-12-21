# Specification: Knowledge Hub & Search Framework

## 1. Overview
This track builds the "Knowledge Hub" (`/resources`), a centralized repository for downloadable assets (whitepapers, case study PDFs, product manuals). It prioritizes **security** (no direct exposure of sensitive files), **performance** (optimized asset delivery), and **discoverability** (search/filtering).

## 2. Data Model (Backend)

### 2.1 Collection: Resources (`resources`)
- **Purpose**: Manage downloadable files separately from generic media.
- **Fields**:
  - `title` (Text, required): Public display title.
  - `file` (Upload, required): The actual PDF/Doc file.
    - *Config*: Restrict mime-types to `application/pdf`, `application/msword`, etc.
  - `category` (Select/Relationship): e.g., "Whitepaper", "Case Study", "Manual".
  - `relatedSolutions` (Relationship): Link to `IndustrySolutions` (for displaying on solution pages).
  - `gated` (Checkbox): If true, requires a lead form to download (future-proof field).
  - `summary` (Textarea): Short description for search results.

### 2.2 Search Infrastructure (Payload)
- **Plugin**: Ensure `@payloadcms/plugin-search` is correctly configured to index `resources`, `industry-solutions`, and `success-stories`.
- **Logic**: Search should query the `title`, `summary`, and `content` fields.

## 3. Frontend Implementation (Next.js)

### 3.1 Page: Resource Center (`/resources`)
- **Layout**:
  - **Sidebar/Top Bar**: Filters by Category and Linked Solution.
  - **Search Bar**: Real-time (debounced) search input.
  - **Grid**: Display `ResourceCard` components.
- **Performance**:
  - Use Next.js `Suspense` for the search results.
  - Pagination to handle potentially large libraries.

### 3.2 Component: `ResourceCard`
- Visuals: File type icon (PDF/Doc), Title, File Size (auto-calculated), Download Button.
- Interaction: Direct download or (in future) open lead modal.

### 3.3 Integration: Global Search Bar
- A global search component (in Navbar) that can find these resources.

## 4. Security & Performance
- **Uploads**: Ensure Payload handles file storage efficiently (local or S3-compatible).
- **Access Control**: Public read access for now, but ready for "Authenticated Only" logic if needed.
