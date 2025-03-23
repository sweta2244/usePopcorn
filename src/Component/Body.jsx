import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { GiStarFormation } from "react-icons/gi";
import { IoHourglassOutline } from "react-icons/io5";

export default function Body({ listofmovies }) {
    const [index,setIndex]=useState(null);
    function handleDescriptionVisible(i){
        setIndex(i);
    }
    return (
      <div className="Body">
        <ListofMovies listofmovies={listofmovies} handleDescriptionVisible={handleDescriptionVisible}/>
        <DetailBlock listofmovies={listofmovies} index={index}/>
      </div>
    );
  }

  function ListofMovies({ listofmovies,handleDescriptionVisible }) {
    return (
        <div className="list-of-movies">
        {Array.from({length:20}).map((_,i)=>
            <div className="individual-film" key={i} onClick={()=>handleDescriptionVisible(i)}>
                <div>
                    <img src={listofmovies.Poster} alt="image" />
                </div>
            <div>
                <p>{listofmovies.Title}</p>
                <p>
                <CiCalendarDate /> {listofmovies.Released}
                </p>
            </div>
            </div>)
        }
        </div>
    );
  }

  function DetailBlock({ listofmovies,index }) {
    return (
      <div className="detail">
        {index===null?<NullIndex/>:<NotNullIndex/>}
      </div>
    );
  }

  function NullIndex(){
    return (
        <div>
            <h2>MOVIES YOU WATCHED</h2>
            <div className="description-flex">
                <p><FaHashtag/> 0 movies</p>
                <p><IoStarSharp/> 0.00</p>
                <p><GiStarFormation/> 0.00</p>
                <p><IoHourglassOutline/> 0 min</p>
            </div>
        </div>
    )
  }

  function NotNullIndex(){
    return(
        <div>
            <div className="description-head">
                
            </div>
        </div>
    )
  }