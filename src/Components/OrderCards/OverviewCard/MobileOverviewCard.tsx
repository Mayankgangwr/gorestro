import { FC } from "react";
import Styles from "./OverviewCard.module.scss";
import { ArrowUpRightRegular, ArrowDownLeftRegular } from "@fluentui/react-icons";

interface IMobileOverviewCardProps {
    className?: any;
    onClick?: () => void;
    isActive?: boolean;
    progress: {
        isUp: boolean;
        value: number;
    };
    headerTitle: string;
    contentTitle: string;
    contentDescription: string;
}

const MobileOverviewCard: FC<IMobileOverviewCardProps> = ({
    className = "",
    onClick,
    isActive = false,
    progress,
    headerTitle,
    contentTitle }) => {
    return (
        <div className={`${Styles.MobleCard} ${isActive && Styles.ActiveCard} ${className}`} onClick={() => onClick && onClick()}>
            <div className={Styles.Header}>
                {headerTitle}
            </div>
            <div className={Styles.Content}>
                <span className={Styles.Title}>{contentTitle}</span>
                <span
                    className={`${Styles.Description} ${progress?.isUp ? `text-green-700` : `text-red-600`}`}>
                    {progress?.isUp ? <ArrowUpRightRegular fontSize={14} /> : <ArrowDownLeftRegular fontSize={14} />} 
                    {` ${progress?.value}%`}
                </span>
            </div>
        </div>
    );
};
export default MobileOverviewCard;
