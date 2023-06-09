import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 가을 웜톤 결과화면
const AutumnResult=()=>{
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.resultContainaer}>
                  <Text style={styles.title}>RESULT : 검사결과</Text>
                  <Text style={styles.resultMent1}>당신의 퍼스널 컬러는</Text>
                  <View style={styles.colorContainer}>
                    <Text style={styles.resultMent2}>가을 웜톤 </Text>  
                    <Text style={styles.resultMent3}>입니다</Text>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image style={styles.mainImage} source={require("./assets/autumn.png")} />
                </View>
                <View style={styles.charTextContainer}>
                  <Text style={styles.char1}>#고급스러움</Text>
                  <Text style={styles.char2}>#차분함</Text>
                  <Text style={styles.char3}>#지적임</Text>
                </View>
                </View>
                <View style={styles.explainContainer}>
                  <Text style={styles.explain1}> ◎ 가을 타입의 컬러 이미지는 따뜻하고, {'\n'}   편안한 느낌을 주며, 부드럽고 자연스러운 {'\n'}   느낌을 줍니다. {'\n'}</Text>
                  <Text style={styles.explain1}> ◎ 가을 웜톤은 기본적으로 따뜻한 톤에 {'\n'}   황토색 빛을 지닌 색, 자연스럽고 차분한 {'\n'}   골드 컬러, 카멜색 등이 주를 이룹니다. </Text>
                  <Text style={styles.explain1}>{'\n'}◎ 쿨톤계열의 색과 지나치게 선명한 색 또는 {'\n'}   은색, 지나치게 밝은 색은 피하시는 걸 {'\n'}   추천드립니다. </Text>
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
export default AutumnResult;

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
        color:"#ff6600"
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
        backgroundColor:"#333333", 
        marginRight:10, 
        padding:3,
        fontSize:15, 
        color:"#ffffff", 
      }, 
      char2:{
        backgroundColor:"#00cc00", 
        padding:3,
        fontSize:15, 
        marginRight:10, 
        color:"#ffffff"
      }, 
      char3:{
        backgroundColor:"#996633",
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
        color:"#ff6633", 
        fontWeight:"700"
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
