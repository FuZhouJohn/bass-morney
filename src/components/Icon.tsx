import React from "react";
import styled from "styled-components";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

interface Props{
    name:string
    size?:string
}

function Icon(props:Props){
    const Svg = styled.svg`
      font-size: ${ props.size || '32px' }  ;
    `
    return (
        <Svg className='icon' >
            <use xlinkHref={`#${props.name}`}/>
        </Svg>
    )
}

export default Icon
