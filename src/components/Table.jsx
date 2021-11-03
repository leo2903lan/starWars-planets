import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import Search from './Search';

export default function Table() {
  const { data, filterByName } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('use context dentro do table', data);
    if (data.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]);

  const table = (
    <table>
      <thead>
        <tr>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>name</th>
          <th>orbital period</th>
          <th>population</th>
          <th>rotation period</th>
          <th>surface water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {filterByName.map((planets) => (
          <tr key={ planets.name }>
            <td>{planets.climate}</td>
            <td>{planets.created}</td>
            <td>{planets.diameter}</td>
            <td>{planets.edited}</td>
            <td>{planets.films}</td>
            <td>{planets.gravity}</td>
            <td>{planets.name}</td>
            <td>{planets.orbital_period}</td>
            <td>{planets.population}</td>
            <td>{planets.rotation_period}</td>
            <td>{planets.surface_water}</td>
            <td>{planets.terrain}</td>
            <td>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>);

  return (

    <div>
      <Search />
      {loading ? <p>Carregando...</p> : table }

    </div>

  );
}
