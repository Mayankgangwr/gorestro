import React from "react";
import Styles from "./Card.module.scss";
import { CardPreview } from "@fluentui/react-components";

interface ICardBody {
    children: React.ReactNode;
    className: any;
}

const CardBody: React.FC<ICardBody> = ({ className, children }) => {
    return (
        <CardPreview className={`${className} ${Styles.CardBody}`}>
            {children}
        </CardPreview>
    );

}
export default CardBody;