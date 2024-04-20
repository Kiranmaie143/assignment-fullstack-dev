import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BookContainer } from './style';
import ReactPaginate from 'react-paginate';

import SearchBar from '../SearchBar/SearchBar';
import BookList from './BookList';

const REACT_APP_API_URL = 'https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await
        axios.get(REACT_APP_API_URL);
        setBooks(res.data);
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(pd => <div key={pd.book_id}>
            <p>{pd.name}</p>
            {/* <img src={pd.thumbnailUrl} alt=""/> */}
        </div>)
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [offset]);


  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase())
        || book.author.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, books]);

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
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </BookContainer>
  );
}

export default Books;
