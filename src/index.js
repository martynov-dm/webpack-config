import './styles/index.scss'

const recipe = {
  leather: 12,
  iron: 3,
}

const betterRecipe = {
  ...recipe,
  refinedMoonstone: 2,
}

console.log(recipe)
console.log(betterRecipe)
