import React,{useEffect, useState} from 'react'
import {Routes, Route } from 'react-router-dom';
import axios from 'axios'
import StoreApi from './data/store'
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import {SignUp} from './components/SignUp/SignUp'
import {SignIn} from './components/SignIn/SignIn'
import {Bikes} from './components/Bikes/Bikes'
import {Detail} from './components/Detail/Detail'
import { DetailOfficer } from './components/DetailOfficer/DetailOfficer';
import {Officers} from './components/Officers/Officers'
import {OfficersList} from './components/OfficersList/OfficersList'
import {Report} from './components/Report/Report'


const App = () => {
  

  const [login, setLogin] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
  const [personsInfo, setPersonsInfo] = useState('')
  const [cases, setCases] = useState('')
  


  const onSubmit = (e) => {
    e.preventDefault()
    setError(false)

    const data ={
      email, password
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer '+localStorage.getItem('token')
    
  }
  
  

  axios.post('https://sf-final-project.herokuapp.com/api/auth/sign_in', data,{ headers }).then(res => {
      setData(res.data);
      setEmail('');
      setPassword('');
      setActive(false)
      setLogin(true)
      localStorage.setItem('token',res.data.data.token)
    }).catch(err => {
      setError(true);
      setEmail('');
      setPassword('');
    
    });

  }

  const loadingOfPersons = async ()=>{
   

const res= await axios.get('https://sf-final-project.herokuapp.com/api/officers',{
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
        }
    })
    setPersonsInfo(res.data.officers)
}
 
useEffect(() => {
  loadingOfPersons()
},[personsInfo])

const loadingOfСases = async ()=>{
 

const res= await axios.get('https://sf-final-project.herokuapp.com/api/cases',{
      headers:{
          Authorization: 'Bearer '+localStorage.getItem('token')
      }
  })
  setCases(res.data.data)
}

useEffect(() => {
  loadingOfСases()
},[cases])



  return (
    <div className='wrapper'>
        <StoreApi.Provider value={{onSubmit, login, setLogin, email, setEmail, password, setPassword,
        error, setError, data, setData, personsInfo, setPersonsInfo, cases, setCases}}>
        
            <Header active={active} setActive={setActive}/>
            <SignIn active={active} setActive={setActive}/>
            <Routes>
              <Route  exact path="/" element={<Main />}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/report" element={<Report />} />
              <Route path="/bikes" element={<Bikes />}/>
              <Route path={"/bikes/:itemId"} element={<Detail />}/>
              <Route path="/officers" element={<Officers />}/>
              <Route path="/list" element={<OfficersList />}/>
              <Route path={"/list/:itemId"} element={<DetailOfficer/>} />
            </Routes>
         
          
        </StoreApi.Provider>
        
    </div>
  );
}

export default App;
