import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getMonthName } from "../../library/date-helper";


type HeaderProps = {
    date: Date,
    previousClick: () => void,
    nextClick: () => void
}

export default function CalendarHeader(props: HeaderProps) {
    return <div className="p-3">
        <div className="flex justify-between">
            <div>
                <a href="#" onClick={props.previousClick}><FaChevronLeft /></a>
            </div>
            <div>{getMonthName(props.date)}</div>
            <div>
                <a href="#" onClick={props.nextClick}><FaChevronRight /></a>
            </div>
        </div>
    </div>
}