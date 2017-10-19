const db = require('./server/db');
const Campuses = require('./server/db/models/campuses');
const Students = require('./server/db/models/students');

const campuses = [{
  name: 'Terra',
  image: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg',
}, {
  name: 'Luna',
  image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/christmas2015fullmoon.jpg',
}, {
  name: 'Titan',
  image: 'https://saturn.jpl.nasa.gov/internal_resources/402/',
}, {
  name: 'Saturn',
  image: 'https://a.scpr.org/i/46a9d34e76cb0aa5782f7330d9a69431/170973-full.jpg',
}, {
  name: 'Io',
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg',
}, {
  name: 'Pluto',
  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg',
}, {
  name: 'Gallifrey',
  image: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAwMC8xMjQvb3JpZ2luYWwvMDcxMTI3LXZlbnVzLXN1cmZhY2UtMDIuanBn',
}, {
  name: 'Mars',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg',
}, {
  name: 'Neptune',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1200px-Neptune_Full.jpg',
}, {
  name: 'Europa',
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg',
}];

const id = () => Math.round(Math.random() * (campuses.length - 1)) + 1;

const students = [
  { campusId: id(), name: 'Ben Kenobi', email: 'ljsf@glj.com' },
  { campusId: id(), name: 'Han Solo', email: 'fljwe@jlfsa.edu' },
  { campusId: id(), name: 'Jar Jar Binks', email: 'lasf@jla.edu' },
  { campusId: id(), name: 'Padme Amidala', email: 'wieour@isf.com' },
  { campusId: id(), name: 'Amy Pond', email: 'we@lajs.com' },
  { campusId: id(), name: 'Darth Vader', email: 'lasf@pippo.com' },
  { campusId: id(), name: 'Luke Skywalker', email: 'lskywalker@yahoo.com' },
  { campusId: id(), name: 'Leia Organa', email: 'lwje@ipoo.com' },
  { campusId: id(), name: 'Kylo Ren', email: 'ouwr@jlsfj.edu' },
  { campusId: id(), name: 'Boba Fett', email: 'ouwe@lsf.com' },
  { campusId: id(), name: 'Darth Maul', email: 'lwe@iwref.com' },
  { campusId: id(), name: 'Mace Windu', email: 'sdfw@jl.edu' },
  { campusId: id(), name: 'Clara Oswald', email: 'ljsf@glj.com' },
  { campusId: id(), name: 'Rose Tyler', email: 'fljwe@jlfsa.edu' },
  { campusId: id(), name: 'Rory Williams', email: 'lasf@jla.edu' },
  { campusId: id(), name: 'Donna Noble', email: 'wieour@isf.com' },
  { campusId: id(), name: 'Martha Jones', email: 'we@lajs.com' },
  { campusId: id(), name: 'River Song', email: 'lasf@pippo.com' },
  { campusId: id(), name: 'Madame Vastra', email: 'lskywalker@yahoo.com' },
  { campusId: id(), name: 'Jenny Flint', email: 'lwje@ipoo.com' },
  { campusId: id(), name: 'Sally Sparrow', email: 'ouwr@jlsfj.edu' },
  { campusId: id(), name: 'Sarah Jane Smith', email: 'ouwe@lsf.com' },
  { campusId: id(), name: 'Wilfred Mott', email: 'lwe@iwref.com' },
  { campusId: id(), name: 'Captain Jack Harkness', email: 'sdfw@jl.edu' },
];

const seed = () =>
  Promise.all(campuses.map(campuses =>
    Campuses.create(campuses)))
    .then(() =>
      Promise.all(students.map(students =>
        Students.create(students))));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch((err) => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
