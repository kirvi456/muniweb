import React from 'react';

type URLSList = {
    tipoPlaca        : string;
    boletas          : string;
}



const myURLS : URLSList = {
    tipoPlaca:                   `https://inventariobe.munisanjosepinula.info:8005/api/tipoplaca`,
    boletas:                   `https://inventariobe.munisanjosepinula.info:8005/api/boleta/public`,
}


export const URLSContext = React.createContext<URLSList >(myURLS);

export const URLSProvider : React.FC<{children : JSX.Element}> = ({children}) => {

    const value = myURLS;

    return (
        <URLSContext.Provider value={value}>
            { children }
        </URLSContext.Provider>
    )
}