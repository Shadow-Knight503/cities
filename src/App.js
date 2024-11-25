import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [cty, setCty] = useState([]);
    const [fld, setFld] = useState("");

    function hndl() {
        if(fld !== "" && !cty.includes(fld)) {
            setCty(cty => [...cty, fld]);
        } else if(cty.includes(fld)) {
            alert("City exists")
        }
    }

    return <div className="container flex flex-col items-center m-10 ">
        <h2 className="text-white text-3xl mb-12">Enter Cities</h2>
        <div className="flex">
            <input className="peer rounded-l-xl text-xl p-2 inline-block" id="tar" placeholder="Enter city name"
                   type="text"
                   onChange={(e) => setFld(e.target.value)}/>
            <button className="bg-slate-700 rounded-r-xl p-2 text-white" type="submit"
                    onClick={() => hndl()}>Add
            </button>
        </div>
        <p className={`text-red-700 ${(fld.length !== 0 ? 'hidden' : '')}`}>Empty field</p>
        <ul className="text-white list-disc">
            {cty.map((item, index) => <li className="bg-blue-600 rounded-xl p-2 my-2" key={index}>{item}</li>)}
        </ul>
    </div>
}

export default App;
