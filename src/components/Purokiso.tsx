import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Modal from 'react-modal';
import Header from "./Header";
import BackgroundMovie from "./BackgroundMovie";



const Purokiso = () => {
    const Background: React.CSSProperties = {
        background: 'rgb(255,255,255)',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)',
        opacity: "0.95",
        boxShadow: "10px 10px 5px 5px rgba(0,0,0,0.95)",
      };

    return (
        <div className="h-screen">
            <BackgroundMovie />
            <Header />
            <div className="h-screen flex items-center justify-center" style={{ minHeight: '700px'}}>
                  <div className="h-5/6 w-5/6" style={Background}>
                    <div className="font-light h-full top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-black">
                      <div className="text-3xl md:text-6xl flex flex-col items-center font-bold">
                        <div>
                            プロ基礎自由制作
                        </div>
                        <div>
                            「Air Art」
                        </div>
                      </div>
                      <div className="w-10/12">
                        <div className="text-base md:text-2xl md:mt-8">
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    3D空間内を自由に動き回り、空中にお絵かきができるツール「Air Art」を開発しました
                                </div>
                                <div>
                                    Unity不使用、UE不使用、WebGL不使用、ほぼElm Onlyです（とある機能だけJavaScript）
                                </div>
                                <div>
                                    このツールはまだまだ未完成なので、今後もアップデートを続けていこうと思います
                                </div>
                            </div>
                            <div className="md:flex flex-col items-center">
                                <div className="md:flex items-center md:mt-8">
                                    <div className="md:flex truncate">
                                        ■デモ 
                                        <a href="https://airart.andooo.dev" target="_blank">
                                            <p className="text-blue-500 hover:underline pl-3" style={{ display: 'inline' }}>https://airart.andooo.dev/</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="md:flex items-center md:mt-8">
                                    <div className="md:flex truncate">
                                        ■ソースコード 
                                        <a href="https://github.com/andotnct/AirArt/blob/main/src/AirArt.elm" target="_blank">
                                            <p className="text-blue-500 hover:underline pl-3" style={{ display: 'inline' }}>https://github.com/andotnct/AirArt/blob/main/src/AirArt.elm</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="md:flex items-center md:mt-8">
                                    <div className="md:flex truncate">
                                        ■このサイトのソースコード 
                                        <a href="https://github.com/andotnct/andotnct.github.io/blob/master/src/components/Purokiso.tsx" target="_blank">
                                            <p className="text-blue-500 hover:underline pl-3" style={{ display: 'inline' }}>https://github.com/andotnct/andotnct.github.io/blob/master/src/components/Purokiso.tsx</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
    );
};
export default Purokiso;