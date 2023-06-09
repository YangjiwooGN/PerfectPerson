import React, { useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    runOnJS,
} from 'react-native-reanimated';

const Toast = forwardRef((props, ref) => {
    const toastOpacity = useSharedValue(0);
    const isShowed = useRef(false);

    const animatedStyle = useAnimatedStyle(()=>{
        return {
            opacity: toastOpacity.value,
        }
    }, []);

    useImperativeHandle(ref, () => ({
        show: show
    }));
   
    const show = useCallback((message) => {
    }, []);

    return (
        <Animated.View style={[ styles.rootContainer, animatedStyle ]}>
            <Text style={styles.message}>이것은 아마 토스트 메시지?</Text>
        </Animated.View>
    );
})

const styles = StyleSheet.create({
    rootContainer: {
        position: "absolute",
        bottom: 100,
        backgroundColor: "rgb(95, 209, 251)",
        paddingVertical: 9,
        paddingHorizontal: 23,
        borderRadius: 100,
    },
    message: {
        color: "rgb(255, 255, 255)"
    }
});

export default Toast;