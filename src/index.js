const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

const oldBooksOrdered = (year) => {
  // escreva seu código aqui
  const oldBooks = books.filter((book) => 2020 - book.releaseYear >= 60);
  return oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
};

const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);

const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
};

const oldBooks = (year) => {
  // escreva seu código aqui
};

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

console.log(booksByAuthorBirthYear(1920));

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
