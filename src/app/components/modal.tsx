'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/router";
import PocketBase from 'pocketbase';
import { useState } from 'react';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function Modal(ticketId: any) {
    const [isUpdated, setIsUpdated] = useState<boolean>(false);
    const { data: session } = useSession({
        required: true,
    })
  const create = async() => {
    try{
        const data = {
                isBought: true,
                email: session?.user?.name,
        };
        const record = await pb.collection('tickets').update(ticketId['ticketId'], data);
        
        setIsUpdated(true);
    }catch(err){
        console.log(err);
    }
  }
  return (
    <>
        <button type="button" onClick={create} className="bg-orange-500 px-12 py-6 rounded-lg text-2xl text-white">Buy Ticket</button>
        {isUpdated && <div>Ticket is bought and available in profile page</div>}
    </>
  );
}