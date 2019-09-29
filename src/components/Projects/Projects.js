import React, { useState } from 'react';

import './Projects.scss';

let Projects = props => {
    const [showNewPlaylist, setShowNewPlaylist] = useState(false);
    return (
        <main>
            <h1>My Projects</h1>
            <div className='project-item'>
            <h2 className='item-header'><a href='http://newplaylist.gregwoodring.com'>New Playlist</a></h2>
                <div className='item-body'>
                    <div className={'iframe-display ' + (showNewPlaylist ? 'show-iframe' : 'hide-iframe')}>
                    {/* <button
                        onClick={ () => {
                            setShowNewPlaylist(!showNewPlaylist);
                        }}
                    >
                        {showNewPlaylist ? 'Hide App' : 'Show App'}
                    </button>
                    <iframe 
                        title='newPlaylist'
                        src='http://newplaylist.gregwoodring.com' />*/}
                    </div> 
                    <div className='info-column'>
                        
                        <div className='project-information'>
                            <h4>Description</h4>
                            <p>
                                <span>I</span>ntegrates with the spotify API to store users Recently Played music history. It also allows users to tag songs with descriptions, and then generate playlists based off those descriptions.
                            </p>
                        </div>
                        <div className='project-information'>
                            <h4>Tech Stack</h4>
                            <h5>Core Technologies</h5>
                            <ul>
                                <li>
                                    Node.js
                                </li>
                                <li>
                                    ReactJS
                                </li>
                                <li>
                                    PostgreSQL
                                </li>
                            </ul>
                            <h5>Other Technologies</h5>
                            <ul>
                                <li>
                                    OAuth2.0
                                </li>
                                <li>
                                    Redux
                                </li>
                                <li>
                                    SASS
                                </li>
                                <li>
                                    Axios
                                </li>
                                <li>
                                    ExpressJS
                                </li>
                                <li>
                                    MassiveJS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;