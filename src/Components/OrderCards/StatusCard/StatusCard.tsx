import { FC } from "react";
import Styles from "./StatusCard.module.scss";
import Flex, { AlignItems, JustifyContent } from "../../Flex/Flex";
import moment from "moment";
export interface IStatusCard {
    id?: string;
    username?: string;
    tableNo?: number;
    items?: number;
    amount?: string;
    status?: string;
    acceptedBy: string;
}

interface IStatusCardProps extends IStatusCard {
    className?: any;
    onClick?: () => void;
}

const StatusCard: FC<IStatusCardProps> = ({
    className = "",
    onClick,
    id,
    username,
    tableNo,
    items,
    amount,
    status}) => {
    return (
        <div
            className={`${Styles.OrderDetails} ${className} ${status === "pending" ? `${Styles.IsPending}` : status === "progress" ? `${Styles.IsProgress}` : status === "completed" ? `${Styles.IsCompleted}` : ``}`}
            onClick={() => onClick && onClick()}>
            <Flex className={Styles.Header}>
                <span className={Styles.Id}>
                    {id} 
                    <span className={Styles.TableNo}>{`Table-${tableNo}`}</span></span>
                <span className={Styles.Items}>{`Items: ${items}`}</span>
            </Flex>

            <Flex className={Styles.Footer}>
                <Flex className="gap-1" alignItems={AlignItems.CENTER} justifyContent={JustifyContent.START}>
                    <span className={Styles.OrderdBy}>Order by :</span>
                    <span className={Styles.OrderByName}>{username}<span className={Styles.Time}>{`(${moment().format("hh:mm A")})`}</span></span>
                </Flex>
                <span className={Styles.Amount}>${amount}.00</span>
            </Flex>

        </div>
    );
};
export default StatusCard;
