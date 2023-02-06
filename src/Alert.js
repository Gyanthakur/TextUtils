import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    } 
  return (
    <div style={{height:'50px'}} >

    
        {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} h-3 role="alert">
            <strong>{capitalize(props.Alert.type)}</strong>:{props.Alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
            </div>
  )
}

export default Alert