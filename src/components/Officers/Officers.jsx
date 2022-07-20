import React, {useState, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Officers.css'
import store from '../../data/store'

export const Officers = () => {
    const {personsInfo, setPersonsInfo} = useContext(store)
    const [submit, setSubmit] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const changeName = (e) => {
        setFirstName(e.target.value)
    }

    const changeSurname = (e) => {
        setLastName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePass = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            firstName, lastName, email, password, approved: false
        }
        axios.post('https://sf-final-project.herokuapp.com/api/officers',data,{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        }).then(res=>{
            setPersonsInfo(res.data)
            setFirstName('')
            setPassword('')
            setEmail('')
            setLastName('')
            setSubmit(true)
        })
    }

    return(
        <div>
            <h1 className='report_title'>Responsible officers</h1>
            <form className='officers_form' onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" className='input_for_report' onChange={changeName} value={firstName}/>
            <label>Surname</label>
            <input type="text" className='input_for_report' onChange={changeSurname} value={lastName}/>
            <label>Email</label>
            <input type="text" className='input_for_report' onChange={changeEmail} value={email}/>
            <label>Pass</label>
            <input type="text" className='input_for_report' onChange={changePass} value={password}/>

            <button type='submit' className='report_button'>Send report</button>
            {submit && <p className='report_sent'>Report sent</p>}
            <Link to='/list'>Officers list</Link>
            </form>
        </div>
    )
}