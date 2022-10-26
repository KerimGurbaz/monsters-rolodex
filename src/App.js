import {useState, useEffect} from 'react' ;
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css'


const App = ()=>{
  const [searchField, setSearchField] = useState('')
  const[monsters, setMonsters] = useState([]);
  const [stringField, setStringField] = useState('')
  const []
 
  useEffect(()=>{ 
    console.log("effect fired")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users) => setMonsters(users)
      );
    },[])

 

  const onSearchChange = (event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString)
    }


    const onStringChange = (event) =>{
      setStringField(event.target.value)
    }



    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })


  return (
    <div className="App">
    <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
      className ='monsters-search-box'
       onChangeHandler = {onSearchChange} 
       placeholder = 'search monsters'
   />
      <SearchBox 

       onChangeHandler = {onStringChange} 
       placeholder = 'set string'
   />
   <CardList monsters={filteredMonsters}/>
  </div>
  )

}



export default App;
 
