import React, {useState} from 'react'
import utils from '../utils'

const Color = ({rgb, alpha, type, weight, index}) => {
    const [ copySuccess, setCopySuccess ] = useState(false);
    const csv = rgb.join(",");

    const alertCopySuccess = (e) => {
        setCopySuccess(true);
        navigator.clipboard.writeText(csv)
    }//para mostrar las letras mas claras a partir de determinado index, necesito pasarlo por parametro
    //esto es para que la letra negra no se ccamufle con los colores oscuros
    return (
        <div className="color" style={{background:`rgb(${csv})`}} onClick={alertCopySuccess}>
            <p className="percent-value">{weight}</p>
            {copySuccess && <p className="alert">Copied to clipboard!</p>}
        </div>
    )
}

export default Color
