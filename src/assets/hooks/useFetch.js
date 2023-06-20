import { useState } from "react"
import axios from 'axios'
const useFetch = url => {
    const[resp,setResp]=useState()
    const [haserror,setHaserror]=useState(false)

    const getApi=()=>{
        axios.get(url)
        .then(res=>{
            setResp(res.data) 
            setHaserror(false)})
        .catch(err =>{console.log(err) 
            setHaserror(true)})
    }
    return [resp,getApi,haserror]
    }
export default useFetch