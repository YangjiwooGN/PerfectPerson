import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//각 특징에 대한 색 배열 초기화

const warm = [
  "#9932cc", "#0000cd", "#008b8b"
];
const cool = [
  "#00ff00", "#008000", "#00ffff"
];
const spring = [
  "#da70d6", "#8b008b", "#20b2aa", "#228b22", "#7fff00",
  "#f9cac6", "#bdfcc9", "#e6e6fa", "#ffdab9", "#ffff99", "#90ee90",
];
const summer = [
  "#3cb371", "#ff7f00", "#fa8072", "#40e0d0", "#ff6f61",
  "#ffc72c", "#7fffd4", "#ffa500", "#7cf9ff", "#ffcdcd", "#daa520"
];
const autumn = [
  "#8b0000", "#4b0082", "#6495ed", "#b7410e","#ffdb58", 
  "#808000", "#e2725b", "#a6171e", "#e97451", "#800020", "#3d1c02"
];
const winter = [
  "#ffffff", "#000000", "#c0c0c0", "#800000", "#000080",
  "#9400d3", "#00fa9a", "#4682b4", "#b0e0e6", "#8e4585", "#045d56",
];

// 검사의 각 단계에 쓰일 색 배열 생성
const colors1 = ["#9932cc", "#00ff00"];
const colors2 = ["#0000cd", "#008000"];
const colors3 = ["#008b8b", "#00ffff"];
const colors4 = ["#da70d6", "#3cb371", "#4b0082", "#ffffff"];
const colors5 = ["#8b008b", "#ff7f00", "#8b0000", "#000000"];
const colors6 = ["#20b2aa", "#fa8072", "#6495ed", "#c0c0c0"];
const colors7 = ["#228b22", "#40e0d0", "#b7410e", "#800000"];
const colors8 = ["#7fff00", "#ff6f61", "#ffdb58", "#000080"];
const colors9 = ["#f9cac6", "#ffc72c", "#808000", "#9400d3"];
const colors10 = ["#bdfcc9", "#7fffd4", "#e2725b", "#00fa9a"];
const colors11 = ["#e6e6fa", "#ffa500", "#a6171e", "#4682b4"];
const colors12 = ["#ffdab9", "#7cf9ff", "#e97451", "#b0e0e6"];
const colors13 = ["#ffff99", "#ffcdcd", "#800020", "#8e4585"];
const colors14 = ["#90ee90", "#daa520", "#3d1c02", "#045d56"];

const initialColorIndex = 0;   
let spring_cnt = 0;
let summer_cnt = 0;
let autumn_cnt = 0;
let winter_cnt = 0;    

// 검사화면 2 (검사)
export default function Examination02({route}){
    const navigation=useNavigation()
    const {photo} = route.params;
    const [currentColor1Index, setCurrentColor1Index] = useState(initialColorIndex);
    const [currentColor2Index, setCurrentColor2Index] = useState(initialColorIndex);
    const [currentColor3Index, setCurrentColor3Index] = useState(initialColorIndex);
    const [currentColor4Index, setCurrentColor4Index] = useState(initialColorIndex);
    const [currentColor5Index, setCurrentColor5Index] = useState(initialColorIndex);
    const [currentColor6Index, setCurrentColor6Index] = useState(initialColorIndex);
    const [currentColor7Index, setCurrentColor7Index] = useState(initialColorIndex);
    const [currentColor8Index, setCurrentColor8Index] = useState(initialColorIndex);
    const [currentColor9Index, setCurrentColor9Index] = useState(initialColorIndex);
    const [currentColor10Index, setCurrentColor10Index] = useState(initialColorIndex);
    const [currentColor11Index, setCurrentColor11Index] = useState(initialColorIndex);
    const [currentColor12Index, setCurrentColor12Index] = useState(initialColorIndex);
    const [currentColor13Index, setCurrentColor13Index] = useState(initialColorIndex);
    const [currentColor14Index, setCurrentColor14Index] = useState(initialColorIndex);
    const [correntView, setCorrentView] = useState('startView');
    const [displayView, setDisplayView] = useState('');

    // 검사를 시작하기 전 뷰 생성
    const StartView = ({goToView1}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 1</Text>
                        <Text style={styles.titleName}>얼굴 촬영</Text>
                    </View>
                    <View style={styles.photoShowContainer}>
                      <Text style={styles.checkText}>      검사를 진행하기 전에 {'\n'} 캡쳐한 사진을 확인해주세요!</Text>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photoCheck}
                        />
                        <Text style={styles.checkText}>  ◎ 검사를 진행하는 동안 {'\n'}    위 사진이 사용됩니다. </Text>
                        <Text style={styles.checkText}>  ◎ 검사 도중 사진을 변경할 수 없으니 {'\n'}        신중히 결정해주시길 바랍니다! </Text>
                        <TouchableOpacity style={styles.choiceButton} onPress={goToView1}>
              <Text style={styles.choiceButtonText}>검사 시작</Text>
          </TouchableOpacity>
                    </View>
          </View>
    );

    // 검사 진행 뷰(1~14단계)
    const View1 = ({goToView2}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (1/14) </Text>
                        <Text style={styles.selectMessage}>2개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor1 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton1Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton1Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView2}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View2 = ({goToView3}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (2/14) </Text>
                        <Text style={styles.selectMessage}>2개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor2 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton2Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton2Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView3}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View3 = ({goToView4}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (3/14) </Text>
                        <Text style={styles.selectMessage}>2개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor3 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton3Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton3Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView4}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View4 = ({goToView5}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (4/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요{'\n'}(흰색 포함)</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor4 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton4Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton4Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView5}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View5 = ({goToView6}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (5/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor5 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton5Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton5Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView6}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View6 = ({goToView7}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (6/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor6 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton6Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton6Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView7}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View7 = ({goToView8}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (7/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor7 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton7Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton7Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView8}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View8 = ({goToView9}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (8/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor8 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton8Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton8Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView9}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View9 = ({goToView10}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (9/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor9 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton9Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton9Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView10}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View10 = ({goToView11}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (10/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor10 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton10Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton10Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView11}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View11 = ({goToView12}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (11/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor11 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton11Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton11Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView12}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View12 = ({goToView13}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (12/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor12 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton12Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton12Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView13}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View13 = ({goToView14}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (13/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor13 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton13Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton13Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToView14}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    const View14 = ({goToResult}) => (
      <View>
        <View style={styles.step2Containaer}>
                        <Text style={styles.title}>STEP 2</Text>
                        <Text style={styles.titleName}>색깔 선택 (14/14) </Text>
                        <Text style={styles.selectMessage}>4개의 색깔 중 하나를 선택하세요</Text>
                        <Text style={styles.step}>얼굴과 잘 어울리는 색을 선택해주세요</Text>
                        <Text style={styles.advice}>얼굴과 색이 하나로 이어진 것처럼 조화로워 보이고 {'\n'}피부색이 맑아보이는 색이 잘 어울리는 색입니다. </Text>
                    </View>
                    <View style={styles.selectContainer}>
                    <View style={[styles.colorBox, { backgroundColor: currentColor14 }]}>
                    <Image 
                            source={{uri: photo.uri}}
                            style={styles.photos}
                        />
                    </View>
                    <View style={styles.button2Container}>
            <TouchableOpacity style={styles.button2} onPress={handleLeftButton14Click}>
              <Text style={styles.button2Text}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleRightButton14Click}>
              <Text style={styles.button2Text}>{'>'}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.advice2}>화살표를 눌러 색깔을 살펴보세요!</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={goToResult}>
              <Text style={styles.choiceButtonText}>색깔 선택</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
    // 검사 마무리 뷰
    const ResultView = () => (
      <View>
        <View style={styles.step2Containaer}>
          <Text style={styles.title}>STEP 3</Text>
          <Text style={styles.titleName}>결과 도출 </Text>
          <View style={styles.imageContainer}>
                    <Image style={styles.mainImage} source={require("./assets/fourSeason.png")} />
                </View>
          <Text style={styles.checkText2}>결과가 정상적으로 도출되었습니다. {'\n\n'}         결과보기 버튼을 눌러 {'\n'} 당신의 퍼스널 컬러를 확인하세요 !</Text>
          <TouchableOpacity style={styles.choiceButton} onPress={handleButtonClick}>
              <Text style={styles.choiceButtonText}>결과 보기</Text>
          </TouchableOpacity>
                        
        </View>
                    
      </View>
    );

    // 검사로부터 결과를 받음
    const handleButtonClick = () => {
      setDisplayView(resultText)
      if(displayView === "봄 웜톤"){
        navigation.navigate("SpringResult",{screen:'SpringResult'})
      }else if(displayView === "여름 쿨톤"){
        navigation.navigate("SummerResult",{screen:'SummerResult'})
      }else if(displayView === "가을 웜톤"){
        navigation.navigate("AutumnResult",{screen:'AutumnResult'})
      }else if(displayView === "겨울 쿨톤"){
        navigation.navigate("WinterResult",{screen:'WinterResult'})
      }
    };


    //뷰 이동을 위한 함수

    const goToView1 = () => {
      setCorrentView('view1');
    };
    const goToView2 = () => {
      setCorrentView('view2');
    };
    const goToView3 = () => {
      setCorrentView('view3');
    };
    const goToView4 = () => {
      setCorrentView('view4');
    };
    const goToView5 = () => {
      setCorrentView('view5');
    };
    const goToView6 = () => {
      setCorrentView('view6');
    };
    const goToView7 = () => {
      setCorrentView('view7');
    };
    const goToView8 = () => {
      setCorrentView('view8');
    };
    const goToView9 = () => {
      setCorrentView('view9');
    };
    const goToView10 = () => {
      setCorrentView('view10');
    };
    const goToView11 = () => {
      setCorrentView('view11');
    };
    const goToView12 = () => {
      setCorrentView('view12');
    };
    const goToView13 = () => {
      setCorrentView('view13');
    };
    const goToView14 = () => {
      setCorrentView('view14');
    };
    const goToResult = () => {
      setCorrentView('resultView');
    }

  // 각 단계마다 색을 살펴보거나 선택한 색을 저장하는 역할
  const handleLeftButton1Click = () => {
    const newIndex = (currentColor1Index - 1 + colors1.length) % colors1.length;
    setCurrentColor1Index(newIndex);
  };
  const handleRightButton1Click = () => {
    const newIndex = (currentColor1Index + 1) % colors1.length;
    setCurrentColor1Index(newIndex);
  };
  const currentColor1 = colors1[currentColor1Index];

  const handleLeftButton2Click = () => {
    const newIndex = (currentColor2Index - 1 + colors2.length) % colors2.length;
    setCurrentColor2Index(newIndex);
  };
  const handleRightButton2Click = () => {
    const newIndex = (currentColor2Index + 1) % colors2.length;
    setCurrentColor2Index(newIndex);
  };
  const currentColor2 = colors2[currentColor2Index];

  const handleLeftButton3Click = () => {
    const newIndex = (currentColor3Index - 1 + colors3.length) % colors3.length;
    setCurrentColor3Index(newIndex);
  };
  const handleRightButton3Click = () => {
    const newIndex = (currentColor3Index + 1) % colors3.length;
    setCurrentColor3Index(newIndex);
  };
  const currentColor3 = colors3[currentColor3Index];

  const handleLeftButton4Click = () => {
    const newIndex = (currentColor4Index - 1 + colors4.length) % colors4.length;
    setCurrentColor4Index(newIndex);
  };
  const handleRightButton4Click = () => {
    const newIndex = (currentColor4Index + 1) % colors4.length;
    setCurrentColor4Index(newIndex);
  };
  const currentColor4 = colors4[currentColor4Index];

  const handleLeftButton5Click = () => {
    const newIndex = (currentColor5Index - 1 + colors5.length) % colors5.length;
    setCurrentColor5Index(newIndex);
  };
  const handleRightButton5Click = () => {
    const newIndex = (currentColor5Index + 1) % colors5.length;
    setCurrentColor5Index(newIndex);
  };
  const currentColor5 = colors5[currentColor5Index];

  const handleLeftButton6Click = () => {
    const newIndex = (currentColor6Index - 1 + colors6.length) % colors6.length;
    setCurrentColor6Index(newIndex);
  };
  const handleRightButton6Click = () => {
    const newIndex = (currentColor6Index + 1) % colors6.length;
    setCurrentColor6Index(newIndex);
  };
  const currentColor6 = colors6[currentColor6Index];

  const handleLeftButton7Click = () => {
    const newIndex = (currentColor7Index - 1 + colors7.length) % colors7.length;
    setCurrentColor7Index(newIndex);
  };
  const handleRightButton7Click = () => {
    const newIndex = (currentColor7Index + 1) % colors7.length;
    setCurrentColor7Index(newIndex);
  };
  const currentColor7 = colors7[currentColor7Index];

  const handleLeftButton8Click = () => {
    const newIndex = (currentColor8Index - 1 + colors8.length) % colors8.length;
    setCurrentColor8Index(newIndex);
  };
  const handleRightButton8Click = () => {
    const newIndex = (currentColor8Index + 1) % colors8.length;
    setCurrentColor8Index(newIndex);
  };
  const currentColor8 = colors8[currentColor8Index];

  const handleLeftButton9Click = () => {
    const newIndex = (currentColor9Index - 1 + colors9.length) % colors9.length;
    setCurrentColor9Index(newIndex);
  };
  const handleRightButton9Click = () => {
    const newIndex = (currentColor9Index + 1) % colors9.length;
    setCurrentColor9Index(newIndex);
  };
  const currentColor9 = colors9[currentColor9Index];

  const handleLeftButton10Click = () => {
    const newIndex = (currentColor10Index - 1 + colors10.length) % colors10.length;
    setCurrentColor10Index(newIndex);
  };
  const handleRightButton10Click = () => {
    const newIndex = (currentColor10Index + 1) % colors10.length;
    setCurrentColor10Index(newIndex);
  };
  const currentColor10 = colors10[currentColor10Index];

  const handleLeftButton11Click = () => {
    const newIndex = (currentColor11Index - 1 + colors11.length) % colors11.length;
    setCurrentColor11Index(newIndex);
  };
  const handleRightButton11Click = () => {
    const newIndex = (currentColor11Index + 1) % colors11.length;
    setCurrentColor11Index(newIndex);
  };
  const currentColor11 = colors11[currentColor11Index];

  const handleLeftButton12Click = () => {
    const newIndex = (currentColor12Index - 1 + colors12.length) % colors12.length;
    setCurrentColor12Index(newIndex);
  };
  const handleRightButton12Click = () => {
    const newIndex = (currentColor12Index + 1) % colors12.length;
    setCurrentColor12Index(newIndex);
  };
  const currentColor12 = colors12[currentColor12Index];

  const handleLeftButton13Click = () => {
    const newIndex = (currentColor13Index - 1 + colors13.length) % colors13.length;
    setCurrentColor13Index(newIndex);
  };
  const handleRightButton13Click = () => {
    const newIndex = (currentColor13Index + 1) % colors13.length;
    setCurrentColor13Index(newIndex);
  };
  const currentColor13 = colors13[currentColor13Index];

  const handleLeftButton14Click = () => {
    const newIndex = (currentColor14Index - 1 + colors14.length) % colors14.length;
    setCurrentColor14Index(newIndex);
  };
  const handleRightButton14Click = () => {
    const newIndex = (currentColor14Index + 1) % colors14.length;
    setCurrentColor14Index(newIndex);
  };
  const currentColor14 = colors14[currentColor14Index];

  // 선택한 색들을 배열에 저장 
  const selectColorArray = [
    currentColor4, currentColor5, currentColor6, currentColor7, currentColor8, 
    currentColor9, currentColor10, currentColor11, currentColor12, currentColor13, currentColor14
  ];

  // 저장한 배열을 바탕으로 수치 집계
  const seasonResult = () => {
    for(let i = 0; i < 14; i++){
      if(spring.includes(selectColorArray[i])){
        spring_cnt = spring_cnt + 1;
      }else if(summer.includes(selectColorArray[i])){
        summer_cnt = summer_cnt + 1;
      }else if(autumn.includes(selectColorArray[i])){
        autumn_cnt = autumn_cnt + 1;
      }else if(winter.includes(selectColorArray[i])){
        winter_cnt = winter_cnt + 1;
      }
    }
  }

  // 집계한 수치를 바탕으로 검사 결과 도출
  const testResult = () => {
    seasonResult();
    if(warm.includes(currentColor1)){
      if(warm.includes(currentColor2) || warm.includes(currentColor3)){
        if(spring_cnt >= autumn_cnt){
          return '봄 웜톤';
        }else{
          return '가을 웜톤';
        }
      }else{
        if(summer_cnt >= winter_cnt){
          return '여름 쿨톤';
        }else{
          return '겨울 쿨톤';
        }
      }
    }else if(cool.includes(currentColor1)){
      if(cool.includes(currentColor2) || cool.includes(currentColor3)){
        if(summer_cnt >= winter_cnt){
          return '여름 쿨톤';
        }else{
          return '겨울 쿨톤';
        }
      }else{
        if(spring_cnt >= autumn_cnt){
          return '봄 웜톤';
        }else{
          return '가을 웜톤';
        }
      }
    }
  }
  const resultText = testResult();
  //컨버트뷰를 통해 뷰 전환
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Examination01",{screen:'Examination01'})}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Back(뒤로가기) (얼굴 촬영)</Text>
                    </TouchableOpacity>
                </View>
                {correntView === 'startView' && <StartView goToView1={goToView1}/>}
                {correntView === 'view1' && <View1 goToView2={goToView2}/>}
                {correntView === 'view2' && <View2 goToView3={goToView3}/>}
                {correntView === 'view3' && <View3 goToView4={goToView4}/>}
                {correntView === 'view4' && <View4 goToView5={goToView5}/>}
                {correntView === 'view5' && <View5 goToView6={goToView6}/>}
                {correntView === 'view6' && <View6 goToView7={goToView7}/>}
                {correntView === 'view7' && <View7 goToView8={goToView8}/>}
                {correntView === 'view8' && <View8 goToView9={goToView9}/>}
                {correntView === 'view9' && <View9 goToView10={goToView10}/>}
                {correntView === 'view10' && <View10 goToView11={goToView11}/>}
                {correntView === 'view11' && <View11 goToView12={goToView12}/>}
                {correntView === 'view12' && <View12 goToView13={goToView13}/>}
                {correntView === 'view13' && <View13 goToView14={goToView14}/>}
                {correntView === 'view14' && <View14 goToResult={goToResult}/>}
                {correntView === 'resultView' && <ResultView />}
            </View>
        </View>
    );

}

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
    buttonContainer: {
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
    step2Containaer: {
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
        //marginBottom:5
      }, 
      titleName: {
        textAlign:"center", 
        fontSize:22, 
        fontWeight:"700", 
        color:"#0000ff",
        paddingLeft:22, 
        paddingRight:22, 
        marginBottom:5
      }, 
      selectMessage: {
        textAlign:"center", 
        fontSize:15, 
        fontWeight:"600", 
        color:"#ff0000",
        paddingLeft:22, 
        paddingRight:22, 
        marginBottom:15
      },
      step: {
        textAlign:"center", 
        fontSize:15, 
        fontWeight:"600", 
        color:"#000000",
        paddingLeft:22, 
        paddingRight:22, 
        marginBottom:5
      },
      advice: {
        textAlign:"center", 
        fontSize:12, 
        fontWeight:"600", 
        color:"#333333",
        paddingLeft:22, 
        paddingRight:22,
        marginBottom:20 
      },
    photos: {
        width: 120, 
        height: 160
    }, 
    selectContainer: {
        justifyContent:"center", 
        alignItems: 'center',
    },
    colorBox: {
        justifyContent:"center", 
        alignItems: 'center',
        width: 200,
        height: 220,
        marginBottom: 10,
      },
      button2Container: {
        flexDirection: 'row',
        //marginBottom:10
      },
      button2: {
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor:"#fff"
      },
      button2Text: {
        color: 'black',
        fontSize: 25,
        fontWeight:'700'
      },
      advice2: {
        textAlign:"center", 
        fontSize:15, 
        fontWeight:"600", 
        color:"#ff0000",
        paddingLeft:22, 
        paddingRight:22, 
        marginBottom:15
      }, 
      choiceButton: {
        backgroundColor:"#9933ff", 
        borderRadius:15, 
        padding:10
      }, 
      choiceButtonText: {
        color:"#fff",
        fontWeight:"700",
        fontSize:15
      }, 
      result: {
        color:"#000000"
      }, 
      photoShowContainer: {
        justifyContent:"center", 
        alignItems: 'center',
        marginTop:20
      }, 
      checkText: {
        color:"#666666",
        marginBottom:20, 
        fontWeight:"700",
        fontSize:15
      }, 
      photoCheck: {
        width: 160, 
        height: 200, 
        marginBottom: 25
      }, 
      checkText2: {
        color:"#000000",
        marginBottom:40, 
        fontWeight:"700",
        fontSize:16, 
        marginTop:40
      }, 
      mainImage: {
        width:200, 
        height:180, 
        borderRadius:30,
        marginTop:40
      },
      imageContainer: {
        justifyContent:"center", 
        alignItems: 'center'
      }, 
})