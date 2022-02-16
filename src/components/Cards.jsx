import React from "react";
import Card from "./Card";

const API_KEY = process.env.REACT_APP_API_KEY;

function Cards({userEnter, userType}) {

    let [DB, setDB] = React.useState([]);
    let [response, setResponse] = React.useState(true);
    
    async function getRequest() {
        try {
            const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${userEnter}&type=${userType}`)
            .then(response => response.json());

            if (data.Response === 'True'){
                setResponse(true)
                setDB(data.Search)
            } else {
                setResponse(false)
            }
        } catch(error) {
            console.log(error)
        }
    }

    React.useLayoutEffect(() => {
        getRequest();
    }, [userEnter, userType])

    return (
        
        response 
         ? <div className="cards">{DB.map((film) => (
            <Card film={film} key={film.imdbID}/>))}
           </div> 
         : <div className="margin-left"><h5>Movie not found!</h5></div>
       
    )
}

export default Cards;