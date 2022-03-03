import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({myShows, onShowClicked, onShowDelete}) {

    return(
        <div className="watch-list-container">
            {myShows.map((show) => (
                <ShowCard 
                    key={show.id}
                    show={show}
                    onShowClicked={onShowClicked}
                    onShowDelete={onShowDelete}
                />
            ))}
        </div>
    )
}

export default MyWatchList;