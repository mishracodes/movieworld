import React from 'react'
import { Link} from "react-router-dom";
import classes from "./GenresItemHorizontal.module.css";

const GenresItemHorizontal = (props) => {
    const images = [
        {
          "id": 28,
          "image": "https://image.tmdb.org/t/p/w185/enNubozHn9pXi0ycTVYUWfpHZm.jpg"
        },
        {
          "id": 12,
          "image": "https://image.tmdb.org/t/p/w185/pbrkL804c8yAv3zBZR4QPEafpAR.jpg"
        },
        {
          "id": 16,
          "image": "https://image.tmdb.org/t/p/w185/kYcJvAcmrG4VDePsSQ8cRNKNOVD.jpg"
        },
        {
          "id": 35,
          "image": "https://image.tmdb.org/t/p/w185/dwVF2gVQLfdbTLlDf2gteqa93gw.jpg"
        },
        {
          "id": 80,
          "image": "https://image.tmdb.org/t/p/w185/r0kZNywAeN6Ar75rxDqLlTP5RiJ.jpg"
        },
        {
          "id": 99,
          "image": "https://image.tmdb.org/t/p/w185/5bINpxxx0vBbd9h1NaokvYCR6Bl.jpg"
        },
        {
          "id": 18,
          "image": "https://image.tmdb.org/t/p/w185/9Xw0I5RV2ZqNLpul6lXKoviYg55.jpg"
        },
        {
          "id": 10751,
          "image": "https://image.tmdb.org/t/p/w185/sLMwiEcAsztB2BNXcPelj2GzkWp.jpg"
        },
        {
          "id": 14,
          "image": "https://image.tmdb.org/t/p/w185/qo7QDVyJwwM9pMo7huxvV7oX84Y.jpg"
        },
        {
          "id": 36,
          "image": "https://image.tmdb.org/t/p/w185/jFp5aAlGQ1H3gwdORL2urr8dnoN.jpg"
        },
        {
          "id": 27,
          "image": "https://image.tmdb.org/t/p/w185/zL8Xa10zuG97oz31yJorOCCVuZP.jpg"
        },
        {
          "id": 10402,
          "image": "https://image.tmdb.org/t/p/w185/rh0gK9db1vmUSCtBFEHzUrEuWtc.jpg"
        },
        {
          "id": 9648,
          "image": "https://image.tmdb.org/t/p/w185/jiQRyCFXAgLBjnbYQxz04dxGWvR.jpg"
        },
        {
          "id": 10749,
          "image": "https://image.tmdb.org/t/p/w185/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg"
        },
        {
          "id": 878,
          "image": "https://image.tmdb.org/t/p/w185/zRGa1H0Au5OEfxFGme7PpYCgtFu.jpg"
        },
        {
          "id": 10770,
          "image": "https://image.tmdb.org/t/p/w185/uNEp0XnPASyrbi2xlg3fWz8ltMP.jpg"
        },
        {
          "id": 53,
          "image": "https://image.tmdb.org/t/p/w185/bMJxwgLyD47CDQ6BFCT2AMMlID7.jpg"
        },
        {
          "id": 10752,
          "image": "https://image.tmdb.org/t/p/w185/a3dmI6TtJ00zgOIPVgaJrouVFg8.jpg"
        },
        {
          "id": 37,
          "image": "https://image.tmdb.org/t/p/w185/9iNyECcekbs5G0EKb4P0Zbq9DIx.jpg"
        },
        {
          "id": 10759,
          "image": "https://image.tmdb.org/t/p/w185/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg"
        },
        {
          "id": 16,
          "image": "https://image.tmdb.org/t/p/w185/wQEW3xLrQAThu1GvqpsKQyejrYS.jpg"
        },
        {
          "id": 35,
          "image": "https://image.tmdb.org/t/p/w185/dGCrZnXCOrxXJKNTK2hMqwvifm5.jpg"
        },
        {
          "id": 80,
          "image": "https://image.tmdb.org/t/p/w185/piB0f2ukhVM2GEWE06Py7onqhWI.jpg"
        },
        {
          "id": 99,
          "image": "https://image.tmdb.org/t/p/w185/2Nwbv0hrN8sThLvgooShcPqmFrO.jpg"
        },
        {
          "id": 18,
          "image": "https://image.tmdb.org/t/p/w185/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
        },
        {
          "id": 10751,
          "image": "https://image.tmdb.org/t/p/w185/xRMv1HBX2MNsXLBfWe0PgEusFrK.jpg"
        },
        {
          "id": 10762,
          "image": "https://image.tmdb.org/t/p/w185/zjBzGqpR3w8fPox84pQHQ20E34d.jpg"
        },
        {
          "id": 9648,
          "image": "https://image.tmdb.org/t/p/w185/iRl1rWK3s00qJOUpiDtKykDG4cK.jpg"
        },
        {
          "id": 10763,
          "image": "https://image.tmdb.org/t/p/w185/oIJHxfVGfDLyK3pX4NhA4ImYOiC.jpg"
        },
        {
          "id": 10764,
          "image": "https://image.tmdb.org/t/p/w185/vFO5RdooXC0XzpdpbVWTrceWE.jpg"
        },
        {
          "id": 10765,
          "image": "https://image.tmdb.org/t/p/w185/26FyEyoqYlC6BqszgKuR2Me557C.jpg"
        },
        {
          "id": 10766,
          "image": "https://image.tmdb.org/t/p/w185/iN9uULLaSx7h21tcR9io2dnARjw.jpg"
        },
        {
          "id": 10767,
          "image": "https://image.tmdb.org/t/p/w185/5YJs2Vt1GLW9qiwUBBnun8bSovf.jpg"
        },
        {
          "id": 10768,
          "image": "https://image.tmdb.org/t/p/w185/oa2gIzDwZ5weyZea5iXPLrQ7leN.jpg"
        },
        {
          "id": 37,
          "image": "https://image.tmdb.org/t/p/w185/uzKBAqpZAvo8xyKcklqXhMlQXhZ.jpg"
        }
      ];
      const imgurl=images.filter((e)=>e.id===props.id)
  return (
    <Link to={`/${props.type}/${props.id}/genres`} state={{title:props.title}}>
        <div style={{marginRight: "15px", backgroundImage: `linear-gradient(to right, #09e4ec55 150px, #192c2bee 100%),url(${imgurl[0].image})`, borderRadius: '8px', height: '80px'}}>
            <p style={{fontSize: '20px', color:'white', textAlign:'center'}} className="mt-4 text-wrap ">{props.title}</p>
        </div>
    </Link>
  )
}

export default GenresItemHorizontal