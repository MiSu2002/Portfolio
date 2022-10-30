import React from 'react';
import transcript01 from '../assets/transcripts/Transcripts_page-0001.jpg';
import transcript02 from '../assets/transcripts/Transcripts_page-0002.jpg';
import transcript03 from '../assets/transcripts/Transcripts_page-0003.jpg';
import transcript04 from '../assets/transcripts/Transcripts_page-0004.jpg';
import transcript05 from '../assets/transcripts/Transcripts_page-0005.jpg';
import transcript06 from '../assets/transcripts/Transcripts_page-0006.jpg';
import transcript07 from '../assets/transcripts/Transcripts_page-0007.jpg';
import transcript08 from '../assets/transcripts/Transcripts_page-0008.jpg';
import { Link } from 'react-router-dom';

const Transcripts = () => {
    return (
        <div className="transcript bg-dark">
            <div className="row">
                <div className="col-6 mt-3">
                    <Link to='/' className='link text-success ms-5 fs-5 text-decoration-underline'>/Home</Link>
                </div>
                <div className="col-6 d-flex justify-content-end mt-3">
                    <Link to='/ed' className='link text-primary me-5 fs-5 text-decoration-underline'>/Education</Link>
                </div>
            </div>
            <img src={transcript01} alt='Transcript of Semester-1 page-1' className='transcripts' />
            <img src={transcript02} alt='Transcript of Semester-1 page-2' className='transcripts' />
            <img src={transcript03} alt='Transcript of Semester-2 page-1' className='transcripts' />
            <img src={transcript04} alt='Transcript of Semester-2 page-2' className='transcripts' />
            <img src={transcript05} alt='Transcript of Semester-3 page-1' className='transcripts' />
            <img src={transcript06} alt='Transcript of Semester-3 page-2' className='transcripts' />
            <img src={transcript07} alt='Transcript of Semester-4 page-1' className='transcripts' />
            <img src={transcript08} alt='Transcript of Semester-4 page-2' className='transcripts' />
        </div>
    )
}

export default Transcripts;