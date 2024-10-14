import React from 'react'
import { useEffect,useState } from 'react'
 const getLocalLang = () => {
    const [locallang,setLocallang] = useState('')
    useEffect(()=>{
      
        setLocallang(localStorage.getItem('lang'))
    },[])

    return localLang;

}

export default getLocalLang;