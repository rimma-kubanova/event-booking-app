'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image';
import party from '@/../public/gggggggg.png';
import Link from 'next/link';

export default function ProfilePage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section className="mx-60 my-12 flex flex-col gap-3">
            <h1 className='text-4xl py-2'>Hello, {session?.user?.name} ! </h1>
            <Image src={party} alt='' className='w-full' />
            <Link href='/profile/ticket'><h3 className='text-3xl py-4'>My Tickets</h3></Link>
        </section>
    )
}