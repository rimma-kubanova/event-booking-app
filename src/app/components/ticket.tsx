import time from "@/../public/icons8-time-96.png";
import location from "@/../public/icons8-location-96.png";
import data from "@/../public/icons8-today-96.png";
import Image from "next/image";

async function getTickets(user: any){
    const res = await fetch(`http://127.0.0.1:8090/api/collections/tickets/records?filter=(email='rimskii')`);
    const data = await res.json();
    console.log(data);
    return data?.items as any[];
}
async function getEvent(id: any){
    const res = await fetch(`http://127.0.0.1:8090/api/collections/event/records?filter=(ticket='rimskii')`);
    const data = await res.json();
    console.log(data);
    return data?.items as any[];
}

export default async function Ticket(user: any){
    
    const tickets = await getTickets(user);
    const event = await getEvent(tickets);
    return (
        <div className="mx-60 my-12 grid grid-cols-3">
            {tickets?.map((ticket) =>{
                return <div className="bg-white rounded-lg justify-center px-12 py-8">
                    <div className="flex flex-col items-center">
                        <h1>Ticket</h1>
                        {ticket.id}
                    </div>
                    <div className="py-8">
                        <div className="flex flex-row items-center gap-3"><Image src={data} alt='' width='36'/><p className="text-2xl font-medium">19 April 2024</p></div>
                        <div className="flex flex-row items-center gap-3"><Image src={time} alt='' width='36'/><p className="text-2xl font-medium">18:00</p></div>
                        <div className="flex flex-row items-center gap-3"><Image src={location} alt='' width='36'/><p className="text-2xl font-medium">Mega Silkway Chaplin Cinema</p></div>
                    </div>
                    <p className="text-center text-lg">for rimskii</p>
                </div>
            })}
        </div>
    );

}