import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const handleChange = (e) => {
    const searchFieldValue = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldValue);
  };

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonster = monsters.filter(({ name }) => {
    return name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monster-search-box"
        onChangeHandler={handleChange}
        placeHolder="search monster"
        classname="monsters-search-box"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

export default App;
