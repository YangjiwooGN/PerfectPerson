import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//프로그램(검사)에 관한 설명 명시
const Guide=()=>{
  const navigation=useNavigation()
  const mainImage=require("./assets/colorguide.png")
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
        onPress={()=>navigation.navigate("MainMenu",{screen:'MainMenu'})}
        style={styles.button}>
          <Text style={styles.buttonText}>Back(뒤로가기)</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.desc01}>Perfect Person</Text>
        <Text style={styles.desc02}>퍼스널 컬러 자가진단 프로그램</Text>
        <Text style={styles.desc03}>
          퍼스널 컬러 자가진단 프로그램은 {'\n'} 자신에게 어울리는 색을 찾고 싶거나 
          {'\n'} 진단 받은 퍼스널 컬러가 맞지 않다고 생각될 때 {'\n'} 사용할 수 있는 유용한 프로그램입니다.
        </Text>
        <View style={styles.imageContainer}>
        <Image style={styles.mainImage} source={require("./assets/colorguide.png")} />
        </View>
        <Text style={styles.desc03}>
          본 검사는 STEP 1~3의 세 단계로 이루어집니다. {'\n'}STEP 1에서는 검사의 바탕이 될 {'\n'}얼굴 사진을 촬영하고, {'\n'}
          STEP 2에서 자신에게 맞는 것 같은 {'\n'}색깔을 선택하는 과정을 거쳐서, {'\n'}STEP 3를 통해 결과를 도출하게 됩니다. 
        </Text>
        <Text style={styles.desc03}>
          전문가들의 데이터를 기반으로 판단한 결과 {'\n'}오전 8시 ~ 오후 5시 사이가 피부색을 정확하게 {'\n'}판단할 수 있는 것을 알 수 있었습니다. {'\n\n'} 
          그럼으로 검사를 진행하실 때 위 시간을 {'\n'}이용하시는 것을 추천드립니다. {'\n\n'}
        </Text>
      </View>
    </View>
  );
}
export default Guide;

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
    borderRadius:30
  },
  buttonContainer: {
    flex:1,
    flexDirection:'row',
    marginTop:0
  },
  button: {
    backgroundColor:"#fff",
    left:20,
    top:10,
    padding:10, 
    borderRadius:15
  }, 
  buttonText: {
    color:"#000000", 
    fontSize:15, 
    fontWeight:"700"
  },
  desc01: {
    textAlign:"center", 
    fontSize:25, 
    fontWeight:"700", 
    color:"#660099",
    paddingLeft:22, 
    paddingRight:22, 
    marginBottom:5
  }, 
  desc02: {
    textAlign:"center", 
    fontSize:17, 
    color:"#000000", 
  }, 
  desc03: {
    marginTop:20, 
    fontSize:13, 
    textAlign:"center", 
    fontWeight:"600", 
    color:"#660099"
  }, 
  mainImage: {
    width:130, 
    height:130, 
    borderRadius:30,
    marginTop:10
  },
  imageContainer: {
    justifyContent:"center", 
    alignItems: 'center'
  }
});
