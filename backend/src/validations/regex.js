const validate_numbers = (num) => {
   var numRegex =
         /^[0-9]+$/

   if (numRegex.test(num)) return true

   return false
}

const validate_letters = (lett) => {
   var lettRegex =
         /^[A-Zá-ü ]+$/i

   if (lettRegex.test(lett)) return true

   return false
}

module.exports = {
   validate_letters,
   validate_numbers
}