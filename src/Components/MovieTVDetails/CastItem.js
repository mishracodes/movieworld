import React from 'react'
import classes from './CastItem.module.css'
import { Link} from "react-router-dom";

const CastItem = (props) => {
  return (
    <div className='d-flex align-items-center'>
      <Link to={`/cast/${props.id}`}><img  src={`https://image.tmdb.org/t/p/w100_and_h100_face${props.image}`} className="card-img-top" style={{borderRadius: '50%', marginRight: '5px', width: '60px'}} alt="..."/></Link>
      <div><p style={{fontSize: '15px', marginBottom: '0'}} className="text-wrap ">{props.name}</p>
      <p style={{fontSize: '12px'}} className="mt-1 text-wrap ">{props.character}</p>
      </div>

    </div>
  )
}

export default CastItem