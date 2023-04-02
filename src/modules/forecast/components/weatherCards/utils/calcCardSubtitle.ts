export default function calcCardSubtitle(day: number) {
    switch (day) {
        case 0:
            return 'Today'
        case 1:
            return 'Tomorow'
        default:
            const weekDay =
                (new Date().getDay() + day) % 7
            switch (weekDay) {
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
                case 7:
                    return 'Sunday'
                default:
                    return 'Error'
            }
    }
}