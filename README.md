
# Crisantos Inc. - Portfolio Website

A professional portfolio website for Crisantos Inc., showcasing expertise in full-stack development and projects.

## Project info

Professional portfolio website showcasing skills, projects, and experience in full-stack development.

## Project Structure

```
├── index.html
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── style.css
├── tailwind.config.ts
├── vite.config.ts
├── components.json
├── robots.txt
├── script.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
├── bun.lockb
└── .gitignore
```

## Technologies Used

This project is built with:

- HTML5
- CSS3
- Vanilla JavaScript
- MongoDB (for backend/server implementation)

## Getting Started

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Open the index.html file in your browser
# You can use a local server like Live Server or just open the file directly
```

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light theme toggle with user preference saved
- Animated section transitions
- Contact form (frontend implementation)
- Project showcase
- Skills visualization
- Experience timeline

## Deployment

This is a static website that can be deployed on any web hosting service:

1. Upload all files to your hosting service
2. Ensure the server is configured to serve index.html as the default document

## Custom Domain Setup

To connect a custom domain:

1. Configure DNS settings with your domain provider
2. Set up hosting provider to use your custom domain
3. Update all references to domain in the codebase
