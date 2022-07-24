import React, { useEffect, useState } from 'react'
import classes from "./GenresConatiner.module.css";
import GenresItemHorizontal from './GenresItemHorizontal';

const GenresConatiner = ({api,type}) => {
    const [result, setresult] = useState([])
    const fetchList= async()=>{
        let url=api+"1"
        let data = await fetch(url);
        let parsedData = await data.json();
        setresult(parsedData.genres)
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
                <GenresItemHorizontal id={e.id} title={e.name} type={type} />
                </div>
            )
        })}
    

        </div>
  )
}

export default GenresConatiner