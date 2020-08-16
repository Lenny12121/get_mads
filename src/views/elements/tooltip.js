import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { HelpCircle } from 'react-feather';

const TooltipMonths = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            
                <span style={{color:"#43bfbf"}} href="#" id="Months">
                    <HelpCircle style={{maxWidth:"20px"}}/>
                </span>
            
            <Tooltip placement="top" isOpen={tooltipOpen} autohide={false}  target="Months" toggle={toggle} style={{backgroundColor:"#8c959e", opacity:'1 !important', filter: "alpha(opacity=100)" }}>
                Thank you for being part of Get Mads. We couldn't do this without you! Please do let us know if you have any feedback, comments or thoughts.
            </Tooltip>
        </div>
  );
}

export default TooltipMonths;