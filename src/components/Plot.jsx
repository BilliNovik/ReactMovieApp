import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function Plot(props) {
    let [plot, setPlot] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${props.id}`)
            .then(response => response.json())
            .then(data => setPlot(data.Plot))

        return () => {setPlot([])}
    }, [])

    return <>
        {plot === 'N/A' ? <p></p> : <p>{plot}</p>}
    </>
}

export default Plot;