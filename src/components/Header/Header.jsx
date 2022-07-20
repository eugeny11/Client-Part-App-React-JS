import React, {useContext} from 'react'
import store from '../../data/store'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = ({active, setActive}) => {
    
    const {login, setLogin} = useContext(store)

    const logOut = () => {
        setLogin(false)
        localStorage.clear()
    }

    const onActive = () => {
        setActive(true)
    }

    return(
        <>
            <div className="header">
                <ul className="header_menu">
                    <li>
                        <Link className='link' to='/'>Main</Link>
                    </li>
                    <li>
                        <Link className='link' to='/'>Contacts</Link>
                    </li>
                    {login ? <li> <Link className="link" onClick={logOut} to="/">Log Out</Link></li> : 
                    <li><Link className="link" onClick={onActive} to="/">Enter</Link></li>}
                </ul>
            </div>
        </>
    )
}