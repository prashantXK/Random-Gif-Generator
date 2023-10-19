
import './App.css';
import React from 'react';
import Random from './Components/Random';
import Tag from './Components/Tag';
function App() {
  return (
    <div className='w-full h-screen flex flex-col background  items-center' >
      <h1 className='  bg-white rounded-lg w-11/12 text-center mt-[30px]  px-2 py-2 text-3xl font-semibold '>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
<Random/>
<Tag/>
      </div>
    </div>
  );
}

export default App;
