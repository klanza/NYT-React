import React from "react";

export const Card = ({ children }) => (
    <div className={"card card-primary"}>
        <div className="card-body">
            {children}
        </div>
    </div>
);


export default Card;
