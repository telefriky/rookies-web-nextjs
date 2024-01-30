'use client'

import { useTranslation } from "react-i18next";

const { Component } = require("react");

export default function ExampleClientComponent() {
    
    const {t} = useTranslation()
    
    const userName = 'Marcelo'
    
    return <h3>{t("texto-test",{userName})}</h3>
    
}