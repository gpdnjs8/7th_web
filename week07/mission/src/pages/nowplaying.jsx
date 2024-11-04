/* now-playing page */
import React, { useEffect, useState } from 'react';
import M_Comp from '../components/movies'
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';
import { useGetMovies } from '../hooks/queries/useGetMovies';
import Card_list_sk from '../components/card_list_sk';
import { useQuery } from '@tanstack/react-query';
import * as S from './searchstyle'

const Container = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: flex-start; 
  margin: -10px; 
`;

const NowPlayingPage = () => {
    const {data: movies, isPending, isError} = useQuery({
      queryFn: () => useGetMovies({category: 'now_playing', pageParam: 1}),
      queryKey: ['movies', 'now_playing']
    })

    if(isPending){
      return (
        <S.MovieGridContainer>
          <Card_list_sk/>
        </S.MovieGridContainer>
      )
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
    
export default NowPlayingPage;