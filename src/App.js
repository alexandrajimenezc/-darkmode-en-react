import React from 'react';
import Main from './main'



function App() {
  return (
   <Main/>
  )    
}  
export default App;
  
  













/* import React, {useState , useEffect} from 'react';
import Header from './header'
import TopCardList from './top-cards-list'
import Overviews from './overviews.js'
import Switch from'./switch'
import './Global.css';


function App() {

  const[darkMode, setDarkMode]= useState(false)
  const [checked , setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'
  
  function changeMedia(mq){
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }
 
useEffect(()=>{
    
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addListener(changeMedia)
  setDarkMode(mq.matches)
  setChecked(mq.matches)
  return () => {
    mq.removeListener(changeMedia)
  }
  
},[])
  
  return (
    <main className ={mainClass} >
      <Header>
        <Switch   
        setDarkMode={setDarkMode} 
        checked={checked} 
        setChecked={setChecked}
        />
      </Header>  
      <TopCardList/> 
      <Overviews/>
    </main> 
  )    
}  
export default App;
  
  








 */






  /* import React , {Fragment} from 'react'; */
  
  /* function App() {
    
    return (
      <Fragment>
      <Header/>
      <TopCardList/> 
 </Fragment> 
    )
  
} */