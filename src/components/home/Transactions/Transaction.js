import React from "react"
import {Text,View,StyleSheet} from "react-native"
import {fonts,fontSizes,colors} from "../../../utils/utils"

const Transaction = ({description,amount,date})=>{
    return(
        <View style={styles.container}>
            <View style={styles.imagebox}>
                
            </View>
           <View style={styles.description}>
                <Text style={styles.descriptionText}>
              Ticket for Tems Concert {description}
            </Text>
              <Text style={styles.descriptionDate}>
              Sun, Jan 16, 2021  7:30pm {date}
            </Text>
           </View>
           <View style={styles.amount}>
              <Text style={styles.amountText}> {amount}100000</Text>
           </View>
           
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({
    container:{
        
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:10
      
    },
    imagebox:{
        height:43,
        width:43,
       borderRadius:10,
        backgroundColor:"#ffffff",
        marginRight:7
    },
    description:{
       flex:1,
      
         
    },
    descriptionText:{
       
        fontFamily:fonts.medium,
fontSize: 12,
lineHeight: 15,
    },
    descriptionDate:{
                fontFamily:fonts.regular,
fontSize: 9,
lineHeight: 11.25,
    },
    amount:{

       
        alignItems:"flex-end"
    },
    amountText:{
         
        fontFamily:fonts.medium,
fontSize: 12,
lineHeight: 15,
    }
})