import React from "react";
import Plot from "./Plot";

function Card({film}) {

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        {film.Poster === 'N/A' ? <img src={`https://via.placeholder.com/308x458.png?text=${film.Title}`} />
                            : <img src={film.Poster} /> 
                        }
                        <span className="card-title">{film.Title}</span>
                    </div>
                    <div className="card-content">
                        <Plot id={film.imdbID}/>
                    </div>
                    <div className="card-action">
                        <a href="#" className="card-action__link">{film.Year}</a>
                        <a href="#" className="card-action__link">{film.Type}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;