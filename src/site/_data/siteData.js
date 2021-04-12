const winners = require('./100ShowData.json');

const pro = winners.filter((winner) => winner.won === 'PRO');
const student = winners.filter((winner) => winner.won === 'STUDENT');
const highSchool = winners.filter((winner) => winner.won === 'HIGH SCHOOL');
const notable = winners.filter((winner) => winner.won === 'NOTABLE');
const finalist = winners.filter((winner) => winner.won === 'FINALIST');

module.exports = {
  hello: 'Hello World!',
  currentYear: new Date().getFullYear(),
  winners,
  pro,
  student,
  highSchool,
  notable,
  finalist,
};

// const brandIdentity = winners.filter(winner => winner.category === 'BRANDING AND IDENTITY')
// const packaging
// const advertising
// const illustration
// const photography
// const web
// const game
// const animation
// const nonProfit
// const service
