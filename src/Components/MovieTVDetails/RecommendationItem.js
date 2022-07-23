import React from 'react'
// import classes from './CastItem.module.css'
import { Link} from "react-router-dom";
const RecommendationItem = (props) => {
const img= props.image?`https://image.tmdb.org/t/p/w300${props.image}`:"https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1354776457?k=20&m=1354776457&s=612x612&w=0&h=kneGOlFHFd5vIcDhDRfyeO5KEQ12_3EiW9cOQXUeAms=";

  return (
    <div className=''>
      <Link to={`/movie/${props.id}`}><img  src={img} style={{borderRadius: '10px', width: '300px', height:'160px'}} className="card-img-top" alt="..."/></Link>
      <p className="text-wrap mt-3 ">{props.title}</p>
    </div>
  )
}

export default RecommendationItem