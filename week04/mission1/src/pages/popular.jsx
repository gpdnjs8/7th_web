/* popular page */
import React, { useEffect, useState } from 'react';
import M_Comp from '../components/movies'
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';

const Container = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: flex-start; 
  margin: -10px; 
`;

const PopularPage = () => {
  const {data: movies, isLoading, isError} = useCustomFetch('/movie/popular?language=ko-KR&page=1');

  if(isLoading){
    return<div>
        <h1>Loading...</h1>
    </div>
  }
  if(isError){
    return<div>
        <h1>Error</h1>
    </div>
  }
    
  return (
    <Container>
      {movies?.results?.length > 0 ? (
            movies.results.map((movie) => (
              <M_Comp
                key={movie.id}
                id={movie.id}
                image={movie.poster_path} 
                title={movie.title} 
                releaseDate={movie.release_date} 
              />
            ))
        ) : (
            <div>Loading...</div>
        )}
    </Container>
  );
};

export default PopularPage;