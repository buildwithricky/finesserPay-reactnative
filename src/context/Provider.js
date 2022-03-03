import React , {createContext,  useReducer} from 'react'
import  auth from './reducers/auth'
import  authState from './initialStates/auth'
export const GlobalContext = createContext({})

// context provider 

const GlobalProvider =({children}) => {
    const [auth,authDispatch] = useReducer(auth,authState)
    
    return <GlobalContext.Provider value={{
        authState,authDispatch
    }}>{children}</GlobalContext.Provider>
    
}


export default GlobalProvider