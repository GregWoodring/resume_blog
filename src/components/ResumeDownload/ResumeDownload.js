import React from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
import resume from './GregWoodringResume.pdf';
import './ResumeDownload.scss';


let ResumeDownload = props => {
    return(
        <object 
            height='1200px'
            width='600px'
            type='application/pdf'
            data={resume}></object>
    )
}

export default ResumeDownload;