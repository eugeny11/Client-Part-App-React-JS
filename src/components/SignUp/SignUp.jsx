import React, {useState} from 'react'
import axios from 'axios'
import './SignUp.css'
export const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [clientId, setClientId] = useState('')
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    const enterName = (e) => {
        setFirstName(e.target.value)
    }

    const enterLastName = (e) => {
        setLastName(e.target.value)
    }

    const enterEmail = (e) => {
        setEmail(e.target.value)
    }

    const enterId = (e) => {
        setClientId(e.target.value)
    }

    const enterPassword = (e) => {
        setPassword(e.target.value)
    }

    const confirmPassword = (e) => {
        setRepassword(e.target.value)
    }

    const onSubmit =(e) => {
        e.preventDefault()
        setError(false)

        const data = {
            firstName, lastName, email, password, repassword,
            clientId
        }

        const headers={
            'Content-Type': 'application/json',
          
        }

        axios.post('https://sf-final-project.herokuapp.com/api/auth/sign_up',data,headers).then(res => {
            setData(res.data)
            setEmail('')
            setFirstName('')
            setLastName('')
            setPassword('')
            setRepassword('')
            setClientId('')
        }).catch(error => {
            console.log(error)
            setError(true)
        })

        }

        return(
            <>
                <h1 className='signUp_title'>Registration</h1>
                <form onSubmit={onSubmit} className='signUp'>
                    <input onChange={enterName} value={firstName} type='text' placeholder='Name'/>
                    <input onChange={enterLastName} value={lastName} type="text" placeholder='Surname' />
                    <input onChange={enterEmail} value={email} type="text" placeholder='Email' />
                    <input onChange={enterId} value={clientId} type="text" placeholdre='clientId'/>
                    <input onChange={enterPassword} value={password} type="password" placeholder='Password'/>
                    <input onChange={confirmPassword} value={repassword} type="password" placeholder='Confirm password' />

                    {error && <p className='alarm'>Error</p>}
                    <button className='signUp_button'>Register</button>
                </form>
            </>
        )
    }


