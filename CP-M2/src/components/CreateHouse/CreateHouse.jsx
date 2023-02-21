import React from 'react';
import {useDispatch} from "react-redux";
import {createHouse} from "../../redux/actions";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {

    const [state, setState] = React.useState({
        name: "",
        region: "",
        words: "",
    })

    function handleChange(event) {
        setState({ ...state, [event.target.name]: event.target.value });
    }
    const dispatch = useDispatch();
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(createHouse(state))

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange} />
                <label>Region: </label>
                <input type="text" name="region" onChange={handleChange}/>
                <label>Words: </label>
                <input type="text" name="words" onChange={handleChange}/>
                <button type="submit">Create</button>

            </form>

        </div>
    );
};

export default CreateHouse;
