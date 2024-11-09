/* popular page */
import React, { useEffect, useState } from 'react';
import M_Comp from '../components/movies'
import styled from 'styled-components';
import ClipLoader from "react-spinner"
import { useQuery } from '@tanstack/react-query';
import { useGetMovies } from '../hooks/queries/useGetMovies';

const Container = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: flex-start; 
  margin: -10px; 
`;
const PageButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const PopularPage = () => {
  const [page, setPage] = useState(1);
  const {data: movies, isLoading, isError} = useQuery({
    queryKey: ['movies', 'popular', page],
    queryFn: () => useGetMovies({ category: 'popular', pageParam: page }),
    keepPreviousData: true,
  });
  
  const fetchPreviousPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));
  const fetchNextPage = () => setPage((prev) => prev + 1);
  
  if(isLoading){
    return<div><h1>Loading...</h1></div>
  }
  if(isError){
    return<div><h1>Error</h1></div>
  }

  return (
    <>
      <Container>
        {isLoading && <ClipLoader color="#fff" />}
        {movies?.results?.map((movie) => (
          <M_Comp
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
          />
        ))}
      </Container>
  
      <PageButton>
        <button
          onClick={fetchPreviousPage}
          disabled={page === 1}
          style={{
            cursor: page > 1 ? 'pointer' : 'not-allowed',
            backgroundColor: page > 1 ? '#ff4b6e' : '#ccc',
            color: '#fff',
            padding: '13px 25px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '15px'
          }}
        >이전</button>
        <span style={{ fontSize: '18px', color: 'white', marginTop: '10px' }}>Page {page}</span>
        <button
          onClick={fetchNextPage}
          style={{
            cursor: 'pointer',
            backgroundColor: '#ff4b6e',
            color: '#fff',
            padding: '13px 25px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '15px'
          }}
        >다음</button>
      </PageButton>
    </>
  );
};

export default PopularPage;