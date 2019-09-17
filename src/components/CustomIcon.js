import React from 'react';
 
export default function CustomIcon(props) {
 // console.log(props,'props--------------')
 return (
   <div >
     <img
       src={props.icon}
       className={props.iconStyle}
       onClick={props.onclick !== null ? props.onclick : null}
     />
   </div>
 );
}
