import React from 'react'
import classes from './Crousal.module.css'
const Crousal = () => {
  return (
    <div className={classes.container}>
      <div id="carouselExampleDark" className="carousel carousel-dark carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active"  data-bs-interval="2000">
        <img height="500px" width="100%" src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/56v2KjBlU4XaOv9rVYEQypROD7P.jpg" className={`${classes.container} d-block`} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className={classes.textWhite}>First slide label</h5>
          <p className={classes.textWhite}>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item"  data-bs-interval="2000">
        <img height="500px" width="100%" src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/yQTQL9pliY6vpRt8HkjUJrKymBb.jpg" className={`${classes.container} d-block`} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className={classes.textWhite}>Second slide label</h5>
          <p className={classes.textWhite}>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item"  data-bs-interval="2000">
        <img height="500px" width="100%" src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg" className={`${classes.container} d-block`} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className={classes.textWhite}>Third slide label</h5>
          <p className={classes.textWhite}>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
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