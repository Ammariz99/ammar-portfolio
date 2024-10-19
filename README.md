# Ammar's Portfolio

Ammar's Portfolio is a personal website designed to showcase the skills and projects of Syed Ammar Bukhari, a passionate web developer. The portfolio provides a platform for potential clients and employers to view Ammar's work, skills, and contact information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Introduction Section**: A brief overview of Ammar's background, skills, and interests in web development.
- **Download CV**: An option to download Ammar's CV in PDF format for easy access.
- **Social Media Links**: Links to Ammar's profiles on various social media platforms, enabling easy networking.
- **Responsive Design**: The portfolio is fully responsive, ensuring a seamless experience on devices of all sizes.
- **Header Component**: A clean and accessible navigation bar that includes a logo, navigation links, and a "Hire Me" button.
- **Mobile Navigation**: A collapsible menu for mobile devices to facilitate easy navigation.
- **Navigation Component**: Renders the navigation menu with active link highlighting for better user experience.
- **Page Transition**: Smooth transitions between sections to enhance the overall user experience.
- **Rotating Circle Profile Photo**: A profile picture is displayed inside a continuously rotating circle. The circle has a dynamic stroke-dash animation, and the image inside fades in with a slight delay after the page reloads. This animation is achieved using `Framer Motion`.

  - The rotation and stroke-dash animation create a smooth visual experience, with the image being statically displayed inside the circle.

- **Animated Social Media Icons**: Social media icons are displayed, linking to Ammar's GitHub, LinkedIn, Upwork, and Fiverr profiles. The icons are interactive and designed using `React Icons`.

  - These links are styled to match the portfolio's design and allow users to connect easily.

- **Animated Stairs Transition**: A set of animated stairs provides a unique page transition effect. Each "stair" is a div that moves smoothly across the screen during page changes, creating a staggered staircase effect using `Framer Motion`.

  - The stair animation runs in reverse when the component exits, adding a dynamic visual effect to the transition between pages.

- **Stair Transition Handler**: This feature manages the page transitions with stairs using `AnimatePresence` from `Framer Motion`. When navigating between pages, the stair effect adds a layer of sophistication to the portfolio.

- **Stats Section**: An animated statistics section using the `CountUp` library to display key stats like "Months of Experience", "Projects Completed", and "Technologies Used". Each stat is animated, providing an engaging experience.

  - This section highlights Ammar's professional milestones with animated counters.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Framer Motion**: A powerful library for creating animations.
- **React Icons**: A library for using icons in React applications.
- **CountUp.js**: A library for animating numbers and statistics.
- **PDF.js**: A JavaScript library for rendering PDF documents in web applications.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <https://github.com/Ammariz99/ammar-portfolio.git>

   ```

2. **Navigate to the project directory**:

   ```bash
   cd <ammar-portfolio>

   ```

3. **Install dependencies:**:

   ```bash
   npm Install

   ```

4. **Run the development server**:

   ```bash
   npm run dev

   ```

5. **Accessing the Application**
   Once the server is running, open your browser and navigate to http://localhost:3000 to view the application live

## Usage

Once the development server is running, you can explore Ammar's portfolio by clicking through the different sections, downloading the CV, and visiting social media links. The site is designed to be user-friendly, allowing visitors to easily navigate and find information.

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/syed-ammar-bukhari/)

## Feedback

This README includes all the new animated features like the rotating circle photo, social media icons, stair transitions, and stats with their descriptions, as well as the usage of libraries like `Framer Motion` and `CountUp`
