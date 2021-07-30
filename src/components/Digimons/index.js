import { useSelector } from "react-redux";
import './styles.css'

const Digimons = () => {

    const { digimons } = useSelector((state) => state);
    console.log(digimons)
    return (
        <div className='list'>
            <ul>
                {digimons.map((digimon, index) => <li key={index}>
                    <div className='card'>
                        <img src={digimon.img} />
                        <div>
                            <p>{digimon.name}</p>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default Digimons;