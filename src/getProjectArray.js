const getProjectArray = () => {
  const importAll = (r) => {
    return r.keys().map(r)
  }
  const imageArray = importAll(
    require.context("./images/projects", false, /\.(png|jpe?g|svg)$/)
  )

  const nameArray = imageArray.map((imageSrc) => {
    return imageSrc.slice(14, imageSrc.indexOf("."))
  })

  let projectArray = []
  for (let i = 0; i < nameArray.length; i++) {
    projectArray.push({
      id: nameArray[i],
      imageSrc: imageArray[i],
      link: `https://aecel.github.io/${nameArray[i]}/`,
      alt: `Link to ${nameArray[i]}`,
    })
  }

  return projectArray
}

export default getProjectArray