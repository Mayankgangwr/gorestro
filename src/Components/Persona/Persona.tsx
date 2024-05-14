import React, { FC } from "react";
import { Persona as PersonaComponent, PersonaProps } from "@fluentui/react-components";
interface IPersonaState extends PersonaProps {

}
const Persona: FC<IPersonaState> = (props) => {
    const { name, size, textPosition, textAlignment } = props;
    return (
        <PersonaComponent name={name} className="" />
    )

}
export default Persona;