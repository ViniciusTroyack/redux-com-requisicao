import { useSelector } from "react-redux";

const Digimons = () => {

    const { digimons } = useSelector((state) => state);

    return (
        <div>
            <ul>
                {digimons.map((digimon, index) => <li key={index}>{digimon}</li>)}
            </ul>
        </div>
    )
}

export default Digimons;