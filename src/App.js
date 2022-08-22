import { useEffect, useState } from 'react';

import AddItem from './components/add-item/add-item.component';
import Search from './components/search/search.component';
import Title from './components/title/title.component';
import ToDoList from './components/todo-list/todo-list.component';

import './App.css';
import { getList } from './utils/dataManipulation';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    getList().then(data => setList(data));
  }, [])

  useEffect(() => {
    const newFilteredList = list.filter((task) => {
      return task.title.toLowerCase().includes(searchField);
    })
    setFilteredList(newFilteredList);
  }, [list, searchField])

  return (
    <div className="App">
      <div className='container'>
        <Title/>
        <Search setSearchField = {setSearchField}/>
        <ToDoList list = {filteredList} setList = {setList}/>
        <AddItem list = {list} setList = {setList}/>
      </div>
    </div>
  );
}

export default App;
