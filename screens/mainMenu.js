import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainMenu=()=>{
  const navigation=useNavigation()
  const mainImage=require("./assets/loading.png")
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Image style={styles.mainImage} source={require("./assets/loading.png")} />
        <Text style={styles.desc01}>Perfect Person</Text>
        <Text style={styles.desc02}>퍼스널 컬러 자가 진단을 통해 </Text>
        <Text style={styles.desc03}>자신에게 맞는 색을 직접 찾아보세요!</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Examination01",{screen:'Examination01'})} 
        style={styles.button1}>
          <Text style={styles.button1Text}>퍼스널 컬러 자가 진단</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Guide",{screen:'Guide'})} 
        style={styles.button2}>
          <Text style={styles.button2Text}>도움말</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Home", {screen:'Home'})}
        style={styles.button3}>
          <Text style={styles.button3Text}>로그아웃</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F266A',
    justifyContent:"center", 
    alignItems: 'center',
  },
  textContainer: {
    width:300, 
    height:600,
    backgroundColor:"#fff",
    marginTop:120,
    marginBottom:120,
    borderRadius:30,
    justifyContent:"center", 
    alignItems:"center"
  }, 
  mainImage: {
    width:200, 
    height:200, 
    borderRadius:30,
    marginTop:40
  },
  desc01: {
    textAlign:"center", 
    fontSize:25, 
    fontWeight:"700", 
    color:"#660099",
    paddingLeft:22, 
    paddingRight:22,
    marginTop:10
  }, 
  desc02: {
    textAlign:"center", 
    fontSize:15, 
    fontWeight:"700", 
    paddingLeft:22, 
    paddingRight:22,
    marginTop:20
  }, 
  desc03: {
    textAlign:"center",
    fontSize:15, 
    fontWeight:"700", 
    padding:5
  }, 
  buttonContainer: {
    flex:1,
    flexDirection:'column',
    justifyContent:"center", 
    alignItems: 'center',
    marginTop:10
  },
  button1: {
    backgroundColor:"#0099ff",
    padding:10, 
    borderRadius:15, 
    marginTop:15,
    marginBottom:10, 
    marginRight:10
  }, 
  button1Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  }, 
  button2: {
    backgroundColor:"#0099ff",
    padding:10, 
    borderRadius:15, 
    marginTop:15,
    marginBottom:10
  }, 
  button2Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  },
  button3: {
    backgroundColor:"#0099ff",
    padding:10, 
    borderRadius:15, 
    marginTop:15,
    marginBottom:60
  }, 
  button3Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  }
});
