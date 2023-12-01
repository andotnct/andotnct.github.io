import { BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Game from "./Game";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const isRoot = currentPath === "/";

    return (
        <div className="fixed top-0 w-screen">
            <div className="h-16 bg-white bg-opacity-70 flex justify-center md:justify-between md:px-64">
                <div className="hidden md:block flex items-center">
                    {isRoot ? (
                        <AnchorLink href="#top">
                            <button>
                                <img src="/icon.jpg" className="w-12 h-12 my-2" alt="icon" />
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#top">
                            <button>
                                <img src="/icon.jpg" className="w-12 h-12 my-2" alt="icon" />
                            </button>
                        </HashLink>
                    )}
                </div>
                <div className="flex items-center text-3xl md:text-4xl font-bold">
                    {isRoot ? (
                        <AnchorLink href="#top">
                            <button className="px-2 py-3 hover:bg-gray-800 hover:text-white">
                                TOP
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#top">
                            <button className="px-2 py-3 hover:bg-gray-800 hover:text-white">
                                TOP
                            </button>
                        </HashLink>
                    )}
                    {isRoot ? (
                        <AnchorLink href="#profile">
                            <button className="px-2 py-3 hover:bg-gray-800 hover:text-white">
                                PROFILE
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#profile">
                            <button className="px-2 py-3 hover:bg-gray-800 hover:text-white">
                                PROFILE
                            </button>
                        </HashLink>
                    )}
                    {isRoot ? (
                        <AnchorLink href="#works">
                            <button className="px-2 py-3 hover:bg-gray-800 hover:text-white">
                                WORKS
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#works">
                            <button className="px-2 py-3 hover:bg-gray-800 hover:text-white">
                                WORKS
                            </button>
                        </HashLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;