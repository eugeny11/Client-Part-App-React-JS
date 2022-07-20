import React, {useContext} from 'react'
import axios from 'axios'
import store from '../../data/store'
import { Link } from 'react-router-dom'
import './SignIn.css'

export const SignIn = ({active, setActive}) => {
    const {
        onSubmit,
        data, setData,
        email, setEmail,
        error, setError, 
        password, setPassword
    } = useContext(store)

    const activateSignIn = () => {
        setActive(false)
    }

    const stop = (e) => {
        e.stopPropagation()
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePass = (e) => {
        setPassword(e.target.value)
    }

    return(
        <div className={
            active ? 'signIn_window activate' : 'signIn_window'
        }
        onClick={activateSignIn}
        >
            <form className='signIn'
            onSubmit={onSubmit}
            onClick={stop}>
            <Link to='/signUp' onClick={activateSignIn} 
            className='auth'>Registration</Link>
            <input type="text" value={email} onChange={changeEmail}
            placeholder='Email' />
            <input type="password" value={password} onChange={changePass}
            placeholder='Password' />
            {error && <p className='alarm'>Error</p>}
            <button type='submit' className='signIn_button'>Sign In</button>
            </form>
        </div>
    )
}