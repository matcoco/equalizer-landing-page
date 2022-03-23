
import React from "react"
const Button = ({ icon, text, cln_os }) => {
    return (
        <div className={`btn-${cln_os} btn`}>
            <div className="container-img-btn">
                <img src={icon} alt={`icone ${cln_os}`}/>
            </div>
            <div className="container-text-btn">
                <span>{` ${text}`}</span>
            </div>
        </div>
    )

}

export default Button