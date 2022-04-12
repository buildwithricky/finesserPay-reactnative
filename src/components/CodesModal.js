import React,{useState} from 'react';

import {Modal,FlatList,Text,TouchableWithoutFeedback,Dimensions,View,Image,TouchableOpacity} from "react-native"

const {height,width}  = Dimensions.get('screen')


     
 
    


export const CodesModal = ({data,setSelectedArea,isModalOpen,setIsModalOpen})=>{
  const renderItem = ({item})=>{
        return(
         <TouchableOpacity
            style={{flexDirection:'row',marginBottom:10}}
            onPress={()=>{
                setSelectedArea(item)
                setIsModalOpen(false)
            }} >
                <Image source ={item.flag} style={{
                    width:30,
                    height:30,
                    marginRight: 10,
                    resizeMode:'contain'
                    
                }}/>
                <Text style={{fontSize:14}}>
                    {item.name}
                    
                </Text>
                </TouchableOpacity>
)   

  }
  
  return(
      <Modal
            animationType="slide"
            transparent={true}
            visible={isModalOpen}
        
            >
                <TouchableWithoutFeedback onPress = {(()=>setIsModalOpen(false))}>
                    <View style={{
                        flex:1,alignItems:'center',justifyContent:'center'
                    }}>
                    <View style={{
                    height:200,
                    width:width*0.8,
                    backgroundColor: "#FFFFFF",
                    borderRadius:10
                    }}>
                        <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor ={(item)=> item.id}
                        showsVerticalScrollIndicator={false}
                        style= {{
                            padding:10,
                            marginBottom:10
                        }}
                        />
                            
                        
                    </View>

                    </View>
                </TouchableWithoutFeedback>
        </Modal>
  ) 
}






