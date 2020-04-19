// import React from 'react';
import React, { useState, useEffect } from 'react';
import searchTracks from '../services/spotifyService';
// import insertRating from '../services/dbService';
import TrackList from '../components/trackList/trackList';
import SearchBar from '../components/searchBar/searchBar';
import './home.css';

function HomePage () {

    const [tracks, setTracks] = useState(null);
    // const [ratings, setRatings] = useState(null);

    // async function rateTrack (body) {
    //     insertRating({userName, trackId, rating})
    //     .then (rating => {
    //         setRatings([...ratings, rating])
    //     })
    // }

    async function getTracks (input) {
        const res = await searchTracks(input)
        setTracks(res);
    }

    useEffect(() => {
        getTracks()
    },[]);

    return (
        <div className="home">
            <header>
                <SearchBar getTracks={getTracks}/>
            </header>
            {tracks && <TrackList tracks={tracks} />}
        </div>
    );
}

export default HomePage