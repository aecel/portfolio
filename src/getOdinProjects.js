import shoppingCartGif from "./images/projects/shopping-cart.gif"
import habbitAppGif from "./images/projects/habit-app.gif"

const getOdinProjects = () => {
  const odinProjectsArray = [
    {
      id: "habit-app",
      name: "Merciful Habit Forming App",
      imageSrc: habbitAppGif,
      link: "https://aecel.github.io/habit-app/",
      githubLink: `https://github.com/aecel/habit-app`,
      alt: "Link to Merciful Habit Forming App",
    },
    // {
    //   id: "shopping-cart",
    //   name: "Shopping Cart",
    //   imageSrc: shoppingCartGif,
    //   link: "https://aecel.github.io/shopping-cart/",
    //   githubLink: `https://github.com/aecel/shopping-cart`,
    //   alt: "Link to Shopping Cart",
    // },
  ]

  return odinProjectsArray
}

export default getOdinProjects
