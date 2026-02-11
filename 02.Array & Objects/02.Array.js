const teams = ["bangladesh", "pakistan"];
const asiaTeams = ["ban", "pak", "sri"];
const withOutAsiaTeams = ["aus", "eng", "nz"];
let score1 = 100;
let score2 = 200;
let score3 = 300;

// --------------- push problem ------------------
asiaTeams.push(withOutAsiaTeams);
console.log(asiaTeams);
// ["aus", "eng", "nz" , ["ban", "pak", "sri"]]
console.log(asiaTeams[3][1]); // pak

// --------------- spread operator ------------------
const all_teams = [...asiaTeams, ...withOutAsiaTeams];
console.log(all_teams);
// ["aus", "eng", "nz","ban", "pak", "sri"]

// --------------- Others Array Methods ------------------
console.log(Array.isArray("Rony")); // false
console.log(Array.from("Rony")); // [ 'R', 'o', 'n', 'y' ]
console.log(Array.from({ name: "Rony" })); // []
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
