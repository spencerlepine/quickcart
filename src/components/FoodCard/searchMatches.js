const containsWord = (str, word) => {
  const formatWord = word.toLowerCase()
  const formatStr = str.toLowerCase()
  const strRegex = new RegExp(`${formatStr}`, "gi")
  return strRegex.test(formatWord)
}

const searchMatches = (search, groceryItem) => {
    if (search.length > 2) {
        const namesMatch = containsWord(search, groceryItem.name)
        const categoriesMatch = containsWord(search, groceryItem.category)
        console.log(namesMatch, search, groceryItem.name)
        return namesMatch || categoriesMatch
    } else { return true }
}

export default searchMatches