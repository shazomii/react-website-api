var models = require('./server.js').models;

// let toSave = [
//     {first_name: "Wale", email: "wale@gmail.com"},
//     {first_name: "Tayo", email: "tobi@gmail.com"},
//     {first_name: "Dele", email: "dele@gmail.com"},
//     {first_name: "Femi", email: "femi@gmail.com"},
//     {first_name: "Tayo", email: "toheeb@gmail.com"},
//     {first_name: "Timi", email: "timi@gmail.com"},
//     {first_name: "Tola", email: "tola@gmail.com"},
//     {first_name: "Tayo", email: "tayo@gmail.com"},
// ]

// toSave.map(obj => {
//     models.Profile.findOrCreate(obj, (error, created) => {
//         console.log("created?", error, created);
//     });
// });

// let filter = {
//     where: {
//         email: {like: "@"}
//     },
//     order: 'id DESC',
//     limit: 8,
//     fields: {
//         first_name: true
//     }
// }

models.Profile.destroyById("5e0e07573ba09c2222690a5c", (err, found) => {
    console.log("found?", err, found);
});