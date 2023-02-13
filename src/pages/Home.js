import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../components/Home/Header'

export default function Home() {

    const [timeOfDay, setTimeOfDay] = useState(new Date().getMinutes())

    const morning = '#CCDFEB, #EAF1E5';
    const afternoon = '#64A6AB, #B2D5A4';
    const night = '#27333F, #453C67';

    const [dayTime, setDayTime] = useState(morning)

    useEffect(() => {
        if (timeOfDay <= 20) return setDayTime(morning)
        if (timeOfDay > 20 || timeOfDay <= 40) return setDayTime(afternoon)
        if (timeOfDay > 40) return setDayTime(night)
    }, [timeOfDay])

    setInterval(() => {
        setTimeOfDay(new Date().getMinutes())
      }, 1000)

    return (
        <div className='home' style={{ background: `linear-gradient(${dayTime})`, width: '100vw', height: "100vh" }}>
            <Header />
            <div className='clouds' style={{width: '100%', height: "200px"}}>
                <img src='./sunny.png' alt='Sunny' style={{ width: '150px',top: '10px'}} />
                <img src='./cloud1.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud2.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud3.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud4.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud5.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud1.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud2.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud1.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud4.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud5.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud4.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
                <img src='./cloud5.png' alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
            </div>
        </div>
    )
}