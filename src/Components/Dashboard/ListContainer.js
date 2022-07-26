import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner';
import CardItemVertical from './CardItemVertical'
import classes from './ListContainer.module.css';

const ListContainer = ({type,api}) => {
    const [result, setresult] = useState([])

    const fetchList= async()=>{
        let url=api+"1"
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
                <CardItemVertical id={e.id} title={e.title?e.title:(e.original_name?e.original_name:e.name)} image={e.poster_path?e.poster_path:e.profile_path} type={type} />
                </div>
            )
        })}
        {!result && <Spinner/>}

        </div>
  )
}

export default ListContainer