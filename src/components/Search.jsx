import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';
import NumberSearch from './NumberSearch';
import '../style/search.css';

export default function Search() {
  const [planet, setPlanet] = useState('');
  const { setFilterByName, data } = useContext(MyContext);

  const filtros = (value) => {
    const planetaFiltrado = data.filter(({ name }) => (
      name.includes(value)
    ));
    setFilterByName(planetaFiltrado);
  };

  const handleChangePlanet = ({ target: { value } }) => {
    setPlanet(value);
    filtros(value);
  };

  return (
    <section className="search-box">
      <input
        className="form-control-lg"
        data-testid="name-filter"
        value={ planet }
        onChange={ handleChangePlanet }
        placeholder="pesquise um Planeta"
      />
      <NumberSearch />
    </section>
  );
}
