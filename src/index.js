import React from 'react';
import reactDOM from 'react-dom/client';
import './index.css';
import Books from './booksData';

const BookList = () => {
  const getBook = (id) => {
    const foundBook = Books.find((book) => book.id === id);
    console.log(foundBook);
  };
  return (
    <section className='bookList'>
      {Books.map((book) => {
        return <Book {...book} onBookClick={getBook} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ img, id, title, author, ranking, onBookClick }) => {
  return (
    <article className='book'>
      <div className='ranking'>{ranking}</div>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => onBookClick(id)}>click me</button>
    </article>
  );
};

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
