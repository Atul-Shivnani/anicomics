"use client"

import { useState, useRef } from "react";

export default function Grid() {

    const [isPlaying, setIsPlaying] = useState({
        aniV1: false,
        aniV2: false,
        aniV3: false,
      });
    
      // Use refs to access the video elements
      const videoRefs = {
        aniV1: useRef(null),
        aniV2: useRef(null),
        aniV3: useRef(null),
      };
    
      // Function to handle play/pause functionality
      const handlePlayPause = (videoKey) => {
        const video = videoRefs[videoKey].current;
        if (isPlaying[videoKey]) {
          video.pause();
        } else {
          video.play();
        }
        setIsPlaying((prev) => ({
          ...prev,
          [videoKey]: !prev[videoKey],
        }));
      };

  return (
    <>
    <div className="flex justify-center items-center">
    <h1 className="font-manga text-2xl m-10">new arrival</h1>
    </div>
   
      <div
        className="grid grid-cols-3 grid-rows-2 m-1 mb-10 border-black rounded-xl border-2"
        style={{ height: "80vh" }}
      >
        <div className=" w-full h-full mb-10 overflow-hidden group relative">
          <img
            src="/ani1.png"
            className="w-full h-full object-contain rounded-tl-xl border-black border"
          />
          <div className="absolute hidden group-hover:block bg-black rounded-full text-white top-28 right-4 p-3">
            <p className="font-manga text-xs">
              hey, tanjiro <br />
              why are we here?
            </p>
          </div>
        </div>
        <div className=" w-full h-full overflow-hidden group relative">
          <img
            src="/p1.png"
            className="w-full h-full object-contain group-hover:scale-125 ease-in-out duration-500 bg-white border border-black"
          />
          <div className="absolute hidden group-hover:block bg-white bg-opacity-60 left-0 top-1/2 h-1/2 w-full font-manga p-4">
            <h1>product name</h1>
            <p className="text-xs">product category and collection</p>
            <br />
            <p className="text-xs text-red-500 line-through">Rs. 1499</p>
            <p className="text-sm">Rs. 1200</p>
            <div className="absolute p-2 right-0 flex bottom-1">
              <button>
                <img src="/like.png" className="h-8 w-8" />
              </button>
              <button>
                <span className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full p-2 border-black ml-2 border-2 text-sm">
                  Add to bag
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" row-span-2 w-full overflow-hidden group relative">
          <video
          muted
          loop
           ref={videoRefs.aniV2}
            src="/aniV2.mp4"
            className="w-full h-full object-cover rounded-r-xl border-black border"
          />
          <div className="absolute bg-white bg-opacity-40 hidden group-hover:flex justify-center items-center h-full w-full top-0 left-0">
          <button onClick={() => handlePlayPause("aniV2")}>
              <img
                src={isPlaying.aniV2 ? "/pause.png" : "/play.png"} className="w-20 h-20" />
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden group relative">
          <img
            src="/p2.png"
            className="w-full h-full object-contain group-hover:scale-125 ease-in-out duration-500 bg-white border rounded-bl-xl border-black"
          />
          <div className="absolute hidden group-hover:block bg-white bg-opacity-60 left-0 top-1/2 h-1/2 w-full font-manga p-4">
            <h1>product name</h1>
            <p className="text-xs">product category and collection</p>
            <br />
            <p className="text-xs text-red-500 line-through">Rs. 1499</p>
            <p className="text-sm">Rs. 1200</p>
            <div className="absolute p-2 right-0 flex bottom-1">
              <button>
                <img src="/like.png" className="h-8 w-8" />
              </button>
              <button>
                <span className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full p-2 border-black ml-2 border-2 text-sm">
                  Add to bag
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden relative group">
          <img
            src="/ani2.png"
            className="w-full h-full object-contain border border-black"
          />
          <div className="absolute hidden group-hover:block bg-black rounded-full text-white top-28 left-4 p-3">
            <p className="font-manga text-xs">even i don't know</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
    <h1 className="font-manga text-2xl m-10">design of the week</h1>
    </div>
   
      
      <div
        className="grid grid-cols-3 grid-rows-2 m-1 mb-10 border-black rounded-xl border-2"
        style={{ height: "80vh" }}
      >


<div className=" row-span-2 w-full overflow-hidden group relative">
          <video
           muted
           loop
            ref={videoRefs.aniV3}
            src="/aniV3.mp4"
            className="w-full h-full object-cover rounded-l-xl border-black border"
          />
          <div className="absolute bg-white bg-opacity-40 hidden group-hover:flex justify-center items-center h-full w-full top-0 left-0">
          <button onClick={() => handlePlayPause("aniV3")}>
              <img
                src={isPlaying.aniV3 ? "/pause.png" : "/play.png"} className="w-20 h-20" />
            </button>
          </div>
        </div>



        <div className=" w-full h-full overflow-hidden group relative">
          <img
            src="/ani3.png"
            className="w-full h-full object-contain border-black border"
          />
          <div className="absolute hidden group-hover:block bg-black rounded-full text-white top-28 right-2 p-3">
            <p className="font-manga text-xs">
              hey, kanjiro <br />
              how long we need to<br/> be dressed like this?
            </p>
          </div>
        </div>


        <div className=" w-full h-full overflow-hidden group relative">
          <img
            src="/p3.png"
            className="w-full h-full object-contain group-hover:scale-125 ease-in-out duration-500 bg-white border border-black rounded-tr-xl"
          />
          <div className="absolute hidden group-hover:block bg-white bg-opacity-60 left-0 top-1/2 h-1/2 w-full font-manga p-4">
            <h1>product name</h1>
            <p className="text-xs">product category and collection</p>
            <br />
            <p className="text-xs text-red-500 line-through">Rs. 1499</p>
            <p className="text-sm">Rs. 1200</p>
            <div className="absolute p-2 right-0 flex bottom-1">
              <button>
                <img src="/like.png" className="h-8 w-8" />
              </button>
              <button>
                <span className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full p-2 border-black ml-2 border-2 text-sm">
                  Add to bag
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden group relative">
          <img
            src="/p4.png"
            className="w-full h-full object-contain group-hover:scale-125 ease-in-out duration-500 bg-white border border-black"
          />
          <div className="absolute hidden group-hover:block bg-white bg-opacity-60 left-0 top-1/2 h-1/2 w-full font-manga p-4">
            <h1>product name</h1>
            <p className="text-xs">product category and collection</p>
            <br />
            <p className="text-xs text-red-500 line-through">Rs. 1499</p>
            <p className="text-sm">Rs. 1200</p>
            <div className="absolute p-2 right-0 flex bottom-1">
              <button>
                <img src="/like.png" className="h-8 w-8" />
              </button>
              <button>
                <span className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full p-2 border-black ml-2 border-2 text-sm">
                  Add to bag
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden relative group">
          <img
            src="/ani2.png"
            className="w-full h-full object-contain border border-black rounded-br-xl"
          />
          <div className="absolute hidden group-hover:block bg-black rounded-full text-white top-28 left-6 p-3">
            <p className="font-manga text-xs">it's <b>Tanjiro</b>!!!</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
    <h1 className="font-manga text-2xl m-10">Best seller</h1>
    </div>
   


      <div
        className="grid grid-cols-3 grid-rows-2 m-1 mb-10 border-black rounded-xl border-2"
        style={{ height: "80vh" }}
      >
        <div className=" w-full h-full overflow-hidden group relative">
          <img
            src="/ani8.png"
            className="w-full h-full object-contain rounded-tl-xl border-black border"
          />
          <div className="absolute hidden group-hover:block bg-black rounded-full text-white top-20 left-4 p-3">
            <p className="font-manga text-xs">
            don't look at me<br/>just grab your<br/> t-shirt and flex
            </p>
          </div>
        </div>
        <div className=" w-full h-full overflow-hidden group relative">
          <img
            src="/p6.png"
            className="w-full h-full object-contain group-hover:scale-125 ease-in-out duration-500 bg-white border border-black"
          />
          <div className="absolute hidden group-hover:block bg-white bg-opacity-60 left-0 top-1/2 h-1/2 w-full font-manga p-4">
            <h1>product name</h1>
            <p className="text-xs">product category and collection</p>
            <br />
            <p className="text-xs text-red-500 line-through">Rs. 1499</p>
            <p className="text-sm">Rs. 1200</p>
            <div className="absolute p-2 right-0 flex bottom-1">
              <button>
                <img src="/like.png" className="h-8 w-8" />
              </button>
              <button>
                <span className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full p-2 border-black ml-2 border-2 text-sm">
                  Add to bag
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" row-span-2 w-full overflow-hidden group relative">
          <video
           muted
           loop
            ref={videoRefs.aniV1}
            src="/aniV1.mp4"
            className="w-full h-full object-cover rounded-r-xl border-black border"
          />
          <div className="absolute bg-white bg-opacity-40 hidden group-hover:flex justify-center items-center h-full w-full top-0 left-0">
          <button onClick={() => handlePlayPause("aniV1")}>
              <img
                src={isPlaying.aniV1 ? "/pause.png" : "/play.png"} className="w-20 h-20" />
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden group relative">
          <img
            src="/p5.png"
            className="w-full h-full object-contain group-hover:scale-125 ease-in-out duration-500 bg-white border rounded-bl-xl border-black"
          />
          <div className="absolute hidden group-hover:block bg-white bg-opacity-60 left-0 top-1/2 h-1/2 w-full font-manga p-4">
            <h1>product name</h1>
            <p className="text-xs">product category and collection</p>
            <br />
            <p className="text-xs text-red-500 line-through">Rs. 1499</p>
            <p className="text-sm">Rs. 1200</p>
            <div className="absolute p-2 right-0 flex bottom-1">
              <button>
                <img src="/like.png" className="h-8 w-8" />
              </button>
              <button>
                <span className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full p-2 border-black ml-2 border-2 text-sm">
                  Add to bag
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden relative group">
          <img
            src="/ani4.png"
            className="w-full h-full object-contain border border-black"
          />
          <div className="absolute hidden group-hover:block bg-black rounded-full text-white top-28 left-4 p-3">
            <p className="font-manga text-xs">I once went to america<br/>and this is how it <br/>turned out</p>
          </div>
        </div>
      </div>

    </>
  );
}
