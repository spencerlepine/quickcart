export default function searchMatch(user, database) {
    if (user.length < 3) {
        return false
    }

    let exact = database === user.toLowerCase()
    let threeLetters = JSON.stringify(user.slice(0, user.length)).toLowerCase() === JSON.stringify(database.slice(0, user.length).toLowerCase())
    
    let re = new RegExp(`\\b[${database}]+\\b`, 'gi');  

    if (re.test(user) || exact || threeLetters) {
        return true
    }
}