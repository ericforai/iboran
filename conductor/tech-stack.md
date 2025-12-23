# Technology Stack: Boran Corporate Website

This document outlines the core technologies and frameworks used in the Boran corporate website refactor.

## Frontend & Application Framework
- **Next.js 15.4.10 (App Router):** The primary framework for building the user-facing website and handling server-side rendering (SSR) and static site generation (SSG).
- **React 19.2.1:** The UI library for building components.
- **Tailwind CSS 3.4.3:** The utility-first CSS framework for styling, adhering to the project's specific color ratio guidelines.
- **TypeScript 5.7.3:** Ensuring type safety and better developer experience across the codebase.

## Backend & Content Management
- **Payload CMS 3.68.5:** The headless CMS providing the administrative interface, content API, and internal logic for collections (Pages, Posts, Media, etc.).
- **MongoDB:** The primary database for storing content and application data.

## Libraries & UI Components
- **Framer Motion 12.23.26:** The primary library used for creating fluid and modern animations.
- **Radix UI:** A collection of unstyled, accessible UI primitives (Checkbox, Select, Label, Slot, etc.) used as the foundation for the design system.
- **next-sitemap:** For automated generation of sitemap.xml and robots.txt.
- **Lucide React 0.378.0:** The icon library for consistent and scalable vector icons.

## Tooling & Infrastructure
- **Docker:** Containerization for consistent development and deployment environments (Dockerfile and docker-compose.yml included).
- **ESLint 9.16.0 & Prettier 3.4.2:** For code linting and formatting.
- **Vitest 3.2.3 & Playwright 1.56.1:** Testing frameworks for unit/integration and end-to-end testing respectively.
- **PNPM 9/10:** The package manager for efficient dependency management.

## Project Architecture
- **Monolith (Next.js + Payload):** Next.js and Payload are integrated into a single application structure for simplified deployment and optimized performance.