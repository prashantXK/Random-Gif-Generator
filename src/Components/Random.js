import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

const {gif,loading,fetchData} = useGif();



  return (
    <div className="w-1/3  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className="text-2xl underline uppercase font-semibold mt-[5px]">
        A Random Gif
      </h1>
      {
        loading ? (<Spinner/>) : (  <img src={gif} width="350" alt="gif" />)
      }
    
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-yellow-200 text-sm py-2 rounded-lg font-semibold mb-[15px]"
      m>
        Generate
      </button>
    </div>
  );
};

export default Random;
