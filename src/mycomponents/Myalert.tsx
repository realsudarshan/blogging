
import { Calendar } from "../components/ui/calendar"
import { useState } from "react"
export default function Myalert(){
    const [date, setDate] = useState<Date | undefined>(new Date())
    return(<>
  

  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />



    
    
  

     

      </>)
}