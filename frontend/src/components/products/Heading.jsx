import React from 'react';
import Bounce from 'react-awesome-reveal';

const Heading = ({title, preText}) => {
    return (
        <Bounce left>
            <div className="flex flex-col items-center space-x-2 pb-4 pt-10">
                <h1 className="text-gray-700 poppins text-3xl">{preText} <span className="text-[#4Adede] font-semibold select-none">{title}</span></h1>
                <div className="bg-cyan-300 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
            </div>
        </Bounce>
    )
}

export default Heading