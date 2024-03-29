import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Modal from 'react-modal';

const Achievement = (props: {title:string, explanation:string, link:string, img:string}) => {
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
        <div className="mx-16 my-8 md:my-0">
                <button onClick={openModal} className="">
                    <img src={props.img} className="object-contain md:h-56 transform hover:duration-200 hover:scale-105 shadow-xl" alt="icon" />
                </button>
            <div className="my-2 bg-black bg-opacity-70 text-white text-2xl shadow-xl">
                    {props.title}
            </div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModal(false)}
                style={modalStyle}
                closeTimeoutMS={200}
            >                           
                <div className="flex-col justify-center">
                    <div className="flex justify-center font-bold text-2xl md:text-5xl mb-2.5">
                        {props.title}
                    </div>    
                    <div className="md:flex flex-col items-center">
                        <div className="md:flex">
                            <div className="flex-col md:flex-1 md:mx-5 text-xl">
                                <div className="">
                                    {props.explanation}
                                </div>
                            </div>
                            <div className="md:flex-1 flex justify-end items-center md:mx-5">
                                <HashLink to={props.link} target="_blank">
                                    <button>
                                        <img src={props.img} className="object-contain my-8 md:my-0 md:h-96 transform" alt="icon" />
                                    </button>
                                </HashLink>
                            </div>
                        </div>
                        <div className="flex justify-center ">
                            <button onClick={closeModal} className="text-3xl text-white bg-gray-700 hover:bg-black px-5 py-1 rounded-lg">
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default Achievement;