
let faker = require('faker');
let database = {profils: [],users: []}

const libelles = ["APPRENANT","ADMIN","FORMATEUR"]
let profilRows = 4;
for (let i = 0; i < profilRows ; i++) {
  database.profils.push(
    {
      id: i+1,
      libelle: libelles[i],
      isDeleted: false,
      users: []
    }
  );
}
const usersRows = 30;
for (let i = 0; i < usersRows ; i++) {
  const random = Math.round(Math.random()*profilRows);
  database.users.push(
    {
      id:i+1,
      firstname: faker.name.firstName(),
      username: faker.internet.userName(),
      profil: libelles[random],
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.avatar(),
      isDeleted: false
    }
  );
}
console.log(JSON.stringify(database));

