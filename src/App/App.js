import React from 'react';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Data from '../Data/Data';

const App = ({ status, selectItem, onClick, list }) => (
  <section>
    <h1>My component</h1>
    <ul>
      {list.map(({ name }) => (
        <li key={name}>
          <button onClick={() => selectItem(name)}>{name}</button>
        </li>
      ))}
    </ul>
    <button onClick={onClick}>List</button>
    {{
      LOADING: <Loader />,
      ERROR: <Error/>,
      OK: <Data />
    }[status]}
  </section>
);

export default App;