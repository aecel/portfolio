import shoppingCartGif from "./images/projects/shopping-cart.gif"
const getOdinProjects = () => {
  const odinProjectsArray = [
    {
      id: "shopping-cart",
      name: "Shopping Cart",
      imageSrc: shoppingCartGif,
      link: "https://aecel.github.io/shopping-cart/",
      githubLink: `https://github.com/aecel/shopping-cart`,
      alt: "Link to shopping cart",
    },
  ]

  return odinProjectsArray
}

export default getOdinProjects
