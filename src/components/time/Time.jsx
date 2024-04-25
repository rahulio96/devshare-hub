import { useEffect, useState } from "react";

function Time ({ time }) {
    const [diffTime, setDiffTime] = useState()
    const [timeUnit, setTimeUnit] = useState('days')
    const curDate = new Date()
        const date = new Date(Date.parse(time));
        useEffect(() => {
        let diff = (curDate - date)/ (1000 * 60 * 60 * 24) // days
        if (diff < 1) {
            diff *= 24 // hours

            if (diff < 1) {
                diff *= 60 // minutes

                if (diff < 1) {
                    diff *= 60 // seconds
                    if (Math.floor(diff) == 1) {
                        setTimeUnit('second')
                    } else {
                        setTimeUnit('seconds')
                    }
                }

                else if (Math.floor(diff) == 1) {
                    setTimeUnit('minute')
                } else {
                    setTimeUnit('minutes')
                }

            } else if (Math.floor(diff) == 1) {
                setTimeUnit('hour')
            } else {
                setTimeUnit('hours')
            }

        } else if (Math.floor(diff) == 1) {
            setTimeUnit('day')
        } else {
            setTimeUnit('days')
        }

        setDiffTime(Math.floor(diff))
    }, [])

    return (
        <p>{diffTime} {timeUnit} ago</p>
    )
}

export default Time