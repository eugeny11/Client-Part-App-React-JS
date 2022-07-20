import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './Bikes.css'
import store from '../../data/store'

export const Bikes = () => {
    const {cases, setCases} = useContext(store)
    const [loading,setLoading] = useState(false)
    const [itemStatus, setItemStatus] = useState()
    const [resolution, setResolution] =useState('')
   
  const onDelete=(e)=>{
    e.preventDefault();
    const itemIdx = + e.target.attributes.getNamedItem("deteleitem").value
    const item = cases[itemIdx]
    setLoading(true)

    axios.delete(`https://sf-final-project.herokuapp.com/api/cases/${item._id}`,{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        }).then(() => loadingOfData())
    }

    const changeResolution = (e) => {
        setResolution(e.target.value)
    }
   
    const changeStatus= (e) =>{
        const value = e.target.value
       

        const objectIdx = + e.target.selectedOptions[0].getAttribute('objectindex') ;
        const items = [...cases]
        
        const item = {...items[objectIdx]}
        item.status = value
        items[objectIdx] = item
        setItemStatus(value)
    }
    
   
    const onChange=(e)=>{
        e.preventDefault()
        
        const itemIdx = + e.target.attributes.getNamedItem("itemindx").value
        const item = cases[itemIdx]
        item.resolution = resolution
        item.status = itemStatus
       
        axios.put(`https://sf-final-project.herokuapp.com/api/cases/${item._id}`,item,{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        }).then(() => loadingOfData)
     
    }

    const loadingOfData = async ()=>{
        setLoading(true)
    
    const res= await axios.get('https://sf-final-project.herokuapp.com/api/cases',{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        })
        setCases(res.data.data)
      
        setLoading(false)
    }

   useEffect(() => {
    loadingOfData()
   },[])

  const renderCases = () => {
    return(
        
        <>
       
        { loading ? (
           <h1>Loading</h1>
       ):
    
       (cases.map((item, index)=>
       <div className="card" key={index}>
    
       <p className="item_field"> <span className="span">Full Owner's Name: </span>{item.ownerFullName}</p>
       <p className="item_field">
           <span>Status: </span>
           <select  defaultValue={'default'} onChange={changeStatus}>
               <option  objectindex={index} value="default">Set status for your case::</option>
               <option  objectindex={index} value="new">New</option>
               <option  objectindex={index} value="in_progress">In Progress</option>
               <option objectindex={index} value="done">Finished</option>
           </select>
      
           </p>
       <p className="item_field"><span>License Number: </span>{item.licenseNumber}</p>
       <p className="item_field"><span>Stoling data: </span>{moment(item.date).format('L')}</p>
       <p className="item_field"><span>Color: </span>{item.color}</p>
       <p className="item_field"><span>Type: </span>{item.type}</p>

      <input disabled = {
          itemStatus !== "done"
      }  className="set_message" value = { resolution } placeholder='To make
      resolution, case must be finished' onChange={changeResolution}>
           </input>
         
         
      
      <div className="btn-container">
       <button   deteleitem={index} onClick={onDelete} className='btn delete'>Delete</button>
       <button  className="change"itemindx={index} type='Submit' onClick={onChange}
       disabled={(itemStatus === 'done' && resolution.length === 0)}>Save changes</button>
        <Link to={`./${item._id}`} state={item}><button className="detail">Detail</button></Link>
         
       
    </div>
        
       </div>
        )
       )}

   
    

        </>
    )

   
  } 
  
  const renderEmptyState = () => {
    return (
        <p>There are no cases still</p>
    )
  }

  return( <div className='wrapper'>
        {cases.length ? renderCases() : renderEmptyState()}
  </div>)

}