type CardProps = {
    value: string,
    data: any
}

export default function Card(props: CardProps) {

    return <a href="#" className="relative block max-w-sm p-9 bg-white border border-gray-200 shadow hover:bg-gray-100">
        &nbsp;<span className="absolute top-3 right-5 font-bold">{props.value}</span>
    </a>
}