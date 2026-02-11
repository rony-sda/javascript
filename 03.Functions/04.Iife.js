// Immediately Invoked Function Expressions (IIFE)
// What is IIFE : IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed as soon as it is defined. It is commonly used to avoid polluting the global namespace or to create a private scope for variables.

// named IIFE
(function dbConnect() {
  console.log(`DB CONNECTED`);
})(); // must be addedd semi clone when you decleared same file two iife function. becouse js not cleriry how context is end

// unnamed IIFE
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("rony");
