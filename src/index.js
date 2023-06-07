const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

const oldBooksOrdered = (year) => books
  .filter((book) => 2020 - book.releaseYear >= 60)
  .sort((a, b) => a.releaseYear - b.releaseYear);

const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);

const fantasyOrScienceFictionAuthors = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  .map((book) => book.author.name)
  .sort();

const oldBooks = (year) => books
  .filter((book) => year - book.releaseYear >= 60)
  .map((book) => book.name);

const authorWith3DotsOnName = () => books
  .find((book) => {
    const dotsOnName = book.author.name.split('.');
    if (dotsOnName.length === 4) return true;

    return false;
  }).name;

// console.log(authorWith3DotsOnName());

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
