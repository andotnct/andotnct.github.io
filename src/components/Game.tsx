import React, { useState, useEffect } from "react";

import { Unity, useUnityContext } from "react-unity-webgl"


const Game = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./typing_build.loader.js",
        dataUrl: "./typing_build.data",
        frameworkUrl: "./typing_build.framework.js",
        codeUrl: "./typing_build.wasm"
    })
    
    return <Unity unityProvider={unityProvider} />
  };
  
export default Game;
