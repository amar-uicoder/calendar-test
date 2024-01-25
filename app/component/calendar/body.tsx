import React, { useState, useEffect } from 'react';
import { DAYS, getNoOfDaysInMonth, getMonthStart } from "../../library/date-helper";
import Card from "./card";

type BodyProps = {
    date: Date
}

export default function Body(props: BodyProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        ajax();
    }, [props.date]);

    const ajax = async () => {
        try {
            const res = await fetch(`https://amock.io/api/launch/new`);
            const object = await res.json();
            setData(object.map((launch : any) => ({ ...launch, date: new Date(launch.date)})));
        } catch (err) {
            console.log(err);
        }
    };

    
    return <div>
        <div className="grid grid-cols-7 py-3 gap-2">
            {DAYS.map((day: string, index: number) => <div className="text-center font-bold" key={index}>{day}</div>)}
            {Array(getMonthStart(props.date)).fill(1).map((el, i) =>
                <div className="invisible"></div>
            )}
            {Array(getNoOfDaysInMonth(props.date)).fill(1).map((el, i) =>
                <Card value={i + 1} key={i} data={data}/>
            )}
        </div>
    </div>
}