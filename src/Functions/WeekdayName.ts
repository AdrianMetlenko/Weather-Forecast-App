//Interpreting index response from getDay function
//"0 represents Sunday"
//https://date-fns.org/v2.25.0/docs/getDay
export default function weekdayName(index: number){
    switch(index){
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        default:
            return 'Error'
    }
}