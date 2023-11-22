import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl"


const Game = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./unityBuild/typing_build.loader.js",
        dataUrl: "./unityBuild/typing_build.data",
        frameworkUrl: "./unityBuild/typing_build.framework.js",
        codeUrl: "./unityBuild/typing_build.wasm"
    })
    
    return (
      <div className="h-screen flex items-center m-14 flex-col">
        <div className="text-4xl font-bold">
          ワイと勝負！（仮
        </div>
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }}/>
        <div>
          絶賛制作中です(^_^;)
        </div>
      </div>
    );
};
  
export default Game;