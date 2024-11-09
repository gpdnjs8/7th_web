/* detail page */
import { useParams } from "react-router-dom";
import useCustomFetch from '../hooks/useCustomFetch';
import './detail.css';
import { useQuery } from "@tanstack/react-query";
import { useGetMovies } from "../hooks/queries/useGetMovies";

const DetailPage=()=>{
    const {movieId} = useParams();
    const { data: movie, isLoading: movieLoading, isError: movieError } = useQuery({
        queryFn: () => useGetMovies({category: movieId, pageParam: 1}),
        queryKey: ['movie', movieId]
    })
    const { data: credits, isLoading: creditsLoading, isError: creditsError } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);
   
    if (movieLoading || creditsLoading) {
        return <h1>Loading...</h1>;
    }
    if (movieError || creditsError) {
        return <h1>Fail to fetch</h1>;
    }
    
    return (
        <div className="detail-page">
            <div className="poster-container">
                <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movie-details">
                    {/* 제목, 별점, 개봉년도, 캐치프레이즈, 상영 시간 */}
                    <h1>{movie.title}</h1>
                    <p>평균 {movie.vote_average}</p>  
                    <p>{new Date(movie.release_date).getFullYear()}</p>
                    <p>{movie.runtime}분</p>
                    {movie.tagline && <h2 className="tagline">{movie.tagline}</h2>} 
                    <p>{movie.overview}</p>
                </div>
            </div>
            
            <div className="credits-container">
                <h3>감독/출연</h3>
                <ul>
                    {credits?.cast && credits.cast.length > 0 ? (
                        credits.cast.slice(0, 20).map(castMember => (
                        <li key={castMember.id}>
                            <img
                                className="credit-image"
                                src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`} 
                                alt={castMember.name}
                            />
                            <div className="credit-name">{castMember.name}</div> {/* 출연진 이름 */}
                            <div className="credit-character">{castMember.character}</div> {/* 배역 */}
                        </li>
                    ))
                ):(<h4>출연진 정보 없음</h4>)}
                </ul>
            </div>
        </div>
    );
};

export default DetailPage;