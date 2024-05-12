import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Fullday , Fullmonth } from "./constant"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleTimeFormat(date:any){
  
  const options = {
      hour:'2-digit',
      minute:'2-digit',
      hour12:true
  }
  const formattedTime = date.toLocaleString("en-US",options)

  return formattedTime
}

export function handleDateFormat(input:any){
 
  let day = Fullday[input.getDay()];
  let date = input.getDate();
  let month = Fullmonth[input.getMonth()];
  let year = input.getFullYear()

  const formattedDate = day + ',' + ' ' + date + ' ' + month + ' ' + year

  return formattedDate
}

//sunrise & sunset timing
export function convertUnixTimeStamp(input:any){
  const newDate = new Date(input * 1000);
  const formattedTime = handleTimeFormat(newDate);

  return formattedTime
}

