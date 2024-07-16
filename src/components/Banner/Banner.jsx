import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='content-text'>
                <h1>Front End</h1>
                <h3>Challenge React</h3>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <img src="/img/player.jpg" alt="" />
        </div>
    )
}

export default Banner