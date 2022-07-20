import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import './DetailOfficer.css'
import axios from 'axios'

export const DetailOfficer = (props) => {
   
    const location = useLocation()
    const [submit, setSubmit] = useState(false)
    const [person, setPerson] = useState(location.state)
    const [approved, setApproved] = useState(person.approved)
    const email = person.email
    const [password, setPassword] = useState(person.password)
    const [firstName, setFirstName] = useState(person.firstName)
    const [lastName, setLastName] = useState(person.lastName)

    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const changeLastName = (e) => {
        setLastName(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

   const onApproved = () => {
    if (approved === false){
        setApproved(true)
        alert('Officer was approved')
    } 
   }

   const disApproved = () => {
    if (approved === true){
        setApproved(false)
        alert('Officer is not approved')
    }
   }

    const onSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)

        const data = {
            firstName, lastName, approved
        }

        axios.put(`https://sf-final-project.herokuapp.com/api/officers/${person._id}`,data,{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
            
        }).then(res => {
            setPerson(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <>
            <h1 className='detail_title'>Detail officer page</h1>
            <form className='detail_form' onSubmit={onSubmit}>
            <input type="text" onChange={changeFirstName} value={firstName} placeholder='Edit first name' />
            <input type="text" onChange={changeLastName} value={lastName} placeholder='Edit last name'/>
            <input type="password" onChange={changePassword} placeholder='Change password'/>
            {submit && <p className='report_sent'>Changes saved</p>}
            <button type='Submit' className='button save_changes'>Save changes</button>
            </form>
            <div className="approve_block">
                <button className='approve' onClick={onApproved}>Approve</button>
                <button className='unapprove' onClick={disApproved}>Disapprove</button>
            </div>
            
        </>
    )
}