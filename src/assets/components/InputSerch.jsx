import { useRef } from "react"

const InputSerch = ({setIdlocation}) => {
    const idlocatioValue=useRef()
    const handleSUbmit=e=>{
        e.preventDefault()
        setIdlocation(idlocatioValue.current.value.trim())
    }
  return (
    <form onSubmit={handleSUbmit}>
        <input placeholder="Enter Id location" type="text" ref={idlocatioValue}/>
        
        <button>Serch</button>
    </form>
  )
}

export default InputSerch