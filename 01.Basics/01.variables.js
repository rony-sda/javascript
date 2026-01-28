
// assigning variables in JavaScript
const accountId = 4389
// accountId = 2 => Reassign not allowed
let accountEmail = "rony@example.com"
var accountPassword = "securepassword3239"
anything = '42390' // not recommended
let accountState; // undefined

// reassigning variables
accountEmail = "rony@anything.com"
accountPassword = "21212121"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, anything, accountState])
