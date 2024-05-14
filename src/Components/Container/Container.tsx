import React from "react";
interface IContainer{
    children: React.ReactNode;
    className?: any;
}
const Container: React.FC<IContainer> = ({ children, className}) => {
    return <div className={`w-full h-[100vh] bg-[#eff3f4] pt-5 px-5 ${className}`}>{children}</div>;
}
export default Container;