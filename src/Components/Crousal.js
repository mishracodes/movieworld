import React, { useEffect, useState } from 'react'
import classes from './Crousal.module.css'
const Crousal = () => {
  const [result, setresult] = useState([])

    const fetchList= async()=>{
        let url=`https://api.themoviedb.org/3/movie/popular?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US&page=1`
        let data = await fetch(url);
        let parsedData = await data.json();
        setresult(parsedData.results)
    }

    useEffect(() => {
        fetchList();
        // eslint-disable-next-line
    }, [])

  return (
    <div className={classes.container}>
      <div id="carouselExampleDark" className="carousel carousel-dark carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      {result && result.map((e,index)=>{return (<button key={e.id} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index+1} aria-label={`Slide ${index+1}`}></button>)})}
     
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active"  data-bs-interval="2000">
        <img height="500px" width="100%" src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/56v2KjBlU4XaOv9rVYEQypROD7P.jpg" className={`${classes.container} d-block`} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className={classes.textWhite}>Stranger Things</h5>
          <p className={classes.textWhite}>Every ending has a beginning.</p>
        </div>
      </div>
     
      {result && <div className="carousel-inner">
   { result.map((e)=>{return (<div key={e.id} className="carousel-item"  data-bs-interval="2000">
        <img height="500px" width="100%" src={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces${e.backdrop_path}`} className={`${classes.container} d-block`} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className={classes.textWhite}>{e.original_title}</h5>
          <p className={classes.textWhite}><span className={classes.starRating}>&#9733; &#9733; &#9733; &#9733; &#9733;</span> {e.vote_average}/10 ( {e.vote_count} votes )</p>
        </div>
      </div>)})}
    </div>}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
  )
}

export default Crousal