import React from "react";
import { Link} from "react-router-dom";
const CardItemVertical = (props) => {
  return (
    <div style={{marginRight: "15px"}}>
      <Link to={`/${props.type}/${props.id}`}><img src={`https://image.tmdb.org/t/p/w342${props.image}`} className="card-img-top" style={{borderRadius: '8px'}} alt="..."/></Link>
      <p style={{fontSize: '12px'}} className="mt-1 text-wrap ">{props.title}</p>
    </div>
  );
};

export default CardItemVertical;
