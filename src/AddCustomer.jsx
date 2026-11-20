import React, { useEffect, useRef, useState } from 'react'
import { ViewCustomer } from './ViewCustomer'
import { useDispatch } from 'react-redux'
import { addCustomer as addCustomerAction} from './Slice/CustomerSlice'

export const AddCustomer = () => {
    const inputFocus = useRef(null)
    const [input,setInput] = useState("")
    // const [customer,setCustomer] = useState([])
    const dispatch = useDispatch()

    let addCustomer = () => {
        if(input){
            // setCustomer([...customer,input])
            dispatch(addCustomerAction(input))
            // console.log(customer);
            setInput("")
        }
    }

    useEffect(() => {
        inputFocus.current.focus()
    })
  return (
    <div>
        <input ref={inputFocus} type="text" name="" value={input} id="" onChange={e=>setInput(e.target.value)}/>
        <button onClick={addCustomer}>ADD</button>
        {/* <ViewCustomer customer={customer}/> */}
    </div>
  )
}
