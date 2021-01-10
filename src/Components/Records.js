import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Records = () => {

    const [records, setRecords] = useState([]);

    const fetchRecord = () => {
        axios.get('http://api.enye.tech/v1/challenge/records')
        .then((res) => {
            let result = res.data.records.profiles;
            setRecords([...result]);
            });
    }

    useEffect(() => {  
       fetchRecord();
         },[]);

    return (
        <div>
        <div className="header_records"><span>TRANSACTION RECORDS</span></div>
        <div className="records_container">
                {console.log(records)}
                { records.map( (details,i) =>
                     <div className="records_item" key={i}>
                         <div className="name">{details.FirstName} {details.LastName}</div>
                        <ul>
                            <li><span>Username:</span> {details.UserName}</li>
                            <li><span>Gender:</span> {details.Gender}</li>
                            <li><span>Email:</span> {details.Email}</li>
                            <li><span>PhoneNumber:</span> {details.PhoneNumber}</li>
                            <li><span>CardNumber:</span> {details.CreditCardNumber}</li>
                            <li><span>DomainName:</span> {details.DomainName}</li>
                            <li><span>URL:</span> {details.URL}</li>
                            <li><span>PaymentMethod:</span> {details.PaymentMethod}</li>
                            <li><span>MacAddress:</span> {details.MacAddress}</li>
                            <li><span>Latitude:</span> {details.Latitude}</li>
                            <li><span>Longitude:</span> {details.Longitude}</li>
                            <li><span>LastLogin:</span> {details.LastLogin}</li>
                        </ul>
                        </div>                      
                    )
                }
                
         </div>
         </div> 
    )
}

export default Records;
