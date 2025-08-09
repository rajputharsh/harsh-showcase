# Harsh Rajput Portfolio - Replit Migration

## Project Overview
Professional portfolio website for Harsh Rajput, Assistant Product Manager at American Express. The site showcases experience, skills, projects, education, and personal life.

## Recent Changes
- **Migration from Lovable to Replit (August 2025)**:
  - Updated routing from React Router DOM to Wouter for Replit compatibility
  - Fixed dependency issues (installed sonner)
  - Updated Tailwind config to support custom CSS variables and portfolio styling
  - Maintained all original styling and functionality
  - Assets preserved in client/public/lovable-uploads/

## Project Architecture
- **Frontend**: React with TypeScript, Vite build system
- **Styling**: Tailwind CSS with custom design system (dark theme, professional styling)
- **Routing**: Wouter (migrated from React Router DOM)
- **Components**: Shadcn/ui components with custom portfolio sections
- **Backend**: Express.js with Node.js (minimal backend for potential future features)
- **Storage**: In-memory storage setup (ready for database integration)

## User Preferences
- Professional, clean design with dark theme
- Smooth scrolling navigation
- Custom typography (IBM Plex Sans, Raleway, IBM Plex Mono)
- American Express blue accent colors
- Cinematic portfolio design

## Dependencies
- React 18.3.1 with TypeScript
- Wouter for routing
- Shadcn/ui components
- Tailwind CSS with custom configuration
- Framer Motion for animations
- Lucide React for icons
- Express.js backend

## Development Notes
- Server runs on port 5000
- Uses Vite for development with HMR
- Custom CSS variables for consistent theming
- Assets located in client/public/lovable-uploads/