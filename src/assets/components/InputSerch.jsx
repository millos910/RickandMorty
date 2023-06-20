import { useRef, useState } from "react"
import './styles/inputbox.css'
const InputSerch = ({setIdlocation}) => {
    const idlocatioValue=useRef()
    const [inputIsEmpty,setInputIsEmpty]=useState(true)
    const handleSUbmit=e=>{
        e.preventDefault()
        const inputValue=idlocatioValue.current.value.trim()
        if(inputValue===''){
          setInputIsEmpty(true)
          setTimeout(()=>{
            setInputIsEmpty(false)
          },3000)
          // setIdlocation(getRamdomNumber(126))
        }else{
          setIdlocation(inputValue)
        }
    }
  return (
    <div className="input-general">
      <form className="form" onSubmit={handleSUbmit}>
          <input placeholder="Enter Id location" type="text" ref={idlocatioValue}/>
          
          <button>Serch</button>
      </form>
      {
        inputIsEmpty && <h3>this field is obligatory...</h3>
      }
    </div>
  )
  
}

export default InputSerch