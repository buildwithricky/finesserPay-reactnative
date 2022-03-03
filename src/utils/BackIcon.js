import React from "react"
import {Image} from "react-native"

import icon from '../../assets/back.png'

const BackIcon = ({height,width})=>{
    return(
        <Image
       source={icon} 
       style={{height:height,width:width}}
        />
    )
}


export default BackIcon