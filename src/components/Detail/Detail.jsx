import React, {useState, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import './Detail.css'
import store from '../../data/store'

export const Detail = (props) => {
    const location = useLocation()
    const [cases, setCases] = useState(location.state)
    const [submit, setSubmit] = useState(false)
    const [ownerFullName, setOwnerFullname] = useState(cases.ownerFullName)
    const [color, setColor] = useState(cases.color)
    const [licenseNumber, setLicenseNumber] = useState(cases.licenseNumber)
    const [type, setType] = useState(cases.type)
    const status = cases.status
    const date = cases.data
    const description = cases.description
    const resolution = cases.resolution
    const createdAt = cases.createdAt
    const updatedAt = cases.updatedAt
    const [officer, setOfficer] = useState('')
  

    const {personsInfo} = useContext(store)

    const approvedPersons = personsInfo.filter((person) => {
        return person.approved === true
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)
      
        const data = {
            ownerFullName, color, licenseNumber, type, date, resolution, officer
        }

        axios.put(`https://sf-final-project.herokuapp.com/api/cases/${cases._id}`,data,{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
            
        }).then(res => {
            setCases(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }   


        const changeFullName = (e) => {
            setOwnerFullname(e.target.value)
        }
    
        const changeColor = (e) => {
            setColor(e.target.value)
        }
    
        const changeLicenseNumber = (e) => {
            setLicenseNumber(e.target.value)
        }
    
        const changeType = (e) => {
            setType(e.target.value)
        }

        const changeOfficer = (e) => {
            const chosenId = e.target.value
            const chosenPerson = approvedPersons.filter((p) => p._id === chosenId)[0]
    
            setOfficer(chosenPerson)
        }

        const updatedPerson = approvedPersons.find( p => {
            if (p._id === cases.officer){
                return true
            }
            if (cases.officer === null){
                return false
            }
        })
    
        return(
            <>
            <h1 className='detail_title'>Detail bike page</h1>
            <form className="detail_form" onSubmit={onSubmit}>
                <input type="text" onChange={changeFullName} value={ownerFullName} placeholder='Owner fullname'/>
                <input type="text" onChange={changeColor} value={color} placeholder='Bike color'/>
                <label>Stoling date: {moment(date).format("MMMM Do YYYY, h:mm:ss a")}</label>
                <input type ="date"></input>
                <input type="text" onChange={changeLicenseNumber} value={licenseNumber} placeholder='License number'/>
                <input type="text" onChange={changeType} value={type} placeholder='Bike type'/>
                <p className = "immute">Created at:{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
                <p className = "immute">Update at:{moment(updatedAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
                <p>Status of case is: <b>{status}</b></p>
                <select onChange={changeOfficer} defaultValue={'default'}>
                    <option value="default">Choose officer for your case:</option>
                    {approvedPersons.map((person, index) => (
                        <option value={person._id} key={index}>{person.firstName} {person.lastName}</option>
                    ))}
                </select>
                { updatedPerson ? <p>Case officer is {updatedPerson.firstName} {updatedPerson.lastName}</p> : <p> There is no case officer now</p>}
                {description ? <p>{description}</p> : <p>There is now description now</p>}
                {!resolution || status !== 'done' ? <p className='immute'>No resolution still</p> : <p className='immute'>{resolution}</p>}
                {submit && <p className='report_sent'>Changes saved</p>}
                <button type='Submit' className='button save'>Save</button>
            </form>
            </>
        )
}