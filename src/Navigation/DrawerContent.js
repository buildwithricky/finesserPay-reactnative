import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
}
from "@react-navigation/drawer"
import { useGlobalContext } from "../context/Provider";
import {drawerIcons} from "../utils/icons"
import {fonts,fontSizes} from "../utils/utils"
import {View,Image,Text,TouchableNativeFeedback,Platform} from "react-native"

const data = [
    {
        label:"Projects",
        icon :drawerIcons.projects,
        id:"19309532"
    },
       {
        label:"Portfolio",
        icon :drawerIcons.portfolio,
        id:"1933292"
    },
       {
        label:"Invoicing",
        icon :drawerIcons.invoicing,
        id:"1309245"
    },
       {
        label:"Legal",
        icon :drawerIcons.legal,
        id:"193092"
    },
       {
        label:"Academy",
        icon :drawerIcons.academy,
        id:"193092775"
    },
       {
        label:"Settings",
        icon :drawerIcons.settings,
        id:"19309232"
    }
]

function Icon ({icon})
{
     
return(
    <View style={{
        
      
    }}>
        <Image source={icon}/>
        </View>
    
)
}
function CustomDrawerContent({navigation,...props}) {
    const { signOut, dispatch, globalState } = useGlobalContext();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem   style={{

          width:40,
           marginVertical:"auto",
    marginTop:62,
    
    marginBottom:58.45,
    paddingHorizontal:"auto",
        textAlign:"center"
      }} label={()=>  Platform.os === "ios" ? <TouchableOpacity activeOpacity={.9} 
       onPress={() => navigation.closeDrawer()}
      >
          
          <Icon icon={drawerIcons.close}/>
      </TouchableOpacity>
      :
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#EEF",false)}><Icon icon={drawerIcons.close}/></TouchableNativeFeedback>}
       onPress={() => navigation.closeDrawer()}/>
          
    
    

     {data.map((item)=>{  
       return(
             <DrawerItem key={item.id} label={()=> <Text>{item.label}</Text>} 
      labelStyle={
          {
              fontSize:fontSizes.ssm,
              lineHeight:22.5,
              textAlign:"center",
              padding:0,
              margin:0,
              color:"#1C1C1C",
              fontFamily:fonts.semiBold,
              
             
          }
      }
      
      style={{
          paddingHorizontal:15,
          marginHorizontal:1,
         
      }}
      icon={()=> <Icon icon={item.icon}/>}
      /> 
       )
     })}
          <DrawerItem label={()=> <Text>Logout</Text>} 
           onPress={() => signOut()}
      labelStyle={
          {
              fontSize:fontSizes.ssm,
              lineHeight:22.5,
              textAlign:"center",
              padding:0,
              margin:0,
              color:"#1C1C1C",
              fontFamily:fonts.semiBold,
              
              
             
          }
      }
      style={{
          paddingHorizontal:15,
          marginHorizontal:1,
            marginTop:62
          
         
      }}
      icon={()=> <Icon icon={drawerIcons.logout}/>}
      /> 
 
 
    
    
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent