import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { HelpCircle } from 'react-feather';

const TooltipCO2 = (props) => {
    const [tooltipOpen1, setTooltipOpen1] = useState(false);

    const toggle1 = () => setTooltipOpen1(!tooltipOpen1);

    return (
        <div>
            
                <span style={{color:"#43bfbf"}} href="#" id="CO2">
                    <HelpCircle style={{maxWidth:"20px"}}/>
                </span>
            
            <Tooltip placement="top" isOpen={tooltipOpen1} autohide={false}  target="CO2" toggle={toggle1} style={{backgroundColor:"#8c959e"}}>
                <strong>You</strong> offset your entire carbon footprint of <strong>{props.yearlyCO2}</strong> tonnes per year through your Get Mads subscription.
            </Tooltip>
        </div>
  );
}

export default TooltipCO2;