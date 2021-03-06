import React from "react"
import Image from "../_shared/Image";

const UnderCard = ({ children }) => {
    return (
        <div className="section2">
            <div className="main-undercard">
                <Image path="assets/bg-pattern-2.svg" alt="bg-pattern-1.svg" cln="undercard" />
                <Image path="assets/illustration-app.png" alt="illustration-app.png" cln="phone" />
                {children}

            </div>
        </div>

    )
}

export default UnderCard;