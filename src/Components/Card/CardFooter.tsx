import React from "react";
import Styles from "./Card.module.scss";
import { CardFooter as CardFooterComponent } from "@fluentui/react-components";

interface ICardFooter{
    children: React.ReactNode;
    className: any;
}

const CardFooter:React.FC<ICardFooter> = ({className, children}) =>{
    return(
        <CardFooterComponent className={`${className} ${Styles.CardFooter}`}>
            {children}
        </CardFooterComponent>
    );

}
export default CardFooter;