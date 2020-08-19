import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { HelpCircle } from 'react-feather';

const TooltipPlastic = (props) => {
    const [tooltipOpen2, setTooltipOpen2] = useState(false);

    const toggle2 = () => setTooltipOpen2(!tooltipOpen2);

    return (
        <div>
            
                <span style={{color:"#43bfbf"}} href="#" id="Plastic">
                    <HelpCircle style={{maxWidth:"20px"}}/>
                </span>
            
            <Tooltip placement="top" isOpen={tooltipOpen2} autohide={false}  target="Plastic" toggle={toggle2} style={{backgroundColor:"#8c959e"}}>
                <strong>You</strong> You offset <strong>3600</strong> plastic bottles (<strong>72</strong>kg) per year.
                All plastic is offset through the <a style={{color:"#39434c"}} href="https://plasticbank.com/" target="_blank" rel="noopener noreferrer">Plastic Bank</a> who not only prevent plastic from entering our oceans, but also provide new sources of income for members in developing nations. Collected plastic is exchanged for digital currency and logged in the blockchain. This creates a transparent and traceable supply chain. Read more about that <a  style={{color:"#39434c"}} href="https://www.ibm.com/blogs/systems/plastic-bank-deploys-blockchain-to-reduce-ocean-plastic">here</a>.
            </Tooltip>
        </div>
  );
}

export default TooltipPlastic;