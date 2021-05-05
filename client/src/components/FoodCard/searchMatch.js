export default function searchMatch(userSearch, database) {
  if (userSearch === undefined || userSearch.length < 3) {
    return false
  }

  let exact = database === userSearch.toLowerCase()
  let threeLetters =
    JSON.stringify(userSearch.slice(0, userSearch.length)).toLowerCase() ===
    JSON.stringify(database.slice(0, userSearch.length).toLowerCase())

  let re = new RegExp(`\\b[${database}]+\\b`, "gi")

  if (re.test(userSearch) || exact || threeLetters) {
    return true
  }
}
