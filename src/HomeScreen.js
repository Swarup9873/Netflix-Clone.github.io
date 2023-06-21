import React from "react";
import './HomeScreen.css';
import './Nav'
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";


function HomeScreen(){
    return (
    <div className="homeScreen">
        <Nav/>

        <Banner/>

        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        
    </div>

    );
}

export default HomeScreen;