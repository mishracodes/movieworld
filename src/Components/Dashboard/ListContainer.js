import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner';
import CardItemVertical from './CardItemVertical'
import classes from './ListContainer.module.css';

const ListContainer = () => {
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
    <div className={`${classes.scrollItemContainer}`}>
        {result.map((e)=>{
            return (
                <div className={`${classes.scrollItems}  row  align-items-start mx-2`} style={{width: "164px"}} key={e.id}>
                <CardItemVertical id={e.id} title={e.title} image={e.poster_path} />
                </div>
            )
        })}
        {!result && <Spinner/>}

        </div>
  )
}

export default ListContainer