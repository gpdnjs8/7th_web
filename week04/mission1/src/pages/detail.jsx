/* detail page */
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { axiosInstance } from '../apis/axios-instance';
import useCustomFetch from '../hooks/useCustomFetch';
import './detail.css';

const DetailPage=()=>{
    const {movieId} = useParams();
    const [credits, setCredits] = useState(null);
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchMovieDetails = async () => {
        setIsLoading(true);
          try {
            const movieResponse = await axiosInstance.get(`/movie/${movieId}?language=ko-KR`);
            setMovie(movieResponse.data);
            const creditsResponse = await axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`);
            setCredits(creditsResponse.data);
          } catch (error) {
            setIsError(true);
          } finally {
            setIsLoading(false);
          }
        };
        fetchMovieDetails();
    }, [movieId]);

    
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error</h1>;

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
                    {credits.cast.slice(0, 20).map(castMember => (
                        <li key={castMember.id}>
                            <img
                                className="credit-image"
                                src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`} 
                                alt={castMember.name}
                            />
                            <div className="credit-name">{castMember.name}</div> {/* 출연진 이름 */}
                            <div className="credit-character">{castMember.character}</div> {/* 배역 */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DetailPage;