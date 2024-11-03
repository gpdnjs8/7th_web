/* search page */
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './searchstyle.js'
import {useState} from 'react'
import SearchMovieList from '../components/searchmovielist.jsx';


const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const [searchParams, setSearchParams] = useSearchParams({
    mq: ''
  })

  const mq = searchParams.get('mq')

  const handleSearchMovie = () => {
    if(mq==searchValue) return;

    navigate(`/search?mq=${searchValue}`)
  }

  const handleSearchMovieWithKeyboard = (e) => {
    if(e.key === 'Enter'){
      handleSearchMovie();
    }
  }

  

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
