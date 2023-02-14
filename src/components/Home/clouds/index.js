import './style.css'

export default function Clouds(props) {

    let clouds = ['./cloud1.png','./cloud2.png','./cloud4.png','./cloud3.png','./cloud5.png', './cloud1.png','./cloud2.png','./cloud5.png']

    return (
        <div className='clouds' style={{width: '100%', height: "200px"}}>
        {props.dayOrNight >= 40 || props.dayOrNight <= 7 ? (
            <img src='./moon.png' alt='moon' style={{ width: '150px',top: '10px'}} />
        ) : (<img src='./sunny.png' alt='Sunny' style={{ width: '150px',top: '10px'}} />)
        }
        {clouds.map((event) => (
            <img key={event} src={event} alt='cloud' style={{ top: `${Math.floor(Math.random() * 80)}px`}} />
        ))}
    </div>
    )
}