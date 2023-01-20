export const addHideClass = ((targetPath) => {
  if (!targetPath) {
    throw new Error(`Target path should not be empty`)
  }
  if (!document.querySelector(targetPath)?.classList?.contains('hide')) {
    const elementFromUI = document.querySelector(targetPath)
    elementFromUI?.classList?.add('hide')
  }
})