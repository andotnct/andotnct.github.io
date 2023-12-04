import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Modal from 'react-modal';

const Work = (props: {title:string, explanation:string, useTech:string, link:string, linktext:string, codelink:string | null, img:string}) => {
    const [modalIsOpen, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    const getModalHeight = () => {
        if (window.innerWidth < 768) {
          return '80%';
        } else {
          return '65%';
        }
      };

    const modalStyle: Modal.Styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'backgroundColor 0.2s ease-in-out',
        },
        content: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            opacity: modalIsOpen ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
            zIndex: 1000,
            width: '80%',
            height: getModalHeight(),
        },
    };

    return (
        <div className="mx-5">
                <div className="">
                    <button onClick={openModal}>
                        <img src={props.img} className="object-contain h-64 transform hover:duration-200 hover:scale-105" alt="icon" />
                    </button>
                </div>
            <div className="my-2 bg-black bg-opacity-70 text-white text-2xl">
                    {props.title}
            </div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModal(false)}
                style={modalStyle}
                closeTimeoutMS={200}
            >
                <div className="flex-col justify-center">
                    <div className="flex justify-center font-bold text-5xl mb-2.5">
                        {props.title}
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="md:flex">
                            <div className="flex-col md:flex-1 md:mx-5 text-xl">
                                <div>
                                    <div className="">
                                        {props.explanation}
                                    </div>
                                    <hr className="my-3 bg-black" />
                                    <div className="md:flex items-center">
                                        <div className="">
                                            リンク：
                                        </div>
                                        <div className="">
                                            <HashLink to={props.link} target="_blank">
                                                <button className="text-blue-500 hover:underline text-xl ">
                                                    {props.linktext}
                                                </button>
                                            </HashLink>
                                        </div>
                                    </div>
                                    <hr className="my-3 bg-black" />
                                    {props.codelink != null ? (
                                        <div>
                                            <div className="md:flex items-center">
                                                <div className="">
                                                    ソースコード：
                                                </div>
                                                <HashLink to={props.codelink} target="_blank">
                                                    <button className="text-blue-500 hover:underline text-xl md:block hidden">
                                                        {props.codelink}
                                                    </button>
                                                </HashLink>
                                                </div>
                                            <hr className="my-3 bg-black" />
                                        </div>
                                        ) : null
                                    }
                                    <div className="md:flex items-center">
                                        <div className="">
                                            使用技術：
                                        </div>
                                        <div>
                                            {props.useTech}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 flex justify-end items-center md:mx-5">
                                <HashLink to={props.link} target="_blank">
                                    <button>
                                        <img src={props.img} className="object-contain h-96 transform" alt="icon" />
                                    </button>
                                </HashLink>
                            </div>
                        </div>
                        <div>
                            <button onClick={closeModal} className=" text-3xl text-white bg-gray-700 hover:bg-black px-5 py-1 rounded-lg">
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default Work;