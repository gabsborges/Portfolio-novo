import './style.css'

export default function Stars() {

        let stars = []

        for (let i = 0; i <= Math.floor(Math.random() * 80); i++) {
            stars.push(i)
        }

    return (
        <div className='constelations'>
            {stars.map((event) => (
                <span key={event} style={{top: `${Math.floor(Math.random() * 200)}px`, left: `${Math.floor(Math.random() * window.innerWidth)}px`, width: '2px', height: "2px", animation: `thinkle ${Math.floor(Math.random() * 25)}s ease-in-out infinite`}}></span>
            ))}
        </div>
    )
}