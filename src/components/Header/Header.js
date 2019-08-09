import React from 'react';
import './Header.scss';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook } from '@fortawesome/free-solid-svg-icons';



let Header = props => {
    console.log(props.location);
    return (
        <header className='header'>
            <div className={`menu-item ${props.location.pathname === '/' ? 'menu-item-current' : ''}`}>
                <Link to='/'>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faHome} />
                    Home
                </Link>
            </div>
            
            <div className='menu-item'>
                <Link to='/contact'>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faAddressBook} />
                    Contact
                </Link>
            </div>
        </header>
    )
}

export default withRouter(Header);