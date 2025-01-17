import React from 'react';
import ReactDOM from 'react-dom'
import { IoMdClose } from 'react-icons/io';

function Modal({children, setOpenModal}){
    return ReactDOM.createPortal(
        <div className='
            absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/40 p-8
            animate-opacity'
        >
            <div className='bg-white p-4 border rounded-lg shadow-lg relative max-w-full'>
                <button                     
                    className='cursor-pointer absolute -top-7 -right-7 bg-white p-1.5 rounded-full'
                >
                    <IoMdClose onClick={()=>{setOpenModal(false)}}
                    />
                </button>
                    
                {children}
            </div>
        </div>
    )
}

export { Modal }