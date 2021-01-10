// TEAM Dolphins scores 96 , 108, 89
// TEAM Koalas scores 88 , 91, 110
// Task 1: Calculate the average score fore each team, using the test data

const scoredolphins = (97 + 112 + 101) / 3

const scoreKoalas = (109 + 95 + 106) / 3

console.log(scoredolphins, scoreKoalas)

// Tase2 : Compare the team's average scores to determine the wineer of the competition, and print it to the console.

// if (scoredolphins > scoreKoalas) {
//   if (scoredolphins >= 100) {
//     console.log(`Dolphins Win the trophy , Dolphins Score: ${scoredolphins}`)
//   }
//   if (scoredolphins < 100) {
//     console.log('No team Win')
//   }
// } else if (scoredolphins < scoreKoalas) {
//   if (scoreKoalas >= 100) {
//     console.log(`Koalas Win, Koalas Score: ${scoredolphins}`)

//     if (scoreKoalas < 100) {
//       console.log('No team Win')
//     }
//   }
// } else if (scoredolphins === scoreKoalas) {
//   console.log('Two team tie')
// }

// Data 1 : Dolphins Win
// Data 2: Koals win
if (scoredolphins > scoreKoalas && scoredolphins >= 100) {
  console.log(`Dolphin Win, Dolphin Score: ${scoredolphins}`)
} else if (scoredolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log('Koalas win the trophy')
} else if (scoredolphins === scoreKoalas && scoredolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both  win the trophy ')
} else {
  console.log('No one wins the trophy')
}
