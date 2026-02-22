



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Player.css';


function Player() {
  const { type, id } = useParams();
  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAnime, setIsAnime] = useState(false);

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        setLoading(true);
        


        // Not anime, fetch video data
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=662704c7860fefb640db978e5e9d5744&append_to_response=videos`
        );
        setMediaData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaData();
  }, [type, id]);

  if (isAnime) {
    return <div>Redirecting to anime site...</div>;
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!mediaData) return <div>No data found</div>;

  // Find the best trailer
  const trailer = mediaData.videos?.results?.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  ) || mediaData.videos?.results?.[0];

  return (
    <div className="player-container">
      <div className="backdrop">
        {mediaData.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
            alt={mediaData.title || mediaData.name}
          />
        )}
      </div>
      
      <div className="media-info">
        <h1>{mediaData.title || mediaData.name}</h1>
        <p>{mediaData.overview}</p>
        <div className="details">
          <span>Rating: {mediaData.vote_average}/10</span>
          <span>Release: {mediaData.release_date || mediaData.first_air_date}</span>
        </div>
      </div>

      <div className="video-container">
        {trailer ? (
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title={`${mediaData.title || mediaData.name} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="no-trailer">
            <p>No trailer available</p>
            {mediaData.homepage && (
              <a href={mediaData.homepage} target="_blank" rel="noopener noreferrer">
                Visit official site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Player;


