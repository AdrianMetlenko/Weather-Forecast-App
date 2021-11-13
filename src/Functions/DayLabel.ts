import {getDay} from "date-fns";
import weekdayName from "./WeekdayName";

export default function dayLabel(date: string, index: number){
    switch(index){
        case 0:
            return 'Today'
        case 1:
            return 'Tomorrow'
        default:
            return weekdayName(getDay(new Date(date)))
    }
}