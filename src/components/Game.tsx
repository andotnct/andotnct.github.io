import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl"
import Header from "./Header";


const Game = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./unityBuild/typing_build.loader.js",
        dataUrl: "./unityBuild/typing_build.data",
        frameworkUrl: "./unityBuild/typing_build.framework.js",
        codeUrl: "./unityBuild/typing_build.wasm"
    })

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
    
    return (
      
      <div className="h-screen bg-blue-400 relative">
        <Header />
        <div className="my-20 flex items-center flex-col absolute top-0 left-0 right-0 bottom-0 ">
          <div className="text-5xl font-bold">
            タイピングゲーム（仮
          </div>
          <div className="relative">
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }}/>
            <div className="text-2xl md:text-4xl flex justify-center items-center z-10">画面が表示されるまで数秒お待ちください</div>
          </div>
        </div>
      </div>
    );
};
  
export default Game;