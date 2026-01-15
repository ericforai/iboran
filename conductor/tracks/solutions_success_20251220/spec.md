# Specification: Industry Solutions & Success Stories Framework

## 1. Overview
This track implements the core content structures to showcase Boran's expertise: "Industry Solutions" (highlighting scenarios) and "Success Stories" (highlighting results). This involves creating new Payload CMS collections and corresponding frontend views.

## 2. Data Model (Payload CMS)

### 2.1 Collection: Industry Solutions (`industry-solutions`)
- **Purpose:** Describe specific implementation scenarios (e.g., "Supply Chain for Manufacturing").
- **Fields:**
  - `title` (Text, required)
  - `slug` (Text, unique, required)
  - `coverImage` (Upload: Media)
  - `summary` (Textarea)
  - `layout` (Blocks, required):
    - `Hero` (Banner with title and image)
    - `PainPoints` (Grid of problem cards: Title, Description, Icon)
    - `Methodology` (Step-by-step process: Title, Description, Image)
    - `BenefitMetrics` (Key results: Label, Value, Suffix)
    - `CallToAction` (Link to form or contact)
    - `Code` (Raw HTML/JSX for developer flexibility)
  - `relatedSuccessStories` (Relationship to `success-stories`)

### 2.2 Collection: Success Stories (`success-stories`)
- **Purpose:** Localized case studies.
- **Fields:**
  - `title` (Text, required)
  - `slug` (Text, unique, required)
  - `clientName` (Text)
  - `industry` (Select/Relationship)
  - `layout` (Blocks, required):
    - `Hero` (Banner)
    - `Challenge` (RichText or Structured Block)
    - `Solution` (RichText or Structured Block)
    - `Results` (List of metrics)
    - `Code` (Raw HTML/JSX for developer flexibility)

## 3. Frontend Implementation (Next.js)

### 3.1 Components
- `SolutionCard`: Displays title, summary, and cover image.
- `StoryCard`: Displays client, industry, and key result snippet.
- `MetricDisplay`: Visual component for success metrics (e.g., "Efficiency +30%").

### 3.2 Routes
- `/solutions`: Grid listing of all industry solutions.
- `/solutions/[slug]`: Detailed view of a solution.
- `/success-stories`: Grid listing of success stories.
- `/success-stories/[slug]`: Detailed view of a story.

## 4. Design & Style
- **Color Ratio:** Adhere strictly to 70% White/Gray, 20% Blue, 10% Red.
- **Typography:** Professional, clean, legible Chinese fonts.
- **Responsiveness:** Fully responsive on Mobile, Tablet, Desktop.
