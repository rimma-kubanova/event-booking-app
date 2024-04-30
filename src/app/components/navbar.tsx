import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/mereke.svg';
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import cat from "@/../public/icons8-cat-profile-50.png";

export default async function Navbar() {
    const session = await getServerSession(options)

    return (
        <nav className='w-full bg-white'>
            <div className='flex justify-between items-center py-4 px-20'>
                <Link href='/'><Image src={logo} alt='logo'/></Link>
                <div>
                    <h3><Link href='/'>Events</Link></h3>
                </div>
                <div className='flex items-center justify-center gap-8'>
                    <h3>Almaty</h3>
                    {session ? (
                        <div>
                            <Link href='/profile'>
                                <Image src={cat} alt='' />
                            </Link>
                        </div>
                ) : (
                    <button className='border border-orange-500 rounded-xl px-8 py-4'><Link href='/api/auth/signout'><h3>Log Out</h3></Link></button>
                )}
                </div>
            </div>
        </nav>
    );
};
