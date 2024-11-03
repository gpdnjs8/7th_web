import * as S from '../pages/searchstyle.js'
import M_Comp from '../components/movies'
import useCustomFetch from '../hooks/useCustomFetch.js';
import { useSearchParams } from 'react-router-dom';
import Card_skeleton from './card_skeleton.jsx';
import Card_list_sk from './card_list_sk.jsx';

const SearchMovieList = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
      })
    
    const mq = searchParams.get('mq')

    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
    const {data: movies, isLoading, isError} = useCustomFetch(url);
    
    if (isLoading){
        return (
            <S.MovieGridContainer>
                <Card_list_sk/>
            </S.MovieGridContainer>
        )
    }
    
    if (isError){
        return <h1 style={{color: 'white'}}>에러 발생</h1>
    }

    return(
        <S.MovieGridContainer>
        {mq && movies?.results?.length > 0 ? (
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
                  <div style={{textAlign: 'center', marginTop: '30px'}}>
                    <h1 style={{color: 'white'}}>해당하는 검색어 {mq}에</h1>
                    <h1 style={{color: 'white'}}>해당하는 데이터가 없습니다.</h1>
                  </div>
        )}
      </S.MovieGridContainer>
    );
};

export default SearchMovieList;