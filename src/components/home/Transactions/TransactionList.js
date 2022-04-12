import {View,Text,StyleSheet} from "react-native"
import React from "react"
import {fonts,fontSizes,colors} from "../../../utils/utils"
import Transaction from "./Transaction"

const TransactionList = ()=>{
    return (
        <View style={styles.container}>
            
            {/* header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>
                   Transaction History 
                </Text>
                 <Text  style={styles.headerSmall}>
                   see all
                </Text>
            </View>
            
            <View>
                <Transaction/>
                 <Transaction/>
                  <Transaction/>
                   <Transaction/>
            </View>
        </View>
    )
    
}

export default TransactionList


const styles =StyleSheet.create({
    container:{
        padding:29,
        height:307,
        backgroundColor:"#F9F9F9",
       marginTop:31,
       borderTopRightRadius:30,
        borderTopLeftRadius:30
        
    },
    header:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:18
        
    },
    headerText:{
        marginRight:"auto",
        fontFamily:fonts.bold,
        fontSize:fontSizes.ssm,       
lineHeight:22.5,
color:colors.accent
    },
    headerSmall:{
             
        fontFamily:fonts.medium,
        fontSize:fontSizes.xs-2,       
lineHeight:12.5,
color:colors.accent
    }
})