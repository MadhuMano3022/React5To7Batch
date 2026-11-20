import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCustomer } from './Slice/CustomerSlice'


export const ViewCustomer = (props) => {
//    const {customer} = props
const customers = useSelector(state=>state.customer)
const dispatch = useDispatch()

    let deleteCustomer = (index) => {
        dispatch(removeCustomer(index))
    }
  return (
    <div>
        {customers.map((customer,index) => {
            return <ul style={{listStyle:"none"}}>
                <li>{customer} <button className='btn' onClick={() => deleteCustomer(index)}>Delete</button></li>
                
            </ul>
        })}
    </div>
  )
}
