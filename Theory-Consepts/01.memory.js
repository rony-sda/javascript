
// Stack (Premitive), Heap (Non-Premitive)
// Stack => Copy
let myName = 'Rony'
let myShortName = myName
myShortName = 'Rony Gazi'

// Heap => Refferace
const myRole = {
    name: 'Rony',
    work: 'Software Developer'
}

const myUpdateRole = myRole
myUpdateRole.work = 'Full Stack Developer'

/*
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.
*/