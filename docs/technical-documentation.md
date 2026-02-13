# Technical Documentation — Portfolio Website

## Project Description
This project is a simple single-page personal portfolio website.
It was created to practice front-end development using HTML, CSS, and JavaScript, without using any backend or server-side code.

## Website Sections
The website contains the following sections:
- **Navigation/Header**: A fixed header with links that scroll to different sections of the page.
- **Hero Section**: Displays my name, role, and buttons that link to other sections.
- **About Me**: A short introduction and personal tagline.
- **Skills**: A grid layout showing the tools and technologies I am familiar with.
- **Projects**: A responsive layout of project cards with images and links to GitHub repositories.
- **Contact**: A contact form and links to external platforms such as email and GitHub.

## Responsive Design
- CSS Grid and Flexbox are used to structure the layout.
- Media queries are used to adjust the design for different screen sizes.
- The Projects section changes layout based on screen width:
  - Three columns on desktop
  - Two columns on tablet
  - One column on mobile
- Responsiveness was tested using browser resizing tools.

## JavaScript Functionality

### Scroll Animations
- JavaScript is used to detect when sections appear on the screen.
- When a section becomes visible, a simple animation is applied.
- This improves the visual experience without complex logic.

### Theme Toggle
- A button allows switching between light and dark themes.
- The selected theme is saved in the browser so it remains after refreshing the page.
- Theme colors are controlled using CSS variables.

### Contact Form Interaction
- The contact form is handled on the front end only.
- JavaScript checks that all required fields are filled.
- A feedback message is shown to the user after submitting the form.
- No data is stored or sent to a server.

## Assets and Libraries
- Project screenshots and images are stored in the `assets/images/` folder.
- The following external resources are used:
  - Google Fonts for typography
  - Devicon icons for skill representation
