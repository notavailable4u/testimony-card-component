# Testimonial Card Component - React 19

A functional React component, stylized with Tailwind CSS, that takes User information gathered from a form and renders a "Testimonial" Card in a Responsive Design flex container that adjusts to different screen sizes, ensuring a good user experience across devices.

This project was based on a [GreatFrontEnd](https://www.greatfrontend.com/projects) [project to develop a single Testimony Card based on the Figma Design specifications.](https://www.greatfrontend.com/projects/challenges/testimonial-card). I created this component, which builds on that concept by adding the ability to generate multiple cards at once, with three choices for color theme, because I wanted to try out the new Form features in React 19 and to practice using Tailwind CSS and building projects with Vite.

## Features

- Renders a card for each user entered via the form which displays the user's profile picture, name, email, and comments.

- Choice of three color schemes.

- Component can be easily extended or modified to include additional user information or styling as needed.

- The profile picture is a placeholder image imported from assets, which can easily be changed to the actual picture.

- Styled with Tailwind CSS classes for a responsive and modern look.

- The component uses a dark mode theme with appropriate styling for light and dark backgrounds.

- The cards are displayed in a flex container that centers them both vertically and horizontally on the page.

- Responsive Design adjusts to different screen sizes, ensuring a good user experience across devices.

- Functional component that does not maintain any internal state, making it simple and efficient for rendering static data.

- Modular design and reusability: component can be imported and used in other applications apps and websites or be used independently to generate code for the cards.

## Tech Stack

- [Vite v7](https://vite.dev) (Vite requires [Node.js](https://nodejs.org/en/) version 20.19+, 22.12+.)
- [React v19.1](https://react.dev)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)
- [TailwindCSS v4.1](https://tailwindcss.com/)

## Installation

1. Clone the repository

```
git clone https://github.com/notavailable4u
```

2. Navigate to project directory

```
cd dir
```

3. Install Dependencies

```
npm install
```

4. Start the dev server

```
npm run dev
```

5. App will open in your browser at http://localhost:5173

## Screenshots

**Input Form**

![Screenshot of Input Form](/src/assets/infput-form-screenshot.png)

**Input Form - Dark Mode**

![Screenshot of Input Form Dark Mode](/src/assets/infput-form-dark-screenshot.png)

**Testimonial Card - Original Theme - Gray**
![Screenshot of Original Theme in Light and Dark Mode](/src/assets/originalLightDark.png)

**Testimonial Card - Alternate Theme 1 - Blue**
![Screenshot of Blue Theme in Light and Dark Mode](/src/assets/blueLightDark.png)

**Testimonial Card - Alternate Theme 2 - Green**
![Screenshot of Green Theme in Light and Dark Mode](/src/assets/greenLightDark.png)

**Pixel 7 Pro Mockup View**
![Screenshot of Pixel 7 Pro Mockup](/src/assets/Pixel-7-Pro-mockup.png)

