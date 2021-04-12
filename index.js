// Code your solution here

let findMatching = (array, string) => {
    return array.filter(el => el.toLowerCase() === string.toLowerCase())
}

let fuzzyMatch = (array, string) => {
    return array.filter(el => el.toLowerCase().indexOf(string.toLowerCase()) === 0)
}
  
let matchName = (array, string) => {
    return array.filter(el => el.name === string)
}

