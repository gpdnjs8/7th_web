/* now-playing page */
import React, { useEffect, useState } from 'react';
import M_Comp from '../components/movies'
import styled from 'styled-components';
import Card_list_sk from '../components/card_list_sk';
import { useGetInfiniteMovies } from '../hooks/queries/useGetInfiniteMovies';
import {useInView} from "react-intersection-observer"
import ClipLoader from "react-spinner"

const Container = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: flex-start; 
  margin: -10px; 
`;

const NowPlayingPage = () => {
    const {
      data: movies, isLoading, isFetching, hasNextPage, isPending, fetchNextPage, isFetchingNextPage, error, isError
    } = useGetInfiniteMovies('now_playing');

    const {ref, inView} = useInView({
      threshold: 0,
    })

    useEffect(()=>{
      if(inView){
        !isFetching && hasNextPage && fetchNextPage();
      }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    return (
      <>
        <Container>
          {movies?.pages
            ?.map(page => page.results)
            ?.flat()
            ?.map((movie, _) => (
              <M_Comp
                key={movie.id}
                id={movie.id}
                image={movie.poster_path} 
                title={movie.title} 
                releaseDate={movie.release_date} />
            ))
          }
          {isFetching && <Card_list_sk/>}
        </Container>
        <div ref={ref} style={{marginTop: '50px', justifyContent: 'center', width: '100%'}}>
          {isFetching && <ClipLoader color={'#fff'}/>}
        </div>
      </> 
    );
};
    
export default NowPlayingPage;