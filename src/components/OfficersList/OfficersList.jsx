import React, {useState, useEffect, useContext} from 'react'
import './OfficersList.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../data/store'



export const OfficersList = () => {

    const {personsInfo, setPersonsInfo} = useContext(store)
    const [loading, setLoading] = useState(false)
   

    const onApprove = (e) => {
        e.preventDefault()
        const personIdx = + e.target.attributes.getNamedItem('approveperson').value
        const persons = [...personsInfo]
        const person = {...persons[personIdx]}

        if(person.approved === false){
           person.approved = true
            axios.put(`https://sf-final-project.herokuapp.com/api/officers/${person._id}`,{approved: true},{
                headers:{
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }).then(() => loadingOfData())
        }

    }

   

    const onDelete = (e) => {
        e.preventDefault()

        const itemIdx = + e.target.attributes.getNamedItem("deleteperson").value
        const person = personsInfo[itemIdx]
       
        
    axios.delete(`https://sf-final-project.herokuapp.com/api/officers/${person._id}`,{
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
        }
    }).then(() => loadingOfData())
    }

    const loadingOfData = async ()=>{
        setLoading(true)
    
    const res= await axios.get('https://sf-final-project.herokuapp.com/api/officers',{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        })
        setPersonsInfo(res.data.officers)
      
        setLoading(false)
    }

    useEffect(() => {
        loadingOfData()
       },[])

    
   const renderPersons = () => {
    return(
        <>
        {loading ? (<h1>Loading</h1>): (
            <div className='wrapper'>
                <h1>Officers list</h1>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           personsInfo.map((person,index) => 
                                <tr key={person._id}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.email}</td>
                                    <td>{person.approved.toString()}</td>
                                    <td><button onClick={onApprove} approveperson={index} className='approve'>Approve</button></td>
                                    <td><button onClick={onDelete} deleteperson={index} className='delete'>Delete</button></td>
                                    <td><Link className='detail_link' to={`./${person._id}`} state={person}><button className="detail">Detail</button></Link></td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        ) }
       
        </>
    )
   } 

    const renderEmptyState = () => {
        return(
            <p>There are no officers still</p>
        )
    }

    return (
        <>
            {personsInfo.length ? renderPersons() : renderEmptyState()}
        </>
        
    )
   
}