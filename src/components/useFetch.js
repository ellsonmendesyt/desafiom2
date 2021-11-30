import  {useEffect,useState} from 'react';

import axios from 'axios';




const useFetch = (url) => {
    const [data,setData]= useState(null);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get(url)
        .then(response=>{
        //   console.log(response.data);
          setData(response.data);
        })
        .catch(error=>{
            console.log(error);
            setError(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);

    return{data,loading,error};
}

export default useFetch
