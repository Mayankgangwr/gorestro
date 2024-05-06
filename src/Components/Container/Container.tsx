import React from "react";

const Container: React.FC<any> = ({ children }) => {
    return <div className=" w-full max-w-7xl mx-auto px-4">{children}</div>;

}
export default Container;