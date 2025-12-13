import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('window');

export const ListeningButton = () => {
    const [isListening, setIsListening] = useState(false);

    const wave1 = useRef(new Animated.Value(0)).current;
    const wave2 = useRef(new Animated.Value(0)).current;
    const wave3 = useRef(new Animated.Value(0)).current;
    const wave4 = useRef(new Animated.Value(0)).current;

    const buttonScale = useRef(new Animated.Value(1)).current;
    const eyeScale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isListening) {
            Animated.spring(buttonScale, {
                toValue: 1.1,
                useNativeDriver: true,
            }).start();

            Animated.spring(eyeScale, {
                toValue: 1,
                friction: 5,
                tension: 100,
                useNativeDriver: true,
            }).start();

            const createWaveAnimation = (wave: Animated.Value, delay: number) => {
                return Animated.loop(
                    Animated.sequence([
                        Animated.delay(delay),
                        Animated.parallel([
                            Animated.timing(wave, {
                                toValue: 1,
                                duration: 2000,
                                useNativeDriver: true,
                            }),
                        ]),
                        Animated.timing(wave, {
                            toValue: 0,
                            duration: 0,
                            useNativeDriver: true,
                        }),
                    ])
                );
            };

            const animations = [
                createWaveAnimation(wave1, 0),
                createWaveAnimation(wave2, 300),
                createWaveAnimation(wave3, 600),
                createWaveAnimation(wave4, 900),
            ];

            animations.forEach(anim => anim.start());
        } else {
            wave1.setValue(0);
            wave2.setValue(0);
            wave3.setValue(0);
            wave4.setValue(0);

            Animated.spring(buttonScale, {
                toValue: 1,
                useNativeDriver: true,
            }).start();

            Animated.spring(eyeScale, {
                toValue: 0,
                friction: 5,
                tension: 100,
                useNativeDriver: true,
            }).start();
        }
    }, [isListening]);

    const handlePress = () => {
        setIsListening(!isListening);
    };

    const renderWave = (waveAnim: Animated.Value, size: number) => {
        const scale = waveAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2],
        });

        const opacity = waveAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.5, 0],
        });

        return (
            <Animated.View
                style={[
                    styles.wave,
                    {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        transform: [{ scale }],
                        opacity: opacity,
                    },
                ]}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {isListening && (
                    <View style={styles.wavesContainer}>
                        {renderWave(wave1, 200)}
                        {renderWave(wave2, 200)}
                        {renderWave(wave3, 200)}
                        {renderWave(wave4, 200)}
                    </View>
                )}

                <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: isListening ? '#FFFFFF' : '#3B82F6' }
                    ]}
                        onPress={handlePress}
                        activeOpacity={0.8}
                    >

                        <View style={styles.robotFace}>
                            <View style={styles.antenna}>
                                <View style={styles.antennaTop} />
                            </View>

                            <View style={styles.eyesContainer}>
                                <View style={styles.eyeSocket}>
                                    <Animated.View
                                        style={[
                                            styles.eye,
                                            {
                                                transform: [{ scaleY: eyeScale }],
                                            },
                                        ]}
                                    />
                                    {!isListening && <View style={styles.closedEye} />}
                                </View>

                                <View style={styles.eyeSocket}>
                                    <Animated.View
                                        style={[
                                            styles.eye,
                                            {
                                                transform: [{ scaleY: eyeScale }],
                                            },
                                        ]}
                                    />
                                    {!isListening && <View style={styles.closedEye} />}
                                </View>
                            </View>

                            <View style={styles.mouthContainer}>
                                <View style={[styles.mouth, isListening && styles.mouthActive]} />
                            </View>

                            <View style={styles.cheeks}>
                                <View style={[styles.cheek, styles.cheekLeft]} />
                                <View style={[styles.cheek, styles.cheekRight]} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Text style={styles.statusText}>
                    {isListening ? 'Listening...' : 'Tap to Speak'}
                </Text>
            </View>
        </View>
    );
};