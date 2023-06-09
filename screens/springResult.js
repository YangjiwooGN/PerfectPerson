import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 봄 웜톤 결과화면
const SpringResult=()=>{
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.resultContainaer}>
                  <Text style={styles.title}>RESULT : 검사결과</Text>
                  <Text style={styles.resultMent1}>당신의 퍼스널 컬러는</Text>
                  <View style={styles.colorContainer}>
                    <Text style={styles.resultMent2}>봄 웜톤 </Text>  
                    <Text style={styles.resultMent3}>입니다</Text>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image style={styles.mainImage} source={require("./assets/spring.png")} />
                </View>
                <View style={styles.charTextContainer}>
                  <Text style={styles.char1}>#화사함</Text>
                  <Text style={styles.char2}>#귀여움</Text>
                  <Text style={styles.char3}>#상큼함</Text>
                </View>
                </View>
                <View style={styles.explainContainer}>
                  <Text style={styles.explain1}> ◎ 봄 타입의 컬러 이미지는 밝고, 화사한 {'\n'}   느낌을 주며, 생동감을 주어 동안의 느낌을 {'\n'}   줍니다. {'\n'}</Text>
                  <Text style={styles.explain1}> ◎ 봄 웜톤은 기본적으로 노란색이 가미된 {'\n'}   선명한 원색과 중간색인 베이지 컬러, 피치색 {'\n'}   등 밝고 산뜻한 색상이 잘 어울립니다. </Text>
                  <Text style={styles.explain1}>{'\n'}◎ 흰 빛과 푸른 빛이 도는 차가운 톤과 {'\n'}   무겁고 칙칙하게 보이는 톤의 컬러는 {'\n'}   피하시는 걸 추천드립니다. </Text>
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
export default SpringResult;

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
        color:"#ff99ff"
      }, 
      resultMent3: {
        fontSize:22, 
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
        backgroundColor:"#ff6633", 
        marginRight:10, 
        padding:3,
        fontSize:15, 
        color:"#ffffff", 
      }, 
      char2:{
        backgroundColor:"#ffcc00", 
        padding:3,
        fontSize:15, 
        marginRight:10, 
        color:"#ffffff"
      }, 
      char3:{
        backgroundColor:"#00ff00",
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
        color:"#ff00ff", 
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
