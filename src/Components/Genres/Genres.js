import React, { useEffect, useState } from "react";
import DashboardContainer from "../Dashboard/DashboardContainer";
import classes from "./Genres.module.css";
import { Link, useParams, useLocation } from "react-router-dom";

const Genres = () => {
  const { id, type } = useParams();
  const { title } = useLocation().state
  const [result, setresult] = useState([])

  const fetchList= async()=>{
      let url="https://api.themoviedb.org/3/discover/"+type+"?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres="+id+"&page=1"
      let data = await fetch(url);
      let parsedData = await data.json();
      setresult(parsedData.results)
  }

  useEffect(() => {
      fetchList();
      // eslint-disable-next-line
  }, [])
  return (
    <DashboardContainer>
      <div className={classes.cards}>
        <div className={classes.card}>
          <p>Top {title} {type==='movie'?'Movies':'Tvs'}</p>
          <div className="row">

          
          {result&& result.map((e)=>{
            return(
              <div className="col-md-1 mb-4" style={{marginRight: "15px"}}>
                <Link to={`/${type}/${e.id}`}><img src={`https://image.tmdb.org/t/p/w342${e.poster_path}`} className="card-img-top" style={{borderRadius: '8px'}} alt="..."/></Link>
                <p style={{fontSize: '12px'}} className="mt-1 text-wrap ">{e.original_name?e.original_name:e.original_title}</p>
              </div>
            )
          })}
          </div>
          




        </div>
      </div>
    </DashboardContainer>
  );
};

export default Genres;
