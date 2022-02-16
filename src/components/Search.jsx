import React from "react";

function Search({userEnterSearch, userTypeClick}) {

    let [searchEnter, setSearchEnter] = React.useState('');
    let [clickType, setClickType] = React.useState('');

    function search() { 
        userEnterSearch(searchEnter);
        userTypeClick(clickType);
    }

    function onKeyPressHandler(e) {
        if (e.key === 'Enter') search() 
    }

    function typeChange(e) {
        setClickType(e.target.getAttribute("data-action"));
    }
    
    return (
        <div className="row">
            <div className="input-field col s12">
                <input id="search" type="text" className="search" placeholder="Введите запрос" onInput={(e) => setSearchEnter(e.target.value)} onKeyPress={onKeyPressHandler} />
                <a className="waves-effect waves-light btn" onClick={search}>search</a>
            </div>
            <div className="col s12 text-inner">
                <p className="text">
                    <label>
                        <input name="movies" type="radio" data-action="" onChange={typeChange} />
                        <span>All</span>
                    </label>
                </p>
                <p className="text">
                    <label>
                        <input name="movies" type="radio" data-action="movie" onChange={typeChange} />
                        <span>Movie</span>
                    </label>
                </p>
                <p className="text">
                    <label>
                        <input name="movies" type="radio" data-action="series" onChange={typeChange} />
                        <span>Series</span>
                    </label>
                </p>
                <p className="text">
                    <label>
                        <input name="movies" type="radio" data-action="game" onChange={typeChange} />
                        <span>Game</span>
                    </label>
                </p>
            </div>
        </div>
    )
}

export default Search;