import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-green-500">
                    LinkTree
                </div>
                <ul className="flex justify-between items-center gap-10">
                    <li>
                        <Link href="/features" className="text-gray-700 hover:text-green-500">
                        Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-700 hover:text-green-500">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 hover:text-green-500">
                        Contact
                        </Link>
                    </li>
                    <li className='flex justify-center items-center gap-2'>
                        <Link href="/login" className='px-6 py-2 rounded-lg hover:bg-gray-300 bg-gray-200'>
                            LogIn
                        </Link>
                        <Link href="/signin" className='px-6 py-2 bg-black text-white rounded-xl'>
                            SignUp
                        </Link>
                    </li>


                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
