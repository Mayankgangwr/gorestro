import { FC } from "react";
import Styles from "./FoodCard.module.scss";
import Flex, { AlignItems, FlexDirection } from "../Flex/Flex";
import { Persona } from "@fluentui/react-components";
export interface IFoodCard {
    id: string;
    title: string;
    image?: string;
    additionalText?: string;
    items: string | number;
    price: string | number;
}
interface IFoodCardProps extends IFoodCard {
    className?: any;
    onClick?: () => void;
}

const FoodCard: FC<IFoodCardProps> = ({ className = '', onClick, title, additionalText, items, price }) => {
    return (
        <Flex className={`${Styles.ItemBox} ${className}`} onClick={() => onClick && onClick()} alignItems={AlignItems.START}>
            <Persona size="huge" name={title} textAlignment="center" secondaryText={additionalText} />
            <Flex className={Styles.ItemsAndAmount} direction={FlexDirection.COLUMN} alignItems={AlignItems.START}>
                <span className={Styles.Amount}>${price}.00</span>
                {items && <span className={Styles.Items}>Items: {items}</span>}
            </Flex>
        </Flex>
    );
}
export default FoodCard;