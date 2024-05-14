import React from "react";
import Styles from "./Card.module.scss";
import { Card as CardComponent } from "@fluentui/react-components";

interface ICard{
    children: React.ReactNode;
    className: any;
}

const Card:React.FC<ICard> = ({className, children}) =>{
    return(
        <CardComponent className={`${className} ${Styles.Card}`}>
            {children}
        </CardComponent>
    );
}
export default Card;