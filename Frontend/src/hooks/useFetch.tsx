import { useEffect, useState } from "react"

type FetchData<T> = { 
    data: T | undefined; 
    loading: boolean; 
    error: string | null;
}

function useFetch<T>(url: string, successFunction: (params: T) => void): FetchData<T>  { 
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<T>()
    const [error, setError] = useState<string | null>(null)

    const abortController = new AbortController()

    function fetchData(){ 
        try{
        setLoading(true)
        fetch(url,
            {  
            headers: {
              'Content-Type': 'application/json',
            }})
        .then((resp) => resp.json())
        .then((resp) => {
            setData(resp)
            successFunction(resp)
            setLoading(false)
        })
        
        }catch(error){ 
            const typedError = error as Error
            setError(typedError.message)
            setLoading(false)
        }finally{ 

        }
    
    
    }


    function CancelEndPoint(){ 
        abortController.abort()
    }

        

    useEffect(() => { 
            fetchData()
            return () =>CancelEndPoint()
    }, [url])


    return {loading, data, error} 
}

export default useFetch