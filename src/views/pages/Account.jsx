import React, { useState, useEffect } from 'react';
import { Row, Card, Button } from 'reactstrap';
import Sun from '../../assets/images/sun.gif';
import World from '../../assets/images/world.gif';

export default function Account(props) {
    const [imageUrl, setImageUrl] = useState();
    const [imageAlt, setImageAlt] = useState();

    //Cloudinary upload adapted from here: https://blog.logrocket.com/handling-images-with-cloudinary-in-react/

    const showWidget = () => {
    
        let widget = window.cloudinary.createUploadWidget({ 
            cloudName: 'dlilerh6s',
            uploadPreset: 'pby0gwgy'}, 
            (error, result) => {
                if (!error && result && result.event === "success") { 
                    console.log(result.info.url); 
                    setImageUrl(result.info.secure_url);
                    setImageAlt(result.info.original_filename);
                    }
        })
        widget.open()
    }


    return (
        <Card body>
            <div className="text-center">
                <div className="m-b">
                    {
                        imageUrl 
                        ? <img src={imageUrl} style={{ width: 180 }} className="b-circle" alt="profile" />
                        : <img src={Sun} style={{ width: 180 }} className="b-circle" alt="profile" />
                    }
                </div>
                
            <div>
            <Button className="btn" onClick={showWidget}> Upload Logo </Button>
            <hr />
            <Row className="text-center m-b">
                <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
                <img src={ World } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

                <div className="text-muted" style={{ paddingBottom: '3px' }}>Months Earth Positive</div>
              </div>
          </Row>
          <hr />
        </div>
      </div>
    </Card>
  );
}
