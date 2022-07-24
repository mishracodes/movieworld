import React from "react";
import Crousal from "../Crousal";
import classes from "./Dashboard.module.css";
import DashboardContainer from "./DashboardContainer";
import GenresConatiner from "./GenresConatiner";
import ListContainer from "./ListContainer";
const Dashboard = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = yyyy+'-'+ mm +'-'+ dd;

  return (
    <DashboardContainer>
      
      <div className={classes.cards}>
      <Crousal/>
      {/* ///////////////////////// POPULAR //////////////////////////// */}
        <div className={classes.card}>
          <p>Popular Now Movie Global</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>

        <div className={classes.card}>
          <p>Popular Now Movie Indian</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=popularity.desc&include_adult=false&include_video=false&release_date.lte=${today}&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>

        <div className={classes.card}>
          <p>Popular Now TV Global</p>
          <ListContainer type="tv" api="https://api.themoviedb.org/3/tv/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>

        " + formattedDate + "&page="+pagePTIn+"
        <div className={classes.card}>
          <p>Popular Now TV Indian</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=popularity.desc&first_air_date.lte=${today}&timezone=Asia%2FKolkata&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>

      {/* ///////////////////////// LATEST //////////////////////////// */}

        <div className={classes.card}>
          <p>Latest Movie Global</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/now_playing?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>
        
        <div className={classes.card}>
          <p>Latest Movie Indian</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=primary_release_date.desc&include_adult=false&include_video=false&release_date.lte=${today}&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
    
        <div className={classes.card}>
          <p>Latest TV Global</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&sort_by=first_air_date.desc&first_air_date.lte=${today}&vote_average.gte=1&vote_count.gte=4&include_null_first_air_dates=false&page=`}/>
        </div>
       
        <div className={classes.card}>
          <p>Latest TV Indian</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=first_air_date.desc&first_air_date.lte=${today}&timezone=Asia%2FKolkata&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
{/* ////////////////////////////AUTHORS CHOICE and TRAILERS //////////////////////////// */}
        <div className={classes.card}>
          <p>Authors Choice</p>
          {/* <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/> */}
        </div>

        <div className={classes.card}>
          <p>Trailers</p>
          {/* <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/> */}
        </div>

{/* //////////////////////////// UPCOMING ////////////////////////////////////// */}

        <div className={classes.card}>
          <p>Upcoming Movie Global</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/upcoming?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>
        
        <div className={classes.card}>
          <p>Upcoming Movie Indian</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=primary_release_date.asc&include_adult=false&include_video=false&primary_release_date.gte=${today}&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
    
        <div className={classes.card}>
          <p>Upcoming TV Global</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&sort_by=first_air_date.asc&first_air_date.gte=${today}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en&page=`}/>
        </div>
       
        <div className={classes.card}>
          <p>Upcoming TV Indian</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=first_air_date.asc&first_air_date.gte=${today}&timezone=Asia%2FKolkata&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>

      {/* ///////////////////////// TOP RATED //////////////////////////// */}

        <div className={classes.card}>
          <p>Top Rated Movie Global</p>
          <ListContainer type="movie" api="https://api.themoviedb.org/3/movie/top_rated?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>
        
        <div className={classes.card}>
          <p>Top Rated Movie Indian</p>
          <ListContainer type="movie" api={`https://api.themoviedb.org/3/discover/movie?api_key=c725cd6e0711c581df4c197979bb6a39&region=IN&sort_by=vote_count.desc&include_adult=false&include_video=false&vote_count.gte=8&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cb&page=`}/>
        </div>
    
        <div className={classes.card}>
          <p>Top Rated TV Global</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/tv/top_rated?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page=`}/>
        </div>
       
        <div className={classes.card}>
          <p>Top Rated TV Indian</p>
          <ListContainer type="tv" api={`https://api.themoviedb.org/3/discover/tv?api_key=c725cd6e0711c581df4c197979bb6a39&sort_by=vote_average.desc&timezone=Asia%2FKolkata&vote_count.gte=8&include_null_first_air_dates=false&with_original_language=hi%7Cas%7Cgu%7Ckn%7Cks%7Cmr%7Cta%7Cte%7Cur%7Cpa%7Cbn&page=`}/>
        </div>
      {/* ///////////////////////// GENRES //////////////////////////// */}

        <div className={classes.card}>
          <p>Genres Movie</p>
          <GenresConatiner type="movie" api="https://api.themoviedb.org/3/genre/movie/list?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US"/>
        </div>
        
        <div className={classes.card}>
          <p>Genres TV</p>
          <GenresConatiner type="tv" api="https://api.themoviedb.org/3/genre/tv/list?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US"/>
        </div>
        
     {/* ///////////////////////// PEOPLE //////////////////////////// */}
        <div className={classes.card}>
          <p>Popular People</p>
          <ListContainer type="person" api="https://api.themoviedb.org/3/person/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page="/>
        </div>


        
        
      </div>
      </DashboardContainer>
  );
};

export default Dashboard;
