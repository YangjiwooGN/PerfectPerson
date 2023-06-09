import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('member.db');
// db에 테이블 생성
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (name TEXT NOT NULL, id TEXT NOT NULL, pw TEXT NOT NULL)'
  );
});
// 회원가입
const Signup=()=>{
  const [text_username, setText1] = React.useState('')
  const [text_id, setText2] = React.useState('')
  const [text_pw, setText3] = React.useState('')
  const [text_pw_confirm, setText4] = React.useState('')

  // 회원가입 성공 여부 확인
  const handleSignUp = () => {

    if((text_pw != text_pw_confirm)
      || (text_username.length == 0)
      || (text_id.length == 0)
      || (text_pw.length == 0)
      || (text_pw_confirm.length == 0)){
        console.warn('빈칸이 있거나 비밀번호가 같지 않습니다.');
        return;
      }
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (name, id, pw) values (?, ?, ?)',
        [text_username, text_id, text_pw], 
        (txObj, resultSet) => {
          console.log('회원가입 성공:', resultSet);
        }, 
        (txObj, error) => {
          console.log('회원가입 실패:', error);
        }
      );
    });
    // 회원가입 성공하면 다시 홈으로 이동
    navigation.navigate("Home",{screen:'Home'});
  };
  const navigation=useNavigation()
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
        <Text style={styles.desc01}>회원가입</Text>
        <View style={styles.textContainer2}>
        <Text style={styles.namein}>이름 : </Text>
        <TextInput 
        style={styles.name}
        returnKeyType={'next'}
        placeholder='NAME'
        value={text_username}
        onChangeText={text_username => setText1(text_username)}
        />
        <Text style={styles.idin}>아이디 : </Text>
        <TextInput 
        style={styles.id}
        returnKeyType={'next'}
        placeholder='USER ID'
        value={text_id}
        onChangeText={text_id => setText2(text_id)}
        />
        <Text style={styles.pwin}>비밀번호 : </Text>
        <TextInput 
        style={styles.pw}
        returnKeyType={'next'}
        secureTextEntry={true}
        placeholder='PASSWORD'
        value={text_pw}
        onChangeText={text_pw => setText3(text_pw)}
        />
        <Text style={styles.pwcin}>비밀번호 확인 : </Text>
        <TextInput 
        style={styles.pwc}
        returnKeyType={'next'}
        secureTextEntry={true} 
        placeholder='PW CHECK'
        value={text_pw_confirm}
        onChangeText={text_pw_confirm => setText4(text_pw_confirm)}
        />
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={handleSignUp}
        style={styles.button1}>
          <Text style={styles.button1Text}>회원가입</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );


}
export default Signup;

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
    // justifyContent:"center", 
    // alignItems:"center"
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
  desc01: {
    textAlign:"center", 
    fontSize:25, 
    fontWeight:"900", 
    color:"#0033ff",
    paddingLeft:22, 
    paddingRight:22,
    marginTop:10,
    marginBottom:100
  }, 
  textContainer2: {
    flex:1,
    justifyContent:"center", 
    alignItems:"center", 
  },
  namein: {
    textAlign:"center",
    fontSize:15, 
    fontWeight:"700", 
    padding:12, 
    marginTop:70
  }, 
  name: {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    marginBottom:10,
    width:150,
    textAlign:"center",
  },
  idin: {
    textAlign:"center",
    fontSize:15, 
    fontWeight:"700", 
    padding:12
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
  pwcin: {
    textAlign:"center",
    fontSize:15, 
    fontWeight:"700", 
    padding:12
  }, 
  pwc: {
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
    marginTop:150
  },
  button1: {
    backgroundColor:"red",
    padding:10, 
    borderRadius:15, 
  }, 
  button1Text: {
    color:"#fff", 
    fontSize:15, 
    fontWeight:"700"
  }
});
