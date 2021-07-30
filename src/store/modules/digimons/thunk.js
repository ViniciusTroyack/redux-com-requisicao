import axios from "axios";
import { addDigimon } from "./actions";

export const addDigimonsThunk = (digimon, setError) => (dispatch) => {
    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
        .then(res => {
            console.log(res.data[0].name)
            dispatch(addDigimon(res.data[0].name))
        })
        .catch(e => {
            setError(true)
        });

}

//export default addDigimonsThunk;

