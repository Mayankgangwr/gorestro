import React from "react";
import Styles from "./Card.module.scss";
import { CardHeader as CardHeaderComponent } from "@fluentui/react-components";

interface ICardHeader{
    children: React.ReactNode;
    className: any;
}

const CardHeader:React.FC<ICardHeader> = ({className, children}) =>{
    return(
        <CardHeaderComponent className={`${className} ${Styles.CardHeader}`}>
            {children}
        </CardHeaderComponent>
    );

}
export default CardHeader;