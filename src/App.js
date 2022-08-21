import AddItem from './components/add-item/add-item.component';
import Search from './components/search/search.component';
import Title from './components/title/title.component';
import ToDoList from './components/todo-list/todo-list.component';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='container'>
        <Title/>
        <Search/>
        <ToDoList/>
        <AddItem/>
      </div>
    </div>
  );
}

export default App;
