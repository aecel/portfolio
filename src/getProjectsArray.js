import shoppingCartGif from "./images/projects/shopping-cart.gif";
import habbitAppGif from "./images/projects/habit-app.gif";
import cvProjectGif from "./images/projects/cv-project.gif";
import memoryGameGif from "./images/projects/memory-game.gif";
import weatherAppGif from "./images/projects/weather-app.gif";
import toDoGif from "./images/projects/to-do.gif";

import shoppingCartFavicon from "./images/favicons/shopping-cart.ico";
import habbitAppFavicon from "./images/favicons/habit-app.ico";
import cvProjectFavicon from "./images/favicons/cv-project.ico";
import memoryGameFavicon from "./images/favicons/memory-game.ico";
import weatherAppFavicon from "./images/favicons/weather-app.ico";
import toDoFavicon from "./images/favicons/to-do.ico";

const getProjectsArray = () => {
  const projectsArray = [
    {
      id: "habit-app",
      name: "Habit Forming App",
      imageSrc: habbitAppGif,
      link: "https://aecel.github.io/habit-app/",
      githubLink: `https://github.com/aecel/habit-app`,
      alt: "Link to Habit Forming App",
      projectType: "Personal Project",
      favicon: habbitAppFavicon,
      description: [],
      lessons: [],
      whatIUsed: ["React", "Javascript", "HTML", "CSS", "Webpack", "npm"],
      npmLibraries: [
        "React Router",
        "Chart.js",
        "React Tooltip",
        "party.js",
        "calendar-object",
        "shade-generator",
      ],
    },
    {
      id: "shopping-cart",
      name: "Shopping Cart",
      imageSrc: shoppingCartGif,
      link: "https://aecel.github.io/shopping-cart/",
      githubLink: `https://github.com/aecel/shopping-cart`,
      alt: "Link to Shopping Cart",
      projectType: "Odin Project",
      favicon: shoppingCartFavicon,
      description: [],
      lessons: [],
      whatIUsed: ["React", "Javascript", "HTML", "CSS", "Webpack", "npm"],
      npmLibraries: ["React Router"],
    },
    {
      id: "cv-project",
      name: "CV Generator",
      imageSrc: cvProjectGif,
      link: "https://aecel.github.io/cv-project/",
      githubLink: `https://github.com/aecel/cv-project`,
      alt: "Link to CV Generator",
      projectType: "Odin Project",
      favicon: cvProjectFavicon,
      description: [],
      lessons: [],
      whatIUsed: ["React", "Javascript", "HTML", "CSS", "Webpack", "npm"],
      npmLibraries: ["jsPDF"],
    },
    {
      id: "memory-game",
      name: "Memory Game",
      imageSrc: memoryGameGif,
      link: "https://aecel.github.io/memory-game/",
      githubLink: `https://github.com/aecel/memory-game`,
      alt: "Link to Memory Game",
      projectType: "Odin Project",
      favicon: memoryGameFavicon,
      description: [],
      lessons: [],
      whatIUsed: ["React", "Javascript", "HTML", "CSS", "Webpack", "npm"],
      npmLibraries: ["party.js"],
    },
    {
      id: "weather-app",
      name: "Weather App",
      imageSrc: weatherAppGif,
      link: "https://aecel.github.io/weather-app/",
      githubLink: `https://github.com/aecel/weather-app`,
      alt: "Link to Weather App",
      projectType: "Odin Project",
      favicon: weatherAppFavicon,
      description: [],
      lessons: [],
      whatIUsed: [
        "Javascript",
        "HTML",
        "CSS",
        "Webpack",
        "npm",
        "OpenWeather API",
        "Leaflet API",
      ],
      npmLibraries: ["round-flag-icons", "unix-timestamp"],
    },

    // {
    //   id: "to-do",
    //   name: "To Do List",
    //   imageSrc: toDoGif,
    //   link: "https://aecel.github.io/to-do/",
    //   githubLink: `https://github.com/aecel/to-do`,
    //   alt: "Link to To Do List",
    //   projectType: "Odin Project",
    //   favicon: toDoFavicon,
    //   description: [],
    //   lessons: [],
    //   whatIUsed: ["Javascript", "HTML", "CSS", "Webpack", "npm"],
    //   npmLibraries: ["date-fns"],
    // },
  ];

  return projectsArray;
};

export default getProjectsArray;
