import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import DashboardContainer from '../Dashboard/DashboardContainer';
import classes from './MTDetails.module.css'



const MTDetails = () => {
    const { id } = useParams();
    const [result, setresult] = useState(null);
    const [cast, setcast] = useState([]);
    const [crew, setcrew] = useState([]);

    const getMovieDetails = async () => {
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US`;
      let data = await fetch(url);
      return data.json();
    };
    const getCastCrew = async () => {
      let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US`;
      let data = await fetch(url);
      let parsedData = await data.json();
  
      setcast(cast.concat(parsedData.cast));
      setcrew(crew.concat(parsedData.crew));
    };
    useEffect(() => {
      getMovieDetails().then((res) => {
        setresult(res);
      });
      getCastCrew();
      // eslint-disable-next-line
    }, []);
    function timeConvert(n) {
      var num = n;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + " h " + rminutes + " m";
    }

  return (
    <DashboardContainer>
      {result && <div>
      <div className={classes['backdrop-container']} style={{
          backgroundImage: ` linear-gradient(to bottom, #d1700122 150px, #192c2bee 100%),url( 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${result.backdrop_path}')`,
          height: "550px",
        }}>
          <img
          className={classes.posterImage}
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`}
              alt="..."
            />

      </div>
      <div className={classes.detailsContainer}>
      <h2 className={classes.titleHeading}>{result.original_title} ({result.release_date.split("-")[0]})</h2>
      
      <p className={classes.subTitle}> <span className={classes.certificate}>PG-12 </span> {result.genres.map((e) => {return (
      <span>{e.name + " "}</span>
                );})}
              • {timeConvert(result.runtime)}
            </p>
            <p><span className={classes.starRating}>&#9733; &#9733; &#9733; &#9733; &#9733;</span> {result.vote_average}/10 ( {result.vote_count} votes )
            <div className={classes.fafa}><i className="fa-solid fa-bookmark"></i></div>
            </p>
          <p className={classes.taglineText}><em>{result.tagline}</em></p>
            
            <p>{result.overview}</p>
              <div className="row">
                
                {crew
                  .filter((e) => {
                    return (
                      e.job === "Writer" ||
                      e.job === "Director" ||
                      e.job === "Story"
                    );
                  })
                  .map((e) => {
                    return (
                      <div className="col-md-4">
                        <p style={{ margin: "0" }} className="h5">
                          
                          <strong>{e.name}</strong>
                        </p>
                        <p>{e.job}</p>
                      </div>
                    );
                  })}
              </div>
      </div>
      </div>}
    </DashboardContainer>
  )
}

export default MTDetails