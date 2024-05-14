import { FC } from "react";
import Styles from "./OverviewCard.module.scss";
import { SettingsRegular, SettingsFilled, ArrowSortUpRegular, ArrowSortDownRegular } from "@fluentui/react-icons";
import Flex, { AlignItems, FlexDirection, JustifyContent } from "../../Flex/Flex";

interface IOverviewCardProps {
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

const OverviewCard: FC<IOverviewCardProps> = ({
    className = "",
    onClick,
    isActive = false,
    progress,
    headerTitle,
    contentTitle,
    contentDescription
}) => {
    return (
        <div className={`${Styles.Card} ${isActive && Styles.ActiveCard} ${className}`} onClick={() => onClick && onClick()}>
            <Flex className={Styles.Header}>
                <div className={Styles.Icon}>{isActive ? <SettingsRegular fontSize={25} /> : <SettingsFilled fontSize={25} />}</div>
                <div className={Styles.Title}>
                    {headerTitle}
                </div>
            </Flex>
            <Flex className={Styles.Content} direction={FlexDirection.COLUMN} justifyContent={JustifyContent.CENTER} alignItems={AlignItems.START}>
                <div className={Styles.Title}>
                    {contentTitle}
                </div>
                <div className={Styles.Description}>
                    <span className={`pr-1 ${progress?.isUp ? `text-green-700` : `text-red-600`}`}>{progress?.isUp ? <ArrowSortUpRegular fontSize={12} /> : <ArrowSortDownRegular fontSize={12} />}100%</span>
                    {contentDescription}
                </div>
            </Flex>
        </div>
    );
};
export default OverviewCard;
