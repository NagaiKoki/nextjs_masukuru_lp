export const mediaQuery = (maxWidth?: number, minWidth?: number) => {
  const width = window.innerWidth
  if (width < maxWidth) {
    return true
  } else if (width > minWidth) {
    return true
  } else {
    return false
  }
}