import React, { useEffect, useState } from 'react'
import classes from './Sidebar.module.css'

const Sidebar = (props) => {
    const {id, type}=props;
    const [images, setimages] = useState(null)
    const [videos, setvideos] = useState(null)
    const getImages = async () => {
        let url = `https://api.themoviedb.org/3/${type}/${id}/images?api_key=c725cd6e0711c581df4c197979bb6a39`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setimages(parsedData);
      };
      const getVideos = async () => {
        let url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=c725cd6e0711c581df4c197979bb6a39`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setvideos(parsedData);
      };
      useEffect(() => {
        getImages();
        getVideos();
        // eslint-disable-next-line
      }, [id]);
  return (
    <div className='px-4 py-4'>
        {videos&& videos.results &&<div className='mb-4'>
            Videos
            <div className='row my-2'>
                {videos.results[0]&&<div className='col-md-12'><div className={classes.videoContainer}> <i className={`fa-solid fa-play fs-1 ${classes.playIcon}`}></i> <img width='100%' className={classes.imageBlur} src={`https://img.youtube.com/vi/${videos.results[0].key}/mqdefault.jpg`} alt="sidenavvideo"/></div></div>}
            </div>
            <div className='row my-2'>
                {videos.results[1]&&<div className='col-md-6'><div className={classes.videoContainer}> <i className={`fa-solid fa-play fs-3 ${classes.playIcon}`}></i> <img width='100%' className={classes.imageBlur} src={`https://img.youtube.com/vi/${videos.results[1].key}/mqdefault.jpg`} alt="sidenavvideo"/></div></div>}
                {videos.results[2]&&<div className='col-md-6'><div className={classes.videoContainer}> <i className={`fa-solid fa-play fs-3 ${classes.playIcon}`}></i> <img width='100%' className={classes.imageBlur} src={`https://img.youtube.com/vi/${videos.results[2].key}/mqdefault.jpg`} alt="sidenavvideo"/></div></div>}
            </div>
            See all {videos.results.length} videos
        </div>}
        {images && images.backdrops &&<div>
            Photos
            <div className='row my-2'>
                {images.backdrops[0]&&<div className='col-md-12'><img width='100%' className={classes.imageBlur} src={`https://image.tmdb.org/t/p/w300${images.backdrops[0].file_path}`} alt="sidenavvideo"/></div>}
            </div>
            <div className='row my-2'>
                {images.backdrops[1]&&<div className='col-md-6'><img width='100%' className={classes.imageBlur} src={`https://image.tmdb.org/t/p/w154${images.backdrops[1].file_path}`} alt="sidenavvideo"/></div>}
                {images.backdrops[2]&&<div className='col-md-6'><img width='100%' className={classes.imageBlur} src={`https://image.tmdb.org/t/p/w154${images.backdrops[2].file_path}`} alt="sidenavvideo"/></div>}
            </div>
            See all {images.backdrops.length +images.posters.length +images.logos.length} images
        </div>}
    </div>
  )
}

export default Sidebar