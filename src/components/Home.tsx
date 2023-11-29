import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Game from "./Game";

const Home = () => {
  return (
      <div className="App w-screen">
        <div className="h-screen bg-green-400 flex justify-center items-center font-extrabold text-5xl md:text-8xl text-white">
            Portfolio(^_^;)
        </div>
        <div className="h-screen flex items-center justify-center bg-red-400">
          <div className="md:flex">
            <img src="./icon.jpg" className="w-40 block m-auto"></img>
            <div className="mx-8 text-left my-4 md:my-0">
              <div className="text-4xl font-bold">
                あんどー
              </div>
              東京都出身<br />
              東京工業高等専門学校 情報工学科卒<br />
              東京大学工学部 システム創成学科 在籍<br />
              <a href="https://twitter.com/ando_tnct" target="_blank">
                <div>
                ■Twitter <p className="text-blue-500 hover:underline" style={{ display: 'inline' }}>https://twitter.com/ando_tnct</p>
                </div>
              </a>
              <a href="https://www.youtube.com/@andooodev" target="_blank">
                <div>
                  ■YouTube <p className="text-blue-500 hover:underline" style={{ display: 'inline' }}>https://www.youtube.com/@andooodev</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="h-screen bg-yellow-400">          
          <div className="flex justify-center flex-col items-center">
            <div className="m-4 text-white font-bold text-6xl">
              Works
            </div>
            <div>
              <Link to="/game">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-1 rounded text-4xl">遊ぶ</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};
  
export default Home;