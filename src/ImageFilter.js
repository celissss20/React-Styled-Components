import React from "react";
import alimentacion from "../src/assets/images/alimentacion.svg"
import salud from "../src/assets/images/salud.svg"
import otros from "../src/assets/images/otros.svg"
import transporte from "../src/assets/images/transporte.svg"
import utilidades from "../src/assets/images/utilidades.svg"
import { Icono } from "./Components/UI"

export default (type) =>{
    const Images ={
        Restaurante: <Icono src={alimentacion} alt="Restaurante"/>,
        Salud: <Icono src={salud} alt="Salud"/>,
        Transporte: <Icono src={transporte} alt="Transporte"/>,
        Utilidades: <Icono src={utilidades} alt="Utilidaes"/>,
        default:<Icono src={otros} alt="Otros"/>
    };
    return Images[type] || Images["default"];
};