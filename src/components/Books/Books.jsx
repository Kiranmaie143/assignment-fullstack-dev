import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookContainer } from './style';

import SearchBar from '../SearchBar/SearchBar';
import BookList from './BookList';
import ReactPaginate from 'react-paginate';

const REACT_APP_API_URL = 'https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await
        axios.get(REACT_APP_API_URL);
        setBooks(res.data);
        setData(res.data);
        setTotalPages(Math.ceil(res.data.length / itemsPerPage));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase())
        || book.author.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, books]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <BookContainer>
        <section id="books">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Books</h2>
                <hr className="line-dark" />
                <SearchBar
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
  
            {error && <div>Something went wrong...</div>}
  
            {loading ? (
              <p>Loading books...</p>
            ) : (
              <BookList books={filteredBooks} />
            )}
  
          </div>
        </section>
    <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
    />
</BookContainer>
  );
}

export default Books;
