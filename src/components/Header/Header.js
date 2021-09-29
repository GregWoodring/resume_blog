import React, { useState } from 'react';
import './Header.scss';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, 
        faAddressBook, 
        faProjectDiagram,
        faDownload,
        faChevronUp,
        faChevronDown } from '@fortawesome/free-solid-svg-icons';

import resume from '../ResumeDownload/GregWoodringResume.pdf'

let Header = props => {
    const [location, setLocation] = useState(props.location.pathname);
    const [showMenu, setShowMenu] = useState(true);
    return (
        <header className={`header ${showMenu ? '' : 'hide-menu'}` }>
            {/* <FontAwesomeIcon 
                className='icon header-menu'
                icon={faBars} /> */}
            <div className={`menu-item ${location === '/' ? 'menu-item-current' : ''}`}>
                <Link 
                    to='/'
                    onClick={e => setLocation('/')}
                >
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faHome} />
                    Home
                </Link>
            </div>
            
            {/* <div className={`menu-item ${location === '/projects' ? 'menu-item-current' : ''}`}>
                <Link 
                    to='/projects'
                    onClick={e => setLocation('/projects')}>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faProjectDiagram} />
                    Projects
                </Link>
            </div> */}

            <div className={`menu-item ${location === '/contact' ? 'menu-item-current' : ''}`}>
                <Link 
                    to='/contact'
                    onClick={e => setLocation('/contact')}>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faAddressBook} />
                    Contact
                </Link>
            </div>

            {/* <div className={`menu-item ${location === '/about' ? 'menu-item-current' : ''}`}>
                <Link 
                    to='/about'
                    onClick={e => setLocation('/about')}>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faUser} />
                    About Me
                </Link>
            </div> */}
            <div className='menu-control'>
                {showMenu ?
                    <FontAwesomeIcon 
                        onClick={() => {
                            setShowMenu(false)
                        }}
                        className='icon'
                        icon={faChevronUp} /> :
                    <FontAwesomeIcon 
                        onClick={() => {
                            setShowMenu(true)
                        }}
                        className='icon'
                        icon={faChevronDown} /> 
                }
            </div>
            <div className={`menu-item ${location === '/download' ? 'menu-item-current' : ''}`}>
            <a 
                    href={resume}
                    download >
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faDownload} />
                    Download Resume
                </a>
                {/* <Link 
                    to='/download'
                    onClick={e => setLocation('/download')}>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faDownload} />
                    Download Resume
                </Link> */}
            </div>
            
        </header>
    )
}

export default withRouter(Header);