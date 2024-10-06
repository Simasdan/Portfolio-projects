import React from 'react';
import './certificates.scss';
import CodingCertif from '../../assets/images/CodingSchoolCertificate.png';
import SourceryCertif from '../../assets/images/SourceryAcademyCertif.png';

const Certificates = () => {
  return (
    <div className='certificatesWrapper'>
        <h2>My Certificates</h2>
        <figure>
            <img src={CodingCertif} alt="Coding School Certificate" />
            <img src={SourceryCertif} alt="Sourcery Academy Certificate" />
        </figure>
    </div>
  )
}

export default Certificates