import React from 'react';

export const Navbar : React.FC = ()=> {
 return (
    <nav className='bg-slate-700'>
        <div className="flex ">
            <div className="flex p-2 mx-4 text-white"><a href="#">Logo</a></div>
            <div className="flex p-2 mx-4 text-white"><a href="#">Products</a></div>
            <div className="flex p-2 mx-4 text-white"><a href="#">solutions</a></div>

        </div>
    </nav>
 )
}

