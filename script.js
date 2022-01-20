// Promise Dependent with chaining
let doproject = new Promise((resolve, reject) => {
  //doing the project
  let isprojectdone = true;
  if (isprojectdone) {
    resolve("Project is done");
  } else {
    reject("Project is not done");
  }
});

let attendTechnical = new Promise((resolve, reject) => {
  //attending the technical
  let isattending = true;
  if (isattending) {
    resolve("Technical round is cleared");
  } else {
    reject("Technical round is not cleared");
  }
});

let attendHrRound = new Promise((resolve, reject) => {
  //attending the HR round
  let isattending = false;
  if (isattending) {
    resolve("HR round is cleared");
  } else {
    reject("HR round is not cleared");
  }
});

// call the promise and chain the promises
// doproject.then((msg) => {
//   let themsg = `${msg}`;
//   attendTechnical.then((msg) => {
//     themsg += `${msg}`;
//     attendHrRound
//       .then((msg) => {
//         themsg += `${msg}`;
//         console.log(`${themsg}.FInally You have got the job`);
//       })
//       .catch((msg) => {
//         console.log(`${msg}`);
//       })
//       .catch((msg) => {
//         console.log(`${msg}`);
//       })
//       .catch((msg) => {
//         console.log(`${msg}`);
//       });
//   });
// });

// Promise.all=>
// it method takes an array of promises and return a promise
// 1.resolved if all promises are fullfilled
// 2.if one of promise gets rejected then all promise will get rejected

// Syntax:
// Promise.all([promise1,promise2,promise3])

const promisecollection = Promise.all([
  doproject,
  attendTechnical,
  attendHrRound,
]);
promisecollection
  .then(function (result) {
    console.log(result);
    console.log("All promises are resolved");
  })
  .catch(function (err) {
    console.log(err);
    console.log("All promises are rejected");
  });
