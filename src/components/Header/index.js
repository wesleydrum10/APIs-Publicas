import React, { useState } from 'react';
import './styles.css';
import useDebounce from '../../components/UseDebounce/useDebounce'

const Header = ({ value, onChange, placeholder }) => {

    const [displayValue, setDisplayValue] = useState(value)
    const debounceChange = useDebounce(onChange, 2000)

    function handleChange(event) {
        setDisplayValue(event.target.value)
        debounceChange(event.target.value)
    }

    return (
        <header id="main-header">
            <div className="header-up">
                <label>
                    Filme <input id="subtitle" type="searching" placeholder={placeholder} value={displayValue} onChange={handleChange} />
                </label>
               {/*  <div className="escolha">
                    <div className="escolhaSingle">
                        <input type="radio" value={'t'} onChange={handleTitleChange}/>
                        <p>Único título</p>
                    </div>
                    <div className="escolhaVarius">
                        <input type="radio" value={'s'} onChange={handleSubTitleChange}/>
                        <p>Vários títulos</p>                        
                    </div>
                </div> */}
            </div>
        </header>
    )
};

export default Header;