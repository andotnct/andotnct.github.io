import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import BackgroundMovie from "./BackgroundMovie";
import Work from "./Work";
import Modal from 'react-modal';
import Helmet from 'react-helmet';

const Home = () => {
  const topBackground: React.CSSProperties = {
    background: 'rgb(255,255,255)',
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)',
    opacity: "0.95",
    boxShadow: "10px 10px 5px 5px rgba(0,0,0,0.95)",
  };

  const profileBackground: React.CSSProperties = {
    backgroundImage: 'url("./bg-profile3.webp")',
    backgroundRepeat: "repeat",
    backgroundPosition: 'center',
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
      <div>
        <head>
          <Helmet>
            <meta property="og:title" content="andooo's Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://andooo.dev" />
            <meta property="og:image" content="https://raw.githubusercontent.com/andotnct/andotnct.github.io/master/public/worksImg/homepage.png" />
            <meta property="og:site_name" content="Andooo's Portfolio" />
            <meta property="og:description" content="あんどーのホームページ" />
            <meta name="twitter:title" content="andooo's Portfolio" />
            <meta name="twitter:description" content="あんどーのホームページ" />
            <meta name="twitter:image" content="https://example.com/image.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
        </head>
        <div className="App None h-screen" id="top">
          <BackgroundMovie />
          <Header />
              <div className="h-screen flex items-center justify-center">
                  <div className="h-5/6 w-5/6 relative" style={topBackground}>
                    
                    <div className="font-light text-5xl md:text-8xl absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none text-black">
                      Andooo's Portfolio
                    </div>
                  </div>
              </div>
            <div className="h-screen relative bg-black text-white bg-opacity-80" id="profile">
              <div className="flex items-center justify-center h-full">
                <div className="md:flex">
                  <img src="./icon.jpg" className="w-40 block m-auto"></img>
                  <div className="mx-8 text-left my-4 md:my-0">
                    <div className="text-4xl font-bold">
                      あんどー
                    </div>
                    東京都出身<br />
                    東京工業高等専門学校 情報工学科 卒業<br />
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
            </div>
            <div className="h-screen relative" id="works">          
              <div className="flex justify-center flex-col items-center">
                <div className="shadow-xl bg-black bg-opacity-70 mt-20 text-white font-bold text-5xl md:text-6xl px-16 md:px-20 py-1 rounded-full">
                  WORKS
                </div>
                <div className="my-8 md:flex">
                <Work title="Andooo's Portfolio" explanation="このホームページです。フロントの技術を身につけたいと思い作り始めました。背景の動画はAviUtlで作っています。" useTech="Node.js, TypeScript, React, Tailwind CSS" link="andooo.dev" linktext="andooo.dev" codelink="https://github.com/andotnct/andotnct.github.io" img="./worksImg/homepage.png"/>
                  <Work title="タイピングゲーム（仮" explanation="ユーザーのタイピング記録からゴーストを生成し、擬似的にタイピング対決ができるゲームを開発中です。進捗があり次第アップデートしていきます。" useTech="Unity, C#" link="/game" linktext="andooo.dev/game" codelink="https://github.com/andotnct/andotyping" img="./worksImg/typing.jpg"/>
                  <Work title="Vegeoku紹介動画" explanation="第33回高専プロコンに出場した際に制作した作品紹介動画です。中学の頃は無限に動画編集に時間を捧げていましたが、こんなところで役立てて良かったです。" useTech="AviUtl" link="https://www.youtube.com/watch?v=fOkGEEy6dAE" linktext="https://www.youtube.com/watch?v=fOkGEEy6dAE" codelink={null} img="./worksImg/vegeoku.jpg"/>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
};
  
export default Home;