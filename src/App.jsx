import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ResultadosForm from './components/ResultadosForm';


const App = () => {

    const [state, setState] = useState({
        Name: "",
        LastName: "",
        Email: "",
        Password: "",
        confirmPassword: "",
    });
    return (
        <div className='App'>
            <h1>Hello Dojo!</h1>
            <Formulario data={state} setData={setState}></Formulario>
            <ResultadosForm data={state}></ResultadosForm>
        </div>
    );
}


export default App;





