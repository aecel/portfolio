import shoppingCartGif from "./images/projects/shopping-cart.gif"
import habbitAppGif from "./images/projects/habit-app.gif"
import cvProjectGif from "./images/projects/cv-project.gif"
import memoryGameGif from "./images/projects/memory-game.gif"
import weatherAppGif from "./images/projects/weather-app.gif"
import toDoGif from "./images/projects/to-do.gif"

import shoppingCartFavicon from "./images/favicons/shopping-cart.ico"
import habbitAppFavicon from "./images/favicons/habit-app.ico"
import cvProjectFavicon from "./images/favicons/cv-project.ico"
import memoryGameFavicon from "./images/favicons/memory-game.ico"
import weatherAppFavicon from "./images/favicons/weather-app.ico"
import toDoFavicon from "./images/favicons/to-do.ico"

const getOdinProjects = () => {
  const odinProjectsArray = [
    {
      id: "habit-app",
      name: "Habit Forming App",
      imageSrc: habbitAppGif,
      link: "https://aecel.github.io/habit-app/",
      githubLink: `https://github.com/aecel/habit-app`,
      alt: "Link to Habit Forming App",
      projectType: "Personal Project",
      favicon: habbitAppFavicon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lessons: ["what I learned lorem ipsum", "dolor sit amet", "third lesson"],
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lessons: ["what I learned lorem ipsum", "dolor sit amet", "third lesson"],
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lessons: ["what I learned lorem ipsum", "dolor sit amet", "third lesson"],
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lessons: ["what I learned lorem ipsum", "dolor sit amet", "third lesson"],
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lessons: ["what I learned lorem ipsum", "dolor sit amet", "third lesson"],
    },
    {
      id: "to-do",
      name: "To Do List",
      imageSrc: toDoGif,
      link: "https://aecel.github.io/to-do/",
      githubLink: `https://github.com/aecel/to-do`,
      alt: "Link to To Do List",
      projectType: "Odin Project",
      favicon: toDoFavicon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lessons: ["what I learned lorem ipsum", "dolor sit amet", "third lesson"],
    },
  ]

  return odinProjectsArray
}

export default getOdinProjects
