import shoppingCartGif from "./images/projects/shopping-cart.gif"
import habbitAppGif from "./images/projects/habit-app.gif"
import cvProjectGif from "./images/projects/cv-project.gif"
import memoryGameGif from "./images/projects/memory-game.gif"
import weatherAppGif from "./images/projects/weather-app.gif"
import toDoGif from "./images/projects/to-do.gif"


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
    },
    {
      id: "shopping-cart",
      name: "Shopping Cart",
      imageSrc: shoppingCartGif,
      link: "https://aecel.github.io/shopping-cart/",
      githubLink: `https://github.com/aecel/shopping-cart`,
      alt: "Link to Shopping Cart",
      projectType: "Odin Project",
    },
    {
      id: "cv-project",
      name: "CV Generator",
      imageSrc: cvProjectGif,
      link: "https://aecel.github.io/cv-project/",
      githubLink: `https://github.com/aecel/cv-project`,
      alt: "Link to CV Generator",
      projectType: "Odin Project",
    },
    {
      id: "memory-game",
      name: "Memory Game",
      imageSrc: memoryGameGif,
      link: "https://aecel.github.io/memory-game/",
      githubLink: `https://github.com/aecel/memory-game`,
      alt: "Link to Memory Game",
      projectType: "Odin Project",
    },
    {
      id: "weather-app",
      name: "Weather App",
      imageSrc: weatherAppGif,
      link: "https://aecel.github.io/weather-app/",
      githubLink: `https://github.com/aecel/weather-app`,
      alt: "Link to Weather App",
      projectType: "Odin Project",
    },
    {
      id: "to-do",
      name: "To Do List",
      imageSrc: toDoGif,
      link: "https://aecel.github.io/to-do/",
      githubLink: `https://github.com/aecel/to-do`,
      alt: "Link to To Do List",
      projectType: "Odin Project",
    },

  ]

  return odinProjectsArray
}

export default getOdinProjects
