import React from 'react';
<img src="" alt="" />

const CopyRight = () => {
    return (
        <div>
            <div className=" bg-blue-950">
                <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-4">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <p className="font-semibold  text-white font-poppins">
                            Copyright &copy; {new Date().getFullYear()} Pixel Crafters. All Rights Reserved. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default CopyRight;