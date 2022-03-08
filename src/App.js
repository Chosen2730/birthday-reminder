import React, {useState} from 'react'
import data from './data'
import List from './list'

const App =()=>{
  const[people, setPeople] = useState(data);
  return<>
  <section className='main_section'>
    <h5>{people.length} birthdays today</h5>
    <List people={people}/>
    <button onClick={()=>setPeople([])} className="clear_btn">
      Clear All
    </button>
  </section>
  </>
}
export default App
