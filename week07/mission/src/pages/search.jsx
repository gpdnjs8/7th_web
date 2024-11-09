/* search page */
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './searchstyle.js'
import {useState, useEffect} from 'react'
import SearchMovieList from '../components/searchmovielist.jsx';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const mq = searchParams.get('mq') || '';

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSearchMovie = () => {
    if(mq==searchValue) return;
    setSearchParams({ mq: searchValue });
    navigate(`/search?mq=${searchValue}`)
  }

  const handleSearchMovieWithKeyboard = (e) => {
    if(e.key === 'Enter'){
      handleSearchMovie();
    }
  }

  useEffect(() => {
    setSearchValue(mq);
  }, [mq]);
  
  return (
    <>
      <S.SearchContainer>
      <input placeholder='영화 제목을 입력해주세요...' value={searchValue} onChange={onChangeSearchValue}
      onKeyDown={handleSearchMovieWithKeyboard}/>
      <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <SearchMovieList searchValue={searchValue}/>
    </>
  );
};

export default SearchPage;
