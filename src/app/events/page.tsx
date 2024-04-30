import Link from "next/link";
import Image from "next/image";
import { format } from 'date-fns';

async function getEvents(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/events/records');
    const data = await res.json();

    return data?.items as any[];
}

export default async function Events() {
    const events = await getEvents();
    return (
        <div className="grid grid-cols-5 gap-4">
            {events?.map((event) =>{
                return <Event key = {event.id} event = {event} />
            })}
        </div>
    );
}

function Event({ event }: any) {
    const { id, name, description, datetime, location, city, photo } = event || {};
    
    const date = new Date(datetime);
    const formattedDate = format(date, 'd MMMM yyyy');
    const formattedTime = format(date, 'HH:mm');
    return (
        <div className="my-6">
            <Link href={`/events/${id}`}>
                <div className="bg-white rounded-lg">
                    <img src={photo} alt="image"/>
                    <div className="py-4 px-8 text-center">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p>{location}</p>
                        <p className="text-lg">{formattedDate}</p>
                        <p className="text-lg">{formattedTime}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}