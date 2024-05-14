import { FC } from "react";
import Styles from "./CurrentOrderCard.module.scss";
import Flex, { AlignItems, FlexDirection } from "../../Flex/Flex";
import FoodCard, { IFoodCard } from "../../FoodCard/FoodCard";
import OrderSummery from "../OrderSummery/OrderSummery";

const foodCards: IFoodCard[] = [
    {
        id: "1",
        title: "Pizza",
        image: "pizza.jpg",
        additionalText: "Tasty pizza with extra cheese",
        items: 1,
        price: 10.99
    },
    {
        id: "2",
        title: "Burger",
        image: "burger.jpg",
        additionalText: "Juicy beef burger with fries",
        items: 1,
        price: 8.49
    },
    {
        id: "3",
        title: "Salad",
        image: "salad.jpg",
        additionalText: "Fresh garden salad with vinaigrette dressing",
        items: 1,
        price: 6.99
    },
    {
        id: "4",
        title: "Sushi",
        image: "sushi.jpg",
        additionalText: "Assorted sushi rolls with wasabi and soy sauce",
        items: 12,
        price: 24.99
    },
    {
        id: "5",
        title: "Pasta",
        image: "pasta.jpg",
        additionalText: "Homemade pasta with marinara sauce",
        items: 1,
        price: 12.99
    },
    {
        id: "6",
        title: "Steak",
        image: "steak.jpg",
        additionalText: "Grilled ribeye steak with mashed potatoes",
        items: 1,
        price: 18.99
    },
    {
        id: "7",
        title: "Ice Cream",
        image: "icecream.jpg",
        additionalText: "Creamy vanilla ice cream with chocolate syrup",
        items: 1,
        price: 4.99
    }
];



interface ICurrentOrderCardProps {
    className?: any;
    onClick?: () => void;
    id?: string;
    username?: string;
    tableNo?: string | number;
    items?: IFoodCard[];
    amount?: string;
    status?: string;
    acceptedBy?: string;
}

const CurrentOrderCard: FC<ICurrentOrderCardProps> = ({
    className = "",
    id,
    username,
    tableNo,
    status,
    acceptedBy

}) => {
    return (
        <div className={`${Styles.Card} ${className}`}>
            <span className={Styles.Username}>{username}</span>
            <div className={Styles.OrderDetails}>
                <Flex className={Styles.Header}>
                    <span className={Styles.Id}>{id}</span>
                    <span className={Styles.TableNo}>{`Table-${tableNo}`}</span>
                </Flex>

                <Flex className={Styles.Footer}>
                    <Flex direction={FlexDirection.COLUMN} alignItems={AlignItems.START}>
                        <span className={Styles.AcceptedBy}>Accepted by :</span>
                        <span className={Styles.AcceptedByName}>{acceptedBy}</span>
                    </Flex>
                    <span className={`${Styles.Status} ${status === "Preparing" && `bg-[#fdb42c]`}`}>{status}</span>
                </Flex>
            </div>
            <hr className="w-full mt-2 mb-1" />
            {foodCards.map((foodCard: IFoodCard) => (
                <FoodCard
                    id={foodCard.id}
                    title={foodCard.title}
                    additionalText={foodCard.additionalText}
                    items={foodCard.items}
                    price={foodCard.price} />
            ))}
            <OrderSummery items={foodCards}/>
        </div>
    );
};
export default CurrentOrderCard;
