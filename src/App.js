import React from 'react';
import { SafeAreaView,View,Text , FlatList,Image, StyleSheet, ScrollView, Dimensions, TextInput} from 'react-native'
import products_data from './products.json'
import ProductsCard from './components/Card';
function App(){


  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.patika_title}> PATIKASTORE </Text>
        <TextInput style={styles.text_input}  placeholder='Ara...' placeholderTextColor={'black'} ></TextInput>
      </View>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) =>item.id}
        data={products_data}
        renderItem={({item}) => <ProductsCard products={item}/>}
      />
     
    </SafeAreaView>  )
   
}

export default App;

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  patika_title:{
    marginTop:10,
    color:'purple',
    fontSize:35,
    fontWeight:'bold',

  },
  text_input:{
    width:Dimensions.get("window").width - 10,
    height:Dimensions.get("window").height/15,
    backgroundColor:'#f1f1f1',
    borderWidth:1,
    borderColor:'#f1f1f1',
    borderRadius:10,
    margin:10,
    marginLeft:5,
    marginRight:5,
    
  }
})
