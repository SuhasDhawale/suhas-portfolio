let catEnabled = false

export const isCatEnabled = () => catEnabled

export const enableCat = () => {
  catEnabled = true
}

export const disableCat = () => {
  catEnabled = false
}
