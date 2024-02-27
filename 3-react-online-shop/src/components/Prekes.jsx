import { useRef, useState } from 'react'
import './Prekes.css'

const Prekes = () => {

    const [prekes, setPrekes] = useState([{
        id: 1,
        pavadinimas: 'Book',
        kaina: 10,
        kiekis: 5,
        arTrinti: false
    },
    {
        id: 2,
        pavadinimas: 'Milk',
        kaina: 1,
        kiekis: 100,
        arTrinti: false
    },
    {
        id: 3,
        pavadinimas: 'Toy',
        kaina: 15,
        kiekis: 10,
        arTrinti: false
    },
    {
        id: 4,
        pavadinimas: 'Computer',
        kaina: 1000,
        kiekis: 2,
        arTrinti: false
    },])

    const [naujaPrekeForma, setNaujaPrekeForma] = useState(false);
    // const [trintiPrekeMygtukas, setTrintiPrekeMygtukas] = useState(false);
    const [rikiavimas, setRikiavimas] = useState('standartinis');
    const [pradinesPrekes, setPradinesPrekes] = useState(prekes);

    const pavadinimasInputRef = useRef();
    const kainaInputRef = useRef();
    const kiekisInputRef = useRef();
    const filtravimasRef = useRef();

    const naujaPrekeHandler = () => {
        setNaujaPrekeForma(!naujaPrekeForma)
    };

    const trintiPrekeHandler = (id) => {
        setPrekes(prevPrekes => prevPrekes.map(preke => (preke.id === id ? {...preke, arTrinti: !preke.arTrinti} : preke)))
    };

    const formHandler = (event) => {
        event.preventDefault();

        const naujaPreke = {
            id: Date.now(),
            pavadinimas: pavadinimasInputRef.current.value,
            kaina: kainaInputRef.current.value,
            kiekis: kiekisInputRef.current.value,
            arTrinti: false
        }

        setPrekes([...prekes, naujaPreke]);
        setPradinesPrekes([...pradinesPrekes, naujaPreke])

        pavadinimasInputRef.current.value = '';
        kainaInputRef.current.value = '';
        kiekisInputRef.current.value = '';
    };

    const taipMygtukasHandler = (id) => {
        const prekesPoTrynimo = prekes.filter((preke => preke.id !== id));
        setPrekes(prekesPoTrynimo);
    };

    const rikiavimasHandler = (e) => {
        setRikiavimas(e.target.value)
    }

    switch (rikiavimas) {
        case 'standartinis':
            prekes.sort((a, b) => a.id - b.id);
            break;
        case 'kaina-maz-didz':
            prekes.sort((a, b) => a.kaina - b.kaina);
            break;
        case 'kaina-didz-maz':
            prekes.sort((a, b) => b.kaina - a.kaina)
            break;
        case 'pavadinimas-pagal-abc':
            prekes.sort((a, b) => {
                let aPav = a.pavadinimas.toLowerCase();
                let bPav = b.pavadinimas.toLowerCase();
                if (aPav < bPav) {
                    return -1;
                } else if (aPav > bPav) {
                    return 1;
                } else {
                    return 0
                };
            })
            break;
        case 'pavadinimas-prieš-abc':
            prekes.sort((a, b) => {
                let aPav = a.pavadinimas.toLowerCase();
                let bPav = b.pavadinimas.toLowerCase();
                if (aPav > bPav) {
                    return -1;
                } else if (aPav < bPav) {
                    return 1;
                } else {
                    return 0
                };
            })
            break;
        default:
            prekes.sort((a, b) => a.id - b.id);
    };

    const filtravimasHandler = () => {
        const filtravimoTekstas = filtravimasRef.current.value.toLowerCase();
        if (filtravimoTekstas != '') {
            const filtruotosPrekes = pradinesPrekes.filter(p => p.pavadinimas.toLowerCase().includes(filtravimoTekstas))
            setPrekes(filtruotosPrekes);
        } else {
            setPrekes(pradinesPrekes);
        }
    }

    return (
        <>
            <div className='nauja-preke'>
                <button onClick={naujaPrekeHandler} className='nauja-preke-mygtukas'>Create New Item</button>
                {
                    naujaPrekeForma &&
                    <form onSubmit={formHandler}>
                        <div>
                            <label for="pavadinimasInput">Name:</label>
                            <input ref={pavadinimasInputRef} type="text" id="pavadinimasInput" />
                        </div>
                        <div>
                            <label for="kainaInput">Price:</label>
                            <input ref={kainaInputRef} step='0.01' type="number" min='0' id="kainaInput" />
                        </div>
                        <div>
                            <label for="kiekisInput">Quantity:</label>
                            <input ref={kiekisInputRef} type="number" min='0' id="kiekisInput" />
                        </div>
                        <button type='submit' className='patvirtinti-preke-mygtukas'>Add item</button>
                    </form>
                }
            </div>
            <div className='filtrai-rikiavimas'>
                <div className='filtrai'>
                    <input onInput={filtravimasHandler} ref={filtravimasRef} type="text" className='filtrai-by-name' placeholder='Filter by name' />
                </div>
                <div className='rikiavimas'>
                    <select onChange={rikiavimasHandler}>
                        <option value="standartinis">Standard</option>
                        <option value="kaina-maz-didz">Price(lowest - highest)</option>
                        <option value="kaina-didz-maz">Price(highest - lowest)</option>
                        <option value="pavadinimas-pagal-abc">Name (A-Z)</option>
                        <option value="pavadinimas-prieš-abc">Name (Z-A)</option>
                    </select>
                </div>
            </div>
            <div className='prekes'>
                {
                    prekes.map(preke => {
                        return <div key={preke.id} className='preke'>
                            <h3>{preke.pavadinimas}</h3>
                            <p>Price: <span>{preke.kaina}€</span></p>
                            <div className='trynimas'>
                                <button onClick={() => trintiPrekeHandler(preke.id)} className='trinti-mygtukas'>Delete</button>
                                {
                                    preke.arTrinti &&
                                    <div className='ar-tikrai-trinti'>
                                        <p>Are You sure?</p>
                                        <button onClick={() => taipMygtukasHandler(preke.id)} className='taip-mygtukas'>Yes</button>
                                        <button onClick={() => trintiPrekeHandler(preke.id)} className='ne-mygtukas'>No</button>
                                    </div>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Prekes