const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  // escreva seu código aqui
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
};

const oldBooksOrdered = (year) => {
  // escreva seu código aqui
  const oldBooks = books.filter((book) => 2020 - book.releaseYear >= 60);
  return oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
};

const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
};

const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
};

const oldBooks = (year) => {
  // escreva seu código aqui
};

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

console.log(oldBooksOrdered(2020))

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
