import Calendar from "../../component/calendar/calendar";

export default function Page({ params }: { params: { year: number, month: number } }) {
    return <Calendar year={params.year} month={params.month} />
}