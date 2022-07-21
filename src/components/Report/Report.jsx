import React, {useState, useContext} from 'react'
import axios from 'axios'
import './Report.css'
import store from '../../data/store'

export const Report = () => {
    
    const {cases, setCases, login, personsInfo, email} = useContext(store)
    const [licenseNumber, setLicenseNumber] = useState('')
    const [type, setType] = useState('')
    const [ownerFullName, setOwnerFullName] = useState('')
    const [date, setDate] = useState()
    const [description, setDescription] = useState('')
    const [color, setColor] = useState('')
    const [officer, setOfficer] = useState('')

    const approvedPersons = personsInfo.filter((person) => {
        return person.approved === true
    })


    const changeName = (e) => {
        setOwnerFullName(e.target.value)
    }

    const changeLicense = (e) => {
        setLicenseNumber(e.target.value)
    }

    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const changeType = (e) => {
        setType(e.target.value)
    }

    const changeOfficer = (e) => {
        const chosenId = e.target.value
        const chosenPerson = approvedPersons.filter((p) => p._id === chosenId)[0]
        setOfficer(chosenPerson._id)
        console.log(chosenPerson._id)
    }

    const onReport = (e) => {
        e.preventDefault()

        if (!ownerFullName){
            alert('Enter your full name!')
        }

        if (!type){
            alert('Choose the type of bike!')
        }

        if (!licenseNumber){
            alert('Enter the license number!')
        }

        const data = {licenseNumber, date, color, type,
            ownerFullName, officer, description, clientId:'b0934244-c0ea-46d3-9f3b-5f155788ea1b' }
    
            axios.post('https://sf-final-project.herokuapp.com/api/public/report',data).then(res=>{
                setCases(res.data)
                setLicenseNumber('')
                setOwnerFullName('')
                setColor('')
                setType('')
                setDate('')
                setDescription('')
                alert('Report sent')
            }).catch(err => {
                console.log(err)
              });
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!ownerFullName){
            alert('Enter full name of owner!')
        }

        if (!type){
            alert('Choose the type of bike!')
        }

        if (!licenseNumber){
            alert('Enter the license number!')
        }

        const data = {licenseNumber, date, color, type,
        ownerFullName, officer, description }

        axios.post('https://sf-final-project.herokuapp.com/api/cases/',data,{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        }).then(res=>{
            
            setCases(res.data)
            setLicenseNumber('')
            setOwnerFullName('')
            setColor('')
            setType('')
            setDate('')
            setDescription('')
            alert('Report sent')
        }).catch(err => {
            console.log(err)
          });
    }

   

    return(
        <>
        <h1 className="report_title">Report us</h1>
        <form onSubmit={onSubmit} className="report">
        <input type="text" onChange={changeName} value={ownerFullName} placeholder='Owner fullname'/>
        <input type="text" onChange={changeLicense} value={licenseNumber} placeholder='License number'/>
        <input type="date" onChange={changeDate} value={date} placeholder='Date'/>
        <input type="text" onChange={changeDescription} value={description} placeholder='Description'/>
        <input type="text" onChange={changeColor} value={color} placeholder='Color'/>
        {login && <select onChange={changeOfficer} defaultValue={'default'}>
                    <option value="default">Officer for case:</option>
                    {approvedPersons.map((person, index) => (
                        <option value={person._id} key={index}>{person.firstName} {person.lastName}</option>
                    ))}
                </select>}
        <label  className="type">Type of bike</label>
                <select defaultValue={'default'}  onChange={changeType}>
                    <option value="default">Choose type of bike:</option>
                    <option value="general">General</option>
                    <option value="sport">Sport</option>
                </select>

        {login ? <button type='submit' className='signUp_button'>Send</button> : <button onClick={onReport} className='signUp_button'>Send</button>}
        </form>
        </>
    )
}