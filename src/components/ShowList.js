import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, onShowClicked, onShowDelete}) {
    return(
        <div className="show-container">
            {shows.map((show) => (
                <ShowCard 
                    key={show.id}
                    show={show}
                    onShowClicked={onShowClicked}
                    onShowDelete={onShowDelete}
                />
            ))}
        </div>
    );
}

export default ShowList;