import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, Touchable, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as MediaLibrary from 'expo-media-library';

// 검사 화면 1 (카메라 사용)
const Examination01=()=>{
  const navigation=useNavigation()
  const [hasPermission, setHasPermission]=useState(null);
  const [faces, setFaces] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  // 카메라 사용 허용 확인
  const requestCameraPermission=async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleFacesDetected = ({ faces }) => {
    setFaces(faces);
  };

  // 얼굴 인식(red)
  const renderFaceRectangles = () => {
    return faces.map((face, index) => {
      const { originX, originY, width, height } = face.bounds;
      return (
        <View
          key={index}
          style={[styles.faceRectangle, {
            left: originX,
            top: originY,
            width: width,
            height: height
          }]}
        />
      );
    });
  };

  // 사진 촬영 (캡쳐)
  const takePicture = async () => {
    if(cameraRef){
      const photo = await cameraRef.takePictureAsync();
      savePicture(photo)
      // 사진을 검사화면으로 넘김
      navigation.navigate("Examination02",{photo});
    }
  };

  // 촬영한(캡쳐한) 사진 저장
  const savePicture = async (photo) => {
    await MediaLibrary.saveToLibraryAsync(photo.uri);
  };

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
      <View style={styles.step1Containaer}>
        <Text style={styles.title}>STEP 1</Text>
        <Text style={styles.titleName}>얼굴 촬영</Text>
      </View>
      <View style={{ 
          flex: 1,
          justifyContent:"center", 
          alignItems: 'center', 
          }}>
        <Camera
          style={{ 
            flex: 1, 
            width: 200, 
            height: 250, 
            position: 'relative',
            marginBottom: 30
          }}
          onCameraReady={requestCameraPermission}
          type={Camera.Constants.Type.front}
          ref={(ref) => setCameraRef(ref)}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
          }}
        >
          <View 
          //얼굴 인식이 되면 빨간 점으로 표시
          style={{ flex: 1, backgroundColor: 'transparent' }}>{renderFaceRectangles()}</View>
          <View style={styles.photoContainer}>
          <TouchableOpacity
            style={{
              marginBottom: 16
              
            }}
            onPress={takePicture}>
          <Text style={{
            fontSize:18, 
            color: '#ffffff', 
            fontWeight:"600"
            }}>캡쳐</Text>
        </TouchableOpacity>
          </View>
        </Camera>
    </View>
    <View style={styles.messageContainer}>
      <Text style={styles.adviceMessage1}>*자동 얼굴 인식이 진행되며, {'\n'}빨간 점으로 표시가 됩니다.*</Text>
      <Text style={styles.adviceMessage2}>최대한 본인의 얼굴색과 비슷하게 촬영해야 {'\n'}   보다 정확한 결과를 보실 수 있습니다. </Text>
    </View>
      </View>
    </View>
  );
}
export default Examination01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F266A',
    justifyContent:"center", 
    alignItems: 'center'
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
  step1Containaer: {
    justifyContent:"center", 
    alignItems: 'center'
  }, 
  title: {
    textAlign:"center", 
    fontSize:25, 
    fontWeight:"700", 
    color:"#0000ff",
    paddingLeft:22, 
    paddingRight:22,
    marginBottom:5
  }, 
  titleName: {
    textAlign:"center", 
    fontSize:25, 
    fontWeight:"700", 
    color:"#0000ff",
    paddingLeft:22, 
    paddingRight:22, 
    marginBottom:40
  }, 
  faceRectangle: {
    position: 'absolute',
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 5,
  }, 
  photoContainer: {
    flex:0.2, 
    backgroundColor:'#9933ff', 
    justifyContent:'flex-end', 
    alignItems:'center'
  }, 
  messageContainer: {
    justifyContent:"center", 
    alignItems: 'center'
  }, 
  adviceMessage1: {
    color:"#ff0000", 
    fontWeight: "600",
    marginBottom: 25
  }, 
  adviceMessage2: { 
    fontWeight: "600",
    marginBottom: 20
  }
});
