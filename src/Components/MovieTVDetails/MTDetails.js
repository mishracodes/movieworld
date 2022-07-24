import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import DashboardContainer from '../Dashboard/DashboardContainer';
import CastItem from './CastItem';
import classes from './MTDetails.module.css'
import RecommendationItem from './RecommendationItem';
import Sidebar from './Sidebar';



const MTDetails = () => {
    const { id, type } = useParams();
    const [result, setresult] = useState(null);
    const [cast, setcast] = useState([]);
    const [crew, setcrew] = useState([]);
    const [reviews, setreviews] = useState(null)
    const [recommendation, setrecommendation] = useState([]);
    const [social, setsocial] = useState({});


    const getMovieDetails = async () => {
      let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US`;
      let data = await fetch(url);
      return data.json();
    };
    const getCastCrew = async () => {
      let url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US`;
      let data = await fetch(url);
      let parsedData = await data.json();
  
      setcast(parsedData.cast);
      setcrew(parsedData.crew);
    };

    const getReviews = async () => {
      let url = `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page=1`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setreviews(parsedData.results[0]);
    };
    const getRecommenddation = async () => {
      let url = `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page=1`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setrecommendation(parsedData.results);
    };
    const getSocial = async () => {
      let url = `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=c725cd6e0711c581df4c197979bb6a39`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setsocial(parsedData);
    };

    useEffect(() => {
      getMovieDetails().then((res) => {
        setresult(res);
      });
      getCastCrew();
      getReviews();
      getRecommenddation();
      getSocial();
      // eslint-disable-next-line
    }, [id]);
    function timeConvert(n) {
      var num = n;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + " h " + rminutes + " m";
    }
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <DashboardContainer>
      {result && <div className={classes.mainContainer}>
        <div className={classes['backdrop-container']} style={{backgroundImage: ` linear-gradient(to bottom, #d1700122 150px, #192c2bee 100%),url( 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${result.backdrop_path}')`,height: "550px",}}>
            <img className={classes.posterImage} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`} alt="..."/>
        </div>
        <div className={classes.detailsContainer}>
          <h2 className={classes.titleHeading}>{result.original_title} ({result.release_date.split("-")[0]})</h2>
          <p className={classes.subTitle}> <span className={classes.certificate}>PG-12 </span> 
            {result.genres.map((e) => {return (
              <span key={e.name}>{e.name + " "}</span>
            );})} • {timeConvert(result.runtime)}
          </p>
          <p><span className={classes.starRating}>&#9733; &#9733; &#9733; &#9733; &#9733;</span> {result.vote_average}/10 ( {result.vote_count} votes )
              <span className={classes.fafa}><i className="fa-solid fa-bookmark"></i></span>
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
                        <div key={e.name+Math.random()} className="col-md-4">
                          <p style={{ margin: "0" }} className="h5">
                            
                            <strong>{e.name}</strong>
                          </p>
                          <p>{e.job}</p>
                        </div>
                      );
                    })} 
                </div>
        </div>
        <div className={classes.baseConatiner}>
          <p>Stars</p>
              
              {cast.slice(0, 7).map((e) => {
                return (
                  <div
                    style={{ width: "12%" }}
                    className="scrollmenua mx-1"
                    key={e.id}
                  >
                    <CastItem
                      id={e.id}
                      name={e.name}
                      image={e.profile_path}
                      character={e.character}
                    />
                  </div>
                );
              })}
              <Link to="/" className="text-decoration-none my-2">View More <i className="fa-solid fa-arrow-right-long"></i></Link>

              <hr/>

              <div className={`row`}> 
                <div className={`col-md-9`}>

               
                  <h5 style={{ fontWeight: "600" }}>People also liked</h5>
                  <div className="scrollmenu">
                    {recommendation.map((e) => {
                      return (
                        <div
                          
                          className="scrollmenua mx-2"
                          style={{ width: "25.499999995%" }}
                          key={e.id}
                        >
                          <RecommendationItem
                            id={e.id}
                            title={e.original_title}
                            image={e.backdrop_path}
                          />
                        </div>
                      );
                    })}
                  </div>
            
              
              <hr/>
                    <p>Reviews</p>
              
                        {reviews&&<div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              src={`https://image.tmdb.org/t/p/w64_and_h64_face${reviews.author_details.avatar_path}`}
                              className="card-img-top"
                              alt="..."
                              style={{ borderRadius: "50%", width: '44px' }}
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="card-title">
                              A Review by {reviews.author}
                              <div
                                style={{ padding: "2px 5px" }}
                                disabled
                                className="btn btn-dark btn-sm mx-2 my2"
                              >
                                
                                <i className="fa-solid fa-star mx-1 text-warning"></i>
                                {reviews.author_details.rating}
                              </div>
                            </h5>
                            <p>
                              Written by <strong>{reviews.author}</strong> on
                              {new Date(reviews.created_at).toString()}
                            </p>
                            <p className="card-text">
                              {reviews.content.slice(0, 600)}
                            </p>
                          </div>
                        </div>}
                        <Link to="/" className="text-decoration-none">
                          <p style={{ fontWeight: "600" }} className='my-3'>Read all reviews</p>
                        </Link>

                        <hr/>
                        <h5>Details</h5>
                        
                        <p style={{ margin: "0" }}>
                          <strong>Status</strong> <span className='text-secondary'>{result.status}</span>
                        </p>
                        <p style={{ margin: "0" }}>
                          <strong>Original Language</strong> <span className='text-secondary'>{result.original_language.toUpperCase()}</span>
                        </p>
                        <p style={{ margin: "0" }}>
                          <strong>Budget</strong> <span className='text-secondary'>{formatter.format(result.budget)}</span>
                        </p>
                        <p style={{ margin: "0" }}>
                          <strong>Revenue</strong> <span className='text-secondary'>{formatter.format(result.revenue)}</span>
                        </p>

                        <p style={{ margin: "0" }}>
                          <strong>Adult</strong> <span className='text-secondary'>{result.adult?"Yes":"No"}</span>
                        </p>

                        <p style={{ margin: "0" }}>
                          <strong>Hompage</strong> <a href={result.homepage} target="_blank" rel="noreferrer" ><span className='text-secondary'>Click here to visit</span></a>
                        </p>

                        <p style={{ margin: "0" }}>
                          <strong>Visit IMDb</strong> <a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank" rel="noreferrer" ><span className='text-secondary'>Click here to visit</span></a>
                        </p>
                        
                        <p style={{ margin: "0" }}>
                          <strong>Visit </strong> <span className='text-secondary'>{result.revenue}</span>
                        </p>
                        <p style={{ margin: "0" }}>
                          <strong>Visit </strong> <span className='text-secondary'>{result.revenue}</span>
                        </p>
                        <p style={{ margin: "0" }}>
                          <strong>Visit </strong> <span className='text-secondary'>{result.revenue}</span>
                        </p>
                        <hr/>

                        <div className={classes.belongsToCollection} style={{backgroundImage: ` linear-gradient(to right, #032541cc 150px, #898989ee 100%),url( 'https://image.tmdb.org/t/p/w1440_and_h320_multi_faces${result.belongs_to_collection.backdrop_path}')`,height: "280px",}}>
                        <h2>Part of the {result.belongs_to_collection.name}</h2>
                        <button type="button" class="btn btn-warning text-white">VIEW THE COLLECTION</button>

                        </div>

                </div>

                <div className='col-md-3'>
                <div className="fs-2 px-4">
                          
                          <a
                            href={`https://www.imdb.com/title/${social.imdb_id}`}
                            target="_blank" rel="noreferrer"
                          >
                            <i className="iconhover fa-brands fa-imdb mx-1"></i>
                          </a>
                          <a
                            href={`https://www.facebook.com/${social.facebook_id}`}
                            target="_blank" rel="noreferrer"
                          >
                            <i className="iconhover fa-brands fa-facebook mx-1"></i>
                          </a>
                          <a
                            href={`https://www.instagram.com/${social.instagram_id}`}
                            target="_blank" rel="noreferrer"
                          >
                            <i className="iconhover fa-brands fa-instagram mx-1"></i>
                          </a>
                          <a
                            href={`https://twitter.com/${social.twitter_id}`}
                            target="_blank" rel="noreferrer"
                          >
                            <i className="iconhover fa-brands fa-twitter mx-1"></i>
                          </a>
                        </div>
                  <Sidebar id={id}/>

                </div>

             
              </div>
            
        </div>
      </div>}
    </DashboardContainer>
  )
}

export default MTDetails