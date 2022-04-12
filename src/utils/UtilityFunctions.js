


const renderAreaCodes=()=>{
  
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            >
                <TouchableWithoutFeedBack>
                    <View style={{
                    height:400,
                    width:SIZES.width*0.8,
                    backgroundColor: COLO;
                    borderRadius:SIZES.RADIUS
                    }}>
                        <FlatList
                        data={areas}
                        renderItem={renderItem}
                        keyExtractor = {((item)=> item.code)}
                        showsVerticalScrollIndicator={false}
                        style= {{
                            padding:SIZES.padding *2,
                            marginBottom:Sizes.padding *2
                        }}
                        />
                            
                        
                    </View>
                </TouchableWithoutFeedBack>
        </Modal>
    )
}

const getCountryCodes = ()=>{
    
    useEffect(() => {
        fetch("https://restcountries.eu//rest/v2/all").then(respons=>response.json()).then(data=>{
            data=> {
                let areaData = data.map(item=>{
                    return{
                        code:item.alpha2Code,
                        name:item.name,
                        callingCode :`+${item.callingCode[0]}`,
                        flag: `https://www.countryFlags.io/${item.alpha2Code}/flat/64.png`
                    }
                })
                
                setArea(areaData)
                
                if(areaData.length > 0) {
                    let defaultData  =  areaData.filter(a => a.code == "US")
                }
                if(defaultData.length > 0) {
                   setSelectedArea(defaultData)
                }
            
            }
        })
        return () => {
            cleanup
        }
    }, [input])
    
} 



const renderAreaCodesModal()