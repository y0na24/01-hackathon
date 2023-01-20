export const addHideClass = ((targetPath) => {

  if (!targetPath) {
    throw new Error(`Target path should not be empty`)
  }

  const imgUI = document.querySelector(targetPath)

  if (imgUI && !imgUI.classList.contains('hide')) {
    imgUI.classList.add('hide')
  }
})