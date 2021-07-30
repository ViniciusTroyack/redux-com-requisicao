import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonsThunk } from '../../store/modules/digimons/thunk'

const Search = () => {
    const [digimon, setDigimon] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () => {
        setError(false);
        dispatch(addDigimonsThunk(digimon, setError))
        setDigimon("");
    };

    return (
        <div>
            <div>
                <input
                    value={digimon}
                    onChange={e => setDigimon(e.target.value)}
                    placeholder="Procure seu Digimon"
                ></input>
                {error && <span>Digimon não encontrado!!!!</span>}
            </div>
            <div>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
        </div>
    );
};

export default Search;