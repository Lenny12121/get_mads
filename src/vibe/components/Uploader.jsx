import React, { Component } from 'react';

export default class Uploader extends Component {
    state = {
        imageUrl: '',
        imageAlt: '',
      }
//Cloudinary upload adapted from here: https://blog.logrocket.com/handling-images-with-cloudinary-in-react/

    showWidget = () => {
    
        let widget = window.cloudinary.createUploadWidget({ 
            cloudName: 'dlilerh6s',
            uploadPreset: 'pby0gwgy'}, 
            (error, result) => {
                if (!error && result && result.event === "success") { 
                    console.log(result.info.url); 
                    this.setState({
                        imageUrl: result.info.secure_url,
                        imageAlt: '${result.info.original_filename}',
                    })
        }});
        widget.open()
      }

    render() {

            
        return (
            <div>

                <button className="btn" onClick={this.showWidget}> Upload Image </button>

            </div>
        )
    }
}
