// 'use client'
// import './css/styles.css';
// import {Calendar as BigCalendar, CalendarProps, Components, Event, dayjsLocalizer} from 'react-big-calendar'
// import  dayjs from 'dayjs'

// require('dayjs/locale/es')

// dayjs.locale('es')
// const localizer = dayjsLocalizer(dayjs)

// type customEvent = Event & {
//   category: string
// }

// const EventComponent: Components<Event> =  {
  
//   event: ({event})=> {
//     const customEvent = event as customEvent; 

//     return <div>
//       {customEvent.title}
//     </div>
//   }

// }

// const Calendar = (props: Omit<CalendarProps,"localizer">) => {
//   return (
//     <BigCalendar {...props} localizer={localizer} onSelectSlot={(info)=>console.log(info)} selectable="ignoreEvents"/>
//   )
// }

// export default Calendar