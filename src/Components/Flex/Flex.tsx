import React from 'react';

enum JustifyContent {
    NORMAL = 'normal',
    END = 'end',
    START = 'start',
    CENTER = 'center',
    BETWEEN = 'between',
    AROUND = 'around',
    EVENLY = 'evenly',
    STRETCH = 'stretch',
}
enum AlignItems {
    END = 'end',
    START = 'start',
    CENTER = 'center',
    BASELINE = 'baseline',
    STRETCH = 'stretch',
}
enum FlexDirection {
    ROW = 'row',
    COLUMN = 'column'
}

enum FlexWrap {
    WRAP = 'wrap',
    REVERSE = 'reverse',
    NOWRAP = 'nowrap'


}

interface FlexProps {
    direction?: FlexDirection;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    flexWrap?: FlexWrap;
    className?: string;
    children: React.ReactNode;
}


const justifyContentClasses: Record<JustifyContent, string> = {
    [JustifyContent.NORMAL]: 'justify-normal',
    [JustifyContent.END]: 'justify-end',
    [JustifyContent.START]: 'justify-start',
    [JustifyContent.CENTER]: 'justify-center',
    [JustifyContent.BETWEEN]: 'justify-between',
    [JustifyContent.AROUND]: 'justify-around',
    [JustifyContent.EVENLY]: 'justify-evenly',
    [JustifyContent.STRETCH]: 'justify-stretch',
};

const alignItemsClasses: Record<AlignItems, string> = {
    [AlignItems.END]: 'items-end',
    [AlignItems.START]: 'items-start',
    [AlignItems.CENTER]: 'items-center',
    [AlignItems.BASELINE]: 'items-baseline',
    [JustifyContent.STRETCH]: 'items-stretch',
};

const flexDirectionClasses: Record<FlexDirection, string> = {
    [FlexDirection.ROW]: 'flex-row',
    [FlexDirection.COLUMN]: 'flex-col',
}
const flexWrapClasses: Record<FlexWrap, string> = {
    [FlexWrap.WRAP]: 'flex-wrap',
    [FlexWrap.REVERSE]: 'flex-wrap-reverse',
    [FlexWrap.NOWRAP]: 'flex-nowrap'
}
const Flex: React.FC<FlexProps> = ({
    direction = FlexDirection.ROW,
    justifyContent = JustifyContent.BETWEEN,
    alignItems = AlignItems.CENTER,
    flexWrap = FlexWrap.NOWRAP,
    className = '',
    children
}) => {
    console.log(justifyContent)
    return (
        <div className={`flex ${flexDirectionClasses[direction]} ${justifyContentClasses[justifyContent]} ${alignItemsClasses[alignItems]} ${flexWrapClasses[flexWrap]} ${className}`}>
            {children}
        </div>
    );
};

export default Flex;
