import { FC } from "react";
import Styles from "./StatusCard.module.scss";
import Flex, {  } from "../../Flex/Flex";
import { ArrowRightRegular } from "@fluentui/react-icons";
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
    status }) => {
    return (
        <div
            className={`${Styles.OrderDetails1} ${className}`}>
            <Flex className={Styles.Header}>
                <span className={Styles.Id}>
                    #{id}</span>
                <span className={Styles.TableNo}>{`Table-${tableNo}`}</span>
            </Flex>
            <Flex className="mt-2 px-1">
                <div className={Styles.OrderByName}><span className=" !text-gray-700 !font-medium">Client Name: </span>{username}</div>
                <span className={Styles.TimeAgo}>{`10 minutes Ago`}</span>
            </Flex>
            <Flex onClick={() => onClick && onClick()} className={`${Styles.Footer} ${status === "pending" ? `${Styles.IsPending}` : status === "progress" ? `${Styles.IsProgress}` : status === "completed" ? `${Styles.IsCompleted}` : ``}`}>
                <div className={Styles.Status}>{status}</div>
                <div className={Styles.Items}>{items} items<span className="pl-1"><ArrowRightRegular /></span></div>
            </Flex>
        </div>
    );
};
export default StatusCard;
