import { useState } from "react";


const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    
    const {name, capital, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <p>Capital: {capital}</p>
            <img className="card-img" src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)} className="btn">Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)} className="btn">Add flag</button>
            <br />
            <button onClick={handleVisited} className="btn">{visited? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visite'}
        </div>
    );
};

export default Country;