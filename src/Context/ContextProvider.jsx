import { createContext, useContext, useEffect, useState } from "react";


export const contextProvider = createContext()

export function ContextProviderChildren({ children }) {

    const [carritoListaContext, setcarritoListaContext] = useState([])
    const [carritoCountContex, setcarritoCountContex] = useState(0)

    useEffect(()=> {

        let data 
        data = JSON.parse( localStorage.getItem('todos'))
        if(data == null){
            setcarritoListaContext([])
        }else{
            setcarritoListaContext(JSON.parse( localStorage.getItem('todos') ))
        }

    },[carritoCountContex])
    

    return (
        <contextProvider.Provider
            value={{
                carritoListaContext,
                carritoCountContex,
                setcarritoCountContex,
            }}
        >
            {children}
        </contextProvider.Provider>
    );

}