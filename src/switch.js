import React, {useRef} from 'react'
import './switch.css'

function Switch( {setDarkMode,checked,setChecked}) {
    const ref= useRef(null)
    function handleChange(){
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
}

return(
        <div className="dark-mode" >
        <p className="dark-mode-title">Dark Mode</p>
        <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
        <label className="switch" htmlFor="checkbox">

        </label>
    </div>
    )
}

export default Switch;






/* 

import React, {useRef, useState} from 'react'
import './switch.css'

function Switch( setDarkMode,checked,setChecked) {
    const ref= useRef('null')
    //useState recibe el valor por defecto del elemento
//use state devuelve un valor(lo que val ese estado en ese momento) y un metodo o función para cambiar el vcalor
   
// const [checked , setChecked] = useState(defaulChecked)
    //console.log(ref)
    function handleChange(event){
      //  console.log(event.target.checked)
        //console.log(ref.current.checked)
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
  //if(ref.current.checked){
           /*  document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode') */
    //    }else{
          /*   document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode') */
    //    }

        // console.log(event) verificar que funcione el evento ,para que funcione paso el event de parametro en esta function
        //console.log(event.target.checked) //ver si el evento esta en true o false
        // console.log(this.checked) no funciona
        // console.log(ref)

     // }

      // function changeMedia(mq){
      //     setChecked(mq.matches)
      //     if(mq.matches){
      //      /*  document.body.classList.remove('is-light-mode')
      //       document.body.classList.add('is-dark-mode') */
      //   }else{
      //       /* document.body.classList.remove('is-dark-mode')
      //       document.body.classList.add('is-light-mode') */
      //   }
      // }
      
      // useEffect(()=>{
          
      //   const mq = window.matchMedia('(prefers-color-scheme: dark)')
      //   mq.addListener(changeMedia)
      //    setChecked(mq.matches)
        
        
      //   /* if(mq.matches){
      //      setChecked(true)
      //      // ref.current.setAttribute('checked',true)
      //     } */
      
      // },[])
      
      
     /*  
      return(
              <div className="dark-mode" >
              <p className="dark-mode-title">Dark Mode</p>
              <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
              <label className="switch" htmlFor="checkbox">
      
              </label>
          </div>
          )
      }
      
      export default Switch; */

