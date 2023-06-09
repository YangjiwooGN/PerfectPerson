import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//여름 쿨톤 결과화면
const SummerResult=()=>{
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.resultContainaer}>
                  <Text style={styles.title}>RESULT : 검사결과</Text>
                  <Text style={styles.resultMent1}>당신의 퍼스널 컬러는</Text>
                  <View style={styles.colorContainer}>
                    <Text style={styles.resultMent2}>여름 쿨톤 </Text>  
                    <Text style={styles.resultMent3}>입니다</Text>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image style={styles.mainImage} source={require("./assets/summer.png")} />
                </View>
                <View style={styles.charTextContainer}>
                  <Text style={styles.char1}>#시원함</Text>
                  <Text style={styles.char2}>#시크함</Text>
                  <Text style={styles.char3}>#세련됨</Text>
                </View>
                </View>
                <View style={styles.explainContainer}>
                  <Text style={styles.explain1}> ◎ 여름 타입의 컬러 이미지는 다소 차가우면서 {'\n'}   밝고, 여성스러운 이미지입니다. {'\n'}</Text>
                  <Text style={styles.explain1}> ◎ 여름 쿨톤은 기본적으로 흰빛을 띈 색상이 {'\n'}   잘 어울리며, 부드럽고 차가운 느낌의 핑크색, {'\n'}   색상이 튀지 않는 그레이가 섞인 블루 계열이 {'\n'}   주를 이룹니다. </Text>
                  <Text style={styles.explain1}>{'\n'}◎ 오렌지 컬러 등 노란색이 섞인 컬러, {'\n'}   지나치게 어두운 검은색이 많이 섞인 컬러는 {'\n'}   피하시는 걸 추천드립니다. </Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    onPress={()=>navigation.navigate("Examination01",{screen:'Examination01'})} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>다시하기</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>navigation.navigate("MainMenu",{screen:'MainMenu'})} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>메인화면</Text>
                  </TouchableOpacity>
                </View>
                
            </View>
        </View>
  );
}
export default SummerResult;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#1F266A',
        justifyContent: "center", 
        alignItems: "center"
    }, 
    textContainer: {
        width:300, 
        height:600,
        backgroundColor:"#fff",
        marginTop:120,
        marginBottom:120,
        borderRadius:30,
    },
    resultContainaer: {
        justifyContent:"center", 
        alignItems: 'center'
      }, 
      title: {
        textAlign:"center", 
        fontSize:22, 
        fontWeight:"700", 
        color:"#0000ff",
        paddingLeft:22, 
        paddingRight:22,
        marginTop:20
        //marginBottom:5
      }, 
      resultMent1: {
        fontSize:18,
        marginTop:20, 
        fontWeight:"500"
      }, 
      colorContainer:{
        flexDirection: 'row',
        marginTop:5
      },
      resultMent2: {
        fontSize:22, 
        fontWeight:"700", 
        color:"#3366ff"
      }, 
      resultMent3: {
        fontSize:20, 
        fontWeight:"700"
      }, 
      mainImage: {
        width:200, 
        height:150, 
        borderRadius:30,
        marginTop:10
      },
      imageContainer: {
        justifyContent:"center", 
        alignItems: 'center'
      }, 
      charTextContainer:{
        flexDirection: 'row', 
        marginTop:8
      }, 
      char1:{
        backgroundColor:"#0099ff", 
        marginRight:10, 
        padding:3,
        fontSize:15, 
        color:"#ffffff", 
      }, 
      char2:{
        backgroundColor:"#ff6600", 
        padding:3,
        fontSize:15, 
        marginRight:10, 
        color:"#ffffff"
      }, 
      char3:{
        backgroundColor:"#ffcc00",
        padding:3,
        fontSize:15, 
        color:"#ffffff"
      }, 
      explainContainer: {
        backgroundColor:"#ffffff", 
        marginTop:25, 
        marginLeft:20, 
        marginRight:20
      }, 
      explain1: {
        color:"#0066ff", 
        fontWeight:"600"
      }, 
      buttonContainer:{
        flexDirection:"row",
        justifyContent:"center", 
        alignItems: 'center', 
        marginTop:10
      }, 
      button:{
        backgroundColor:"#9933ff", 
        margin:15, 
        borderRadius:15, 
        padding:12
      }, 
      buttonText:{
        fontSize:15, 
        color:"#ffffff"
      }
});
