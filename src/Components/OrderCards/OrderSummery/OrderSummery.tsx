import { FC, useEffect, useState } from "react";
import Styles from "./OrderSummery.module.scss";
import Flex, { AlignItems, FlexDirection } from "../../Flex/Flex";
import { IFoodCard } from "../../FoodCard/FoodCard";
import Button from "../../Buttons/Button";
interface IOrderSummeryProps {
    className?: any;
    onClick?: () => void;
    items: IFoodCard[];
}

const OrderSummery: FC<IOrderSummeryProps> = ({
    className = "",
    items = []
}) => {
    const [paymentSummery, setPaymentSummery] = useState({
        items: 0,
        subTotal: 0.0,
        discount: 0.0,
        tax: 0.0,
        total: 0.0
    })
    const getTotalItems = () => {
        if (items.length > 0) {
            const totalItems = items.reduce((total, item) => total + Number(item.items), 0);
            return totalItems;
        }
        return 0;
    }
    const getSubTotal = () => {
        if (items.length > 0) {
            const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);
            return totalPrice;
        }
        return 0;
    }
    useEffect(() => {
        const fetchData = async () => {
            const totalItems = await getTotalItems();
            const subTotal = await getSubTotal();

            const discount = (subTotal * 10) / 100;
            const tax = ((subTotal - discount) * 18) / 100;
            const total = subTotal - discount + tax;
            setPaymentSummery(() => ({ ...paymentSummery, items: totalItems, subTotal: subTotal, discount: discount, tax: tax, total: total }))
        };
        fetchData();
    }, [items]);


    return (
        <>
            <div
                className={`${Styles.OrderSummery} ${className} ${status === "pending" ? `${Styles.IsPending}` : status === "progress" ? `${Styles.IsProgress}` : status === "completed" ? `${Styles.IsCompleted}` : ``}`}
            >
                <Flex className={Styles.SummeryDetails}>
                    <Flex className={Styles.Labels} direction={FlexDirection.COLUMN} alignItems={AlignItems.START}>
                        <span>Items :</span>
                        <span>Sub Total :</span>
                        <span>discount :</span>
                        <span>Tax :</span>
                    </Flex>
                    <Flex className={Styles.DataValues} direction={FlexDirection.COLUMN} alignItems={AlignItems.START}>
                        <span>{paymentSummery.items}</span>
                        <span>${paymentSummery.subTotal.toFixed(2)}</span>
                        <span>${paymentSummery.discount.toFixed(2)}</span>
                        <span>${paymentSummery.tax.toFixed(2)}</span>
                    </Flex>
                </Flex>
                <hr className=" w-full my-3" />
                <Flex className={Styles.TotalAmount}>
                    <span className={Styles.Label}>Total :</span>
                    <span className={Styles.DataValue}>${paymentSummery.total.toFixed(2)}</span>
                </Flex>
            </div>
            <Button
                children="Process Transactions"
                className={Styles.TransactionsButton}
                onClick={() => alert("Transaction Done...")}
                shape="rounded"
                size="large"
                color="#ffc107"
            />
        </>
    );
};
export default OrderSummery;
