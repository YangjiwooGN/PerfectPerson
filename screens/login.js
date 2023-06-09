import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';

const db = SQLite.openDatabase('member.db');

const Login=()=>{
  const navigation=useNavigation()
  const mainImage=require("./assets/loading.png")
  
  const [text1, setText1] = React.useState('')
  const [text2, setText2] = React.useState('')

// 로그인 성공 여부 확인
  const handleLogin = () => {
    if(text1.length == 0 || text2.length == 0){
      console.warn('빈칸이 있습니다.');
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE id = ? AND pw = ?', 
        [text1, text2], 
        (_, {rows}) => {
          if(rows.length > 0){
            console.log('로그인 성공. ');
            //로그인 성공하면 메인메뉴 화면으로 이동
            navigation.navigate("MainMenu",{screen:'MainMenu'});
          }else{
            console.log('로그인 실패. ');
            console.warn('아이디 또는 비밀번호가 일치하지 않습니다. ')
          }
        },
        error => {
          console.log('로그인 오류. ');
        } 
      )
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <View style={styles.backButtonContainer}>
      <TouchableOpacity 
        onPress={()=>navigation.navigate("Home",{screen:'Home'})}
        style={styles.button}>
          <Text style={styles.buttonText}>Back(뒤로가기)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
      <Image style={styles.mainImage} source={require("./assets/loading.png")} />
      </View>
        <Text style={styles.desc01}>회원 로그인</Text>
        <View style={styles.textContainer2}>
        <Text style={styles.idin}>아이디 : </Text>
        <TextInput 
        style={styles.id}
        returnKeyType={'next'}
        placeholder='USER ID'
        value={text1}
        onChangeText={text1 => setText1(text1)}
        />
        <Text style={styles.pwin}>비밀번호 : </Text>
        <TextInput 
        style={styles.pw}
        returnKeyType={'done'}
        secureTextEntry={true}
        placeholder='PASSWORD'
        value={text2}
        onChangeText={text2 => setText2(text2)}
        />
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={handleLogin}
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
    </View>
  );
}
export default Login;


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
  }, 
  backButtonContainer: {
    // flex:1,
    // flexDirection:'row',
    marginTop:0
  },
  button: {
    //backgroundColor:"#fff",
    left:20,
    top:10,
    padding:10, 
    borderRadius:15,
    marginBottom:20
  }, 
  buttonText: {
    color:"#000000", 
    fontSize:15, 
    fontWeight:"700"
  },
  imageContainer: {
    justifyContent:"center", 
    alignItems:"center"
  },
  mainImage: {
    width:150, 
    height:150, 
    borderRadius:30,
    marginTop:20
  },
  desc01: {
    textAlign:"center", 
    fontSize:25, 
    fontWeight:"900",
    color:"#0033ff", 
    paddingLeft:22, 
    paddingRight:22,
    marginTop:20
  }, 
  textContainer2: {
    flex:1,
    justifyContent:"center", 
    alignItems:"center"
  },
  idin: {
    textAlign:"center",
    fontSize:15, 
    fontWeight:"700", 
    padding:12, 
    marginTop:50
  }, 
  id: {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    marginBottom:10,
    width:150,
    textAlign:"center",
  },
  pwin: {
    textAlign:"center",
    fontSize:15, 
    fontWeight:"700", 
    padding:12
  }, 
  pw: {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    marginBottom:15,
    width:150,
    textAlign:"center",
  },
  buttonContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:"center", 
    alignItems: 'center',
    marginTop:20
  },
  button1: {
    backgroundColor:"red",
    padding:10, 
    borderRadius:15, 
    marginTop:15,
    marginBottom:60, 
    marginRight:10
  }, 
  button1Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  }, 
  button2: {
    backgroundColor:"red",
    padding:10, 
    borderRadius:15, 
    marginTop:15,
    marginBottom:60
  }, 
  button2Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  }
});
