import { useState } from "react"
import axios from 'axios'
const useFetch = url => {
    const[resp,setResp]=useState(url)
    const getApi=()=>{
        axios.get(url)
        .then(res=>setResp(res.data))
        .catch(err =>console.log(err))
    }
    return [resp,getApi]
    }
export default useFetch