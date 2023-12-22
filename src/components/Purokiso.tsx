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
                      <div className="w-8/12">
                        <div className="text-base md:text-2xl md:mt-8">
                            <div>
                                <div>
                                    作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明作品の説明
                                </div>
                            </div>
                            <div className="md:flex flex-col items-center">
                                <div className="md:flex items-center md:mt-8">
                                    <div className="md:flex">
                                        ■デモ 
                                            <a href="https://airart.andooo.dev" target="_blank">
                                                <div className="truncate">
                                                    <p className="text-blue-500 hover:underline pl-3" style={{ display: 'inline' }}>https://airart.andooo.dev/</p>
                                                </div>
                                            </a>
                                        </div>
                                </div>
                                    <div className="md:flex items-center md:mt-8">
                                        <div className="md:flex">
                                        ■ソースコード 
                                            <a href="https://github.com/andotnct/AirArt/blob/main/src/AirArt.elm" target="_blank">
                                                <div className="truncate">
                                                    <p className="text-blue-500 hover:underline pl-3" style={{ display: 'inline' }}>https://github.com/andotnct/AirArt/blob/main/src/AirArt.elm</p>
                                                </div>
                                            </a>
                                        </div>
                                </div>
                                <div className="md:flex items-center md:mt-8">
                                    <div className="md:flex">
                                        <div className="hidden md:block">
                                            ■他の作品（良ければ見てください）
                                        </div>
                                        <div className="md:hidden">
                                            ■他の作品 <br/>
                                            （良ければ見てください）
                                        </div>
                                    <HashLink to="/#works" className="text-blue-500 hover:underline">
                                        <div className="truncate">
                                        https://www.andooo.dev/#works
                                        </div>
                                    </HashLink>
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