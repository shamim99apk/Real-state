import React from 'react';
import './Realstate.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function RealState({
    id,
    list_price,
    description,
    primary_photo,
}) {
    return (
        //   <article key={id} className='main'>
        //       <div className=''>{list_price}</div>
        //       <div className=''>{status}</div>
        //   </article>
        <div key={id} className='d-flex flex-row'>
            <div className='col-2'>
                <div className='card' style={{ width: '18rem' }}>
                    <img
                        src={primary_photo.href}
                        className='card-img-top'
                        alt='...'
                        // style={{ width: '18rem' }}
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>Type: {description.type}</h5>
                        <p className='card-text'>Price: {list_price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
