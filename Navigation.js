import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Home from './screens/home';
import Login from './screens/login';
import Signup from './screens/signup';
import MainMenu from './screens/mainMenu';
import Guide from './screens/guide';
import Examination01 from './screens/examination01';
import Examination02 from './screens/examination02';
import SpringResult from './screens/springResult';
import SummerResult from './screens/summerResult';
import AutumnResult from './screens/autumnResult';
import WinterResult from './screens/winterResult';

//스크린 전환을 위한 네비게이터 생성
const Stack=createStackNavigator();

function StackScreen(){
    return(
        <Stack.Navigator 
        initialRouteName="Home"
        >
          <Stack.Screen 
          options={{headerShown:false}}
          name="Home" component={Home}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="Login" component={Login}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="Signup" component={Signup}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="MainMenu" component={MainMenu}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="Guide" component={Guide}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="Examination01" component={Examination01}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="Examination02" component={Examination02}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="SpringResult" component={SpringResult}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="SummerResult" component={SummerResult}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="AutumnResult" component={AutumnResult}/>
          <Stack.Screen 
          options={{headerShown:false}}
          name="WinterResult" component={WinterResult}/>
          
        </Stack.Navigator>
        
    )
}

function Navigation() {
    return (
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    );
  }
  
  export default Navigation;