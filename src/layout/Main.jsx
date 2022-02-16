import React from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";

function Main() {
    
    let [userEnter, setUserEnter] = React.useState('matrix');
    let [userType, setUserType] = React.useState('');

    return <div className="content">
        <Search userEnterSearch={setUserEnter} userTypeClick={setUserType}/>
        <Cards userEnter={userEnter} userType={userType} />
    </div>
}   

export default Main;