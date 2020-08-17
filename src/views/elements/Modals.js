import React, {Component} from 'react';
import { Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class ModalsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            value: "<a href='https://www.getmads.com/earth-positive-business/mamoq-3?utm_source=MAMOQ' rel='nofollow' target='_blank'><img style='max-width:100%; max-height:150px' src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU' alt='Get Mads | Plastic & Carbon Offset' /></a>",
            copied: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                    <Button onClick={this.toggle}>Use This Badge</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} >
                        <div className="flexCenter">
                        <img
                            src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU'
                            style={{ width: 100}}
                            alt="Light Badge"
                            aria-hidden={true}
                        />
                        </div>
                        
                        <ModalBody style={{ textAlign: 'center'}}>
                            This badge automatically links to your profile page and will update as your impact grows. Place it in your website footer or anywhere you want to display it on the page by copy/pasting the code snippet below. Alternatively, send the code to your developer. This is something they can also easily do for you. 
                        </ModalBody>
                        <textarea value={this.state.value}
                            onChange={({target: {value}}) => this.setState({value, copied: false})} readOnly style={{ resize:'none', width: '90%', height:'150px', backgroundColor:'#ebebeb', borderColor:'#8c959e' }}/>
                        <ModalFooter>
                            <CopyToClipboard text={this.state.value}
                            onCopy={() => this.setState({copied: true})}>
                                <Button>{this.state.copied ? <span style={{color: '#43bfbf'}}>Copied.</span> : <span>Copy Code</span>}</Button>
                            </CopyToClipboard>
                            {' '}
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
            </div>
        );
    }
}

export default ModalsPage;
