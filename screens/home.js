import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home=()=>{
  const navigation=useNavigation()
  const mainImage=require("./assets/loading.png")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>나에게 어울리는 컬러는?</Text>
      
      <View style={styles.textContainer}>
        <Image style={styles.mainImage} source={require("./assets/loading.png")} />
        <Text style={styles.appname}>Perfect Person</Text>
        <Text style={styles.desc01}>퍼스널 컬러 자가진단 프로그램</Text>
        <Text style={styles.desc02}>자신에게 맞는 색을 직접 찾아보세요!</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Login",{screen:'Login'})} 
        style={styles.button1}>
          <Text style={styles.button1Text}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Signup",{screen:'Signup'})} 
        style={styles.button2}>
          <Text style={styles.button2Text}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F266A',
    justifyContent:"center", 
    alignItems: 'center'
  },
  title: {
    fontSize:30, 
    fontWeight:"700", 
    color:"#fff", 
    paddingLeft:30, 
    paddingTop:10, 
    paddingRight:30
  }, 
  textContainer: {
    width:300, 
    height:550,
    backgroundColor:"#fff",
    marginTop:40,
    borderRadius:30,
    justifyContent:"center", 
    alignItems:"center"
  }, 
  mainImage: {
    width:150, 
    height:150, 
    borderRadius:30,
    marginBottom:10
  },
  appname: {
    textAlign:"center", 
    fontSize:25, 
    fontWeight:"700", 
    color:"#660099",
    paddingLeft:22, 
    paddingRight:22,
    marginTop:10
  },
  desc01: {
    textAlign:"center", 
    fontSize:19, 
    fontWeight:"700", 
    paddingLeft:22, 
    paddingRight:22,
    marginTop:20
  }, 
  desc02: {
    textAlign:"center",
    fontSize:15, 
    fontWeight:"700", 
    padding:22
  }, 
  button1: {
    backgroundColor:"red",
    padding:12, 
    borderRadius:15, 
    marginTop:10
  }, 
  button1Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  }, 
  button2: {
    backgroundColor:"red",
    padding:12, 
    borderRadius:15, 
    marginTop:20
  }, 
  button2Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  }
});
