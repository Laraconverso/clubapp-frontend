import dynamic from "next/dynamic";
import { Event } from "react-big-calendar";
import dayjs from "dayjs";

const Calendar = dynamic(() => import('@/components/calendar/Calendar'), { ssr: false })

type customEvent = Event & {
  category: string
}


const events:customEvent[] = [
  {
    title: 'primer evento',
    start: dayjs('2024-02-29 18:00').toDate(),
    end: dayjs('2024-02-29 19:00').toDate(),
    category: "match" 
  }
]


const page =async () => {


  return (
       
    <div className="w-full h-screen md:p-20 pt-0 baltic-sea-900">
      
       <Calendar 
       style={{ minWidth: '270px', maxWidth: '700px', maxHeight: '400px', marginTop:' 30px'}} 
       views={["month"]} 
       events={events} 
        />
  
    </div>
  


  )
}


export default page