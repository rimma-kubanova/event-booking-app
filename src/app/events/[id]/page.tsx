import Image from "next/image";
import { format } from 'date-fns';
import time from "@/../public/icons8-time-96.png";
import location from "@/../public/icons8-location-96.png";
import data from "@/../public/icons8-today-96.png";
import PocketBase from 'pocketbase';
import Modal from "@/app/components/modal";

const pb = new PocketBase('http://127.0.0.1:8090');

async function getEvent(eventId: string){
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/events/records/${eventId}?expand='ticket`,
    );
    // const res = await pb.collection("events").getList(1, 30, { expand: "ticket" })
    const data = await res.json();
    return data;
}
async function getTicket(ticketId: string){
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/tickets/records/${ticketId}`,
    );
    const data = await res.json();
    return data;
}

export default async function EventPage({ params }: any ){
    const event = await getEvent(params.id);
    const ticket = await getTicket(event.ticket);
    const datetimeString = event.datetime;
    const dateTicket = ticket.date;

    const date = new Date(datetimeString);
    const formattedDate = format(date, 'd MMMM yyyy');
    const formattedTime = format(date, 'HH:mm');

    const ticketDate = new Date(dateTicket);
    const newDate = format(ticketDate, 'd MMMM');
    const newTime = format(ticketDate, 'HH:mm');

    return (
        <div className="mx-60 my-12">
            <div>
                <div className="w-full h-[700px] overflow-hidden relative">
                    <img src={event.photo} alt='s' className="border rounded-[36px] object-cover brightness-75"/>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start justify-end pb-12 px-12 flex-col">
                        <h1 className="text-9xl text-white">{event.name}</h1>
                        <h3 className="text-4xl text-white font-medium brightness-75">{event.type}</h3>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className=" flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-3"><Image src={data} alt='' width='36'/><p className="text-2xl font-medium">{formattedDate}</p></div>
                    <div className="flex flex-row items-center gap-3"><Image src={time} alt='' width='36'/><p className="text-2xl font-medium">{formattedTime}</p></div>
                    <div className="flex flex-row items-center gap-3"><Image src={location} alt='' width='36'/><p className="text-2xl font-medium">{event.location}</p></div>
                </div>
                <hr className="my-12 border-t-2 border-gray-300" />
                <h3 className="text-4xl font-bold pb-6">About the Event</h3>
                <p className="text-xl font-medium">{event.description}</p>
                <hr className="my-12 border-t-2 border-gray-300" />
                <h3 className="text-4xl font-bold pb-6">Tickets</h3>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col border border-solid border-orange-500 px-12 py-3 justify-center items-center rounded-xl">
                        <h3 className="text-2xl">{newDate}</h3>
                        <p className="text-md">{newTime}</p>
                    </div>
                    <div className="flex flex-row gap-8 items-center">
                        <p className="text-xl">from {ticket.price} ₸</p>
                        <Modal ticketId={ticket.id} />
                    </div>
                </div>
            </div>
        </div>
    );

}