import { useState } from 'react'
import './style.css'

export default function Header() {

    const month = new Date().getMonth() +1
    const date = new Date().getDate()
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()

    const [replaceHours, setReplaceHours] = useState(hours)
    const [replaceMinutes, setReplaceMinutes] = useState(minutes)

    function replaceDatesAndTimes(replaced) {
        if(replaced < 10) {
            return `0${replaced}`
        } else {
            return replaced
        }
    }



    setInterval(() => {
        setReplaceHours(new Date().getHours())
        setReplaceMinutes(new Date().getMinutes())
      }, 1000)

    return (
        <div className='header'>
            <div className='header-area'>
                <div className='header-name'>
                    <h1>Gabriel Borges</h1><span>|</span>
                </div>
                <div className='header-time'>
                    <p id='date'>{date}/{replaceDatesAndTimes(month)}</p>
                    <p id='time'>{replaceHours}<span>:</span>{replaceDatesAndTimes(replaceMinutes)}</p>
                </div>
            </div>
        </div>
    )
}