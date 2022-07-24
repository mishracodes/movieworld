import React, { useEffect, useState } from 'react'
import classes from "./People.module.css";
import { Link, useParams, useLocation } from "react-router-dom";
import DashboardContainer from '../Dashboard/DashboardContainer';

const People = () => {
  const { id, type } = useParams();
  const [result, setresult] = useState(null);

  const getDetails = async () => {
    let url = `https://api.themoviedb.org/3/person/${id}?api_key=c725cd6e0711c581df4c197979bb6a39&language=en-US`;
    let data = await fetch(url);
    return data.json();
  };

  useEffect(() => {
    getDetails().then((res) => {
      setresult(res);
    });

    // eslint-disable-next-line
  }, [id]);

  return (
    <DashboardContainer>
      {result && <div className={classes.mainContainer}>
        <div className='row mx-4'>
          <div className='col-md-3 my-3'>
          <img className={classes.profileImage} width="100%" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.profile_path}`} alt="..."/>
          
<h4>Personal Info</h4>
<h5 className='mt-4'>Known For</h5>
{result.known_for_department}

<h5 className='mt-4'>Gender</h5>
{result.gender===2?"Male":"Female"}

<h5 className='mt-4'>Birthday</h5>
{result.birthday}

<h5 className='mt-4'>Place of Birth</h5>
{result.place_of_birth}

<h5 className='mt-4'>Also Known As</h5>
{result.also_known_as.map((e)=>{return(<p>{e}</p>)})}
          </div>
          <div className='col-md-9 my-3'>
            <h2>{result.name} </h2>
            <h5 className='mt-4'>Biography</h5>
            <p>{result.biography}</p>
            <h5 className='mt-4'>Known For</h5>
          </div>
        </div>
      </div>}
    </DashboardContainer>
  )
}

export default People