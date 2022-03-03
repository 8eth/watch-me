import React, {useState, useEffect} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [shows, setShows] = useState([])
    const [myShows, setMyShows] = useState([])

    useEffect(() => {
      fetch('http://localhost:8081/shows')
        .then (res => res.json())
        .then(setShows)
     
    }, [])
    
   function addToMyWatchList(show) {
       if(!myShows.includes(show)) {
         setMyShows([...myShows, show])
       }
   }

   function removeFromMyWatchList(show) {
       const myNewShowList = myShows.filter((myShowItem) => (myShowItem !== show))
       setMyShows(myNewShowList)
   }

   function handleDelete (e, show) {
        e.stopPropagation()

        fetch(`http://localhost:8081/shows/${show.id}`, {method: 'DELETE'})

        const newShowList = shows.filter((showsItem) => (showsItem !== show))
        setShows(newShowList)

        const myNewShowList = myShows.filter((myShowItem) => (myShowItem !== show))
        setMyShows(myNewShowList)
    }

    return(
        <>
            <MyWatchList 
                myShows={myShows}
                onShowClicked = {removeFromMyWatchList}
                onShowDelete = {handleDelete}
            />
            <hr/>
            <ShowList 
                shows={shows}
                onShowClicked = {addToMyWatchList}
                onShowDelete = {handleDelete}
            />
        </>
    );
}

export default ShowCatalog;