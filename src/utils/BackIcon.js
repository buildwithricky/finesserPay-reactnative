import React from "react"
import {Image,SafeAreaView} from "react-native"

import icon from '../../assets/back.png'

const BackIcon = ({height,width})=>{
    return(
        <SafeAreaView>
            <Image
           source={icon} 
           style={{height:height,width:width,resizeMode:'contain'}}
            />

        </SafeAreaView>
    )
}


export default BackIcon