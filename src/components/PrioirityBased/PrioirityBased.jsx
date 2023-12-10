import React, { useEffect, useState } from 'react'

import Card from './../Card/Card'
const PrioirityBased = ({ priorityValue, tick }) => {
    // console.log(priorityValue)
    // console.log(tick)
    const [pvdata, setPVData] = useState([]);
    // const [dummy,setDummy] = useState(false);
    var len = 0;
    // const temp = ()=>{
    useEffect(() => {
        let data = [];
        let p = 0;
        for (let i = 0; i < tick.length; i++) {
            if (tick[i].priority === priorityValue) {
                data.push(tick[i]);
                len += 1;
            }
        }
        setPVData(data)
        console.log(priorityValue, data)
    }, [])

    // temp()

    return (
        <div>
            {
                pvdata.map(d => {
                    return <> <Card title={d.title} cam={d.id} priority={d.priority}/> <br /> </>
                })
            }
        </div>
    )
}


export default PrioirityBased
