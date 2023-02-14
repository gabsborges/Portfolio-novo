import { useEffect, useState } from 'react';
import '../App.css'
import Clouds from '../components/Home/clouds';
import Header from '../components/Home/Header'
import Stars from '../components/stars';

export default function Home() {

    const [timeOfDay, setTimeOfDay] = useState(new Date().getMinutes())

    const morning = '#CCDFEB, #EAF1E5';
    const afternoon = '#64A6AB, #B2D5A4';
    const night = '#27333F, #453C67';

    const [dayTime, setDayTime] = useState(null)



    useEffect(() => {
        if (timeOfDay <= 20) setDayTime(morning)
        if (timeOfDay > 20 && timeOfDay < 40) setDayTime(afternoon)
        if (timeOfDay >= 40) setDayTime(night)
    }, [timeOfDay])

    setInterval(() => {
        setTimeOfDay(new Date().getMinutes())
      }, 1000)

    return (
        <div className='home' style={{ background: `linear-gradient(${dayTime})`, width: '100vw', height: "100vh" }}>
            <Header />
            {timeOfDay >= 40 || timeOfDay <= 15 ? 
            <Stars/>: null}
            <Clouds
            dayOrNight={timeOfDay}
            />

        </div>
    )
}