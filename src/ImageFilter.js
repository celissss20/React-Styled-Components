import React from "react";
import alimentacion from "../src/assets/images/alimentacion.svg"
import salud from "../src/assets/images/salud.svg"
import otros from "../src/assets/images/otros.svg"
import transporte from "../src/assets/images/transporte.svg"
import utilidades from "../src/assets/images/utilidades.svg"
import { Icono,IconoTema } from "./Components/UI"

export default (type) =>{
    const Images ={
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante"/>,
        Salud: <IconoTema src={salud} alt="Salud"/>,
        Transporte: <IconoTema src={transporte} alt="Transporte"/>,
        Utilidades: <IconoTema src={utilidades} alt="Utilidaes"/>,
        default:<IconoTema src={otros} alt="Otros"/>
    };
    return Images[type] || Images["default"];
};