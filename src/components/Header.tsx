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
        <div className="fixed w-screen z-50">
            <div className="h-16 bg-white bg-opacity-70 justify-center items-center flex">
                <div className="text-sm md:text-4xl font-bold">
                    {isRoot ? (
                        <AnchorLink href="#top">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                TOP
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#top">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                TOP
                            </button>
                        </HashLink>
                    )}
                    {isRoot ? (
                        <AnchorLink href="#profile">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                PROFILE
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#profile">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                PROFILE
                            </button>
                        </HashLink>
                    )}
                    {isRoot ? (
                        <AnchorLink href="#works">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                WORKS
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#works">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                WORKS
                            </button>
                        </HashLink>
                    )}
                    {isRoot ? (
                        <AnchorLink href="#achievement">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                ACHIEVEMENT
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#achievement">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                ACHIEVEMENT
                            </button>
                        </HashLink>
                    )}
                    {isRoot ? (
                        <AnchorLink href="#skill">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                SKILL
                            </button>
                        </AnchorLink>
                    ) : (
                        <HashLink to="/#skill">
                            <button className="px-1 md:px-2 py-6 md:py-3 hover:bg-gray-800 hover:text-white duration-200">
                                SKILL
                            </button>
                        </HashLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;