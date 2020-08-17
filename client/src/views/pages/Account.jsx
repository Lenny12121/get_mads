import React, { useState, useEffect } from 'react';
import { Row, Card, Button } from 'reactstrap';
import Sun from '../../assets/images/sun.gif';
import World from '../../assets/images/world.gif';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Form from '../elements/Forms';

require('dotenv').config();

let baseURL = 'http://localhost:3003';

//ENV NOT WORKING
const cloudN = process.env.REACT_APP_CLOUD_NAME;
const uploadPreset = process.env.REACT_APP_UPLOAD_PRESETS;

export default function Account(props) {

    const [imageUrl, setImageUrl] = useState();
    const [imageAlt, setImageAlt] = useState();

    //Cloudinary upload adapted from here: https://blog.logrocket.com/handling-images-with-cloudinary-in-react/

    const showWidget = () => {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: 'dlilerh6s',
            uploadPreset: 'pby0gwgy' }, 
            (error, result) => {
                if (!error && result && result.event === "success") { 
                    console.log(result.info.url); 
                    setImageUrl(result.info.secure_url);
                    setImageAlt(result.info.original_filename);
                    }
        })
        widget.open()
    }

    const { isAuthenticated, user } = useAuth0();
    const [userData, setData] = useState({});
    const [toggle, setToggle] = useState(1);

    const checkUser = () => {
        if (isAuthenticated)  {
            const authId = user.sub;
            const email = user.email;
            fetch(baseURL + '/api/user', {
                method: 'POST',
                body: JSON.stringify({ authId, email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then (res => res.json())
            .then (data => {
                setData(data)
                setToggle(0);
            }).catch(error => console.error({ 'Error': error }));
        }
    }  

    useEffect(() => {
        if (toggle == 1)  {
            checkUser();
        }
    });

    return (
        <Card body>
            <div className="text-center">
                <div className="m-b">
                    {
                        userData.imageURL 
                        ? <img src={userData.imageURL} style={{ width: 180 }} className="b-circle" alt={userData.imageAlt} />
                        : imageUrl 
                        ? <img src={imageUrl} style={{ width: 180 }} className="b-circle" alt={imageAlt} />
                        : <img src={Sun} style={{ width: 180 }} className="b-circle" alt="profile" />
                    }
                </div>
                <Button className="btn" onClick={showWidget}> Upload Logo </Button>
                <p className="text-muted" style={{ fontSize:'12px', paddingTop:'10px'  }}>Make sure your image is formatted 1:1 to avoid cropping.</p>
                <hr />
            </div>
            <Form userData={userData}
                imageUrl={imageUrl}
                imageAlt={imageAlt}
                />
    </Card>
  );
}
