import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './styles';

export const ListeningButton = () => {
    const [isListening, setIsListening] = useState(false);

    // Animações para as 4 ondas
    const wave1 = useRef(new Animated.Value(0)).current;
    const wave2 = useRef(new Animated.Value(0)).current;
    const wave3 = useRef(new Animated.Value(0)).current;
    const wave4 = useRef(new Animated.Value(0)).current;

    const buttonScale = useRef(new Animated.Value(1)).current;
    const eyeScale = useRef(new Animated.Value(0)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;
    const controlsOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isListening) {
            // Anima o botão
            Animated.spring(buttonScale, {
                toValue: 1.3,
                useNativeDriver: true,
            }).start();

            // Abre os olhos
            Animated.spring(eyeScale, {
                toValue: 1,
                friction: 5,
                tension: 100,
                useNativeDriver: true,
            }).start();

            // Animação de pulsação contínua
            Animated.loop(
                Animated.sequence([
                    Animated.timing(pulseAnim, {
                        toValue: 1.15,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(pulseAnim, {
                        toValue: 1,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                ])
            ).start();

            // Mostra controles
            Animated.timing(controlsOpacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            // Cria animações para cada onda
            const createWaveAnimation = (wave: Animated.Value, delay: number) => {
                return Animated.loop(
                    Animated.sequence([
                        Animated.delay(delay),
                        Animated.parallel([
                            Animated.timing(wave, {
                                toValue: 1,
                                duration: 3000,
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
            // Para todas as animações
            wave1.setValue(0);
            wave2.setValue(0);
            wave3.setValue(0);
            wave4.setValue(0);
            pulseAnim.stopAnimation();
            pulseAnim.setValue(1);

            Animated.spring(buttonScale, {
                toValue: 1,
                useNativeDriver: true,
            }).start();

            // Fecha os olhos
            Animated.spring(eyeScale, {
                toValue: 0,
                friction: 5,
                tension: 100,
                useNativeDriver: true,
            }).start();

            // Esconde controles
            Animated.timing(controlsOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [isListening]);

    const handlePress = () => {
        setIsListening(!isListening);
    };

    const handleCancel = () => {
        console.log('Gravação cancelada');
        setIsListening(false);
    };

    const handleSend = () => {
        console.log('Gravação enviada');
        setIsListening(false);
        // Aqui você pode adicionar a lógica para enviar o áudio
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
                        opacity,
                    },
                ]}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>


                {/* Botão principal com pulsação */}
                <Animated.View style={{
                    transform: [
                        { scale: buttonScale },
                        { scale: isListening ? pulseAnim : 1 }
                    ]
                }}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            { backgroundColor: isListening ? '#FFFFFF' : '#3B82F6' }
                        ]}
                        onPress={handlePress}
                        activeOpacity={0.8}
                    >
                        {/* Rosto do Robô */}
                        <View style={styles.robotFace}>
                            {/* Capacete/Cabeça */}
                            <View style={[
                                styles.helmet,
                                isListening ? styles.helmetActive : styles.helmetInactive
                            ]}>
                                {/* Óculos na testa */}
                                <View style={styles.gogglesContainer}>
                                    <View style={[
                                        styles.goggles,
                                        isListening ? styles.gogglesActive : styles.gogglesInactive
                                    ]}>
                                        <View style={[
                                            styles.goggleLens,
                                            isListening ? styles.goggleLensActive : styles.goggleLensInactive
                                        ]} />
                                        <View style={[
                                            styles.goggleBridge,
                                            isListening ? styles.goggleBridgeActive : styles.goggleBridgeInactive
                                        ]} />
                                        <View style={[
                                            styles.goggleLens,
                                            isListening ? styles.goggleLensActive : styles.goggleLensInactive
                                        ]} />
                                    </View>
                                </View>
                            </View>

                            {/* Fones de ouvido */}
                            <View style={styles.headphonesContainer}>
                                <View style={[
                                    styles.headphone,
                                    styles.headphoneLeft,
                                    isListening ? styles.headphoneActive : styles.headphoneInactive
                                ]} />
                                <View style={[
                                    styles.headphone,
                                    styles.headphoneRight,
                                    isListening ? styles.headphoneActive : styles.headphoneInactive
                                ]} />
                            </View>

                            {/* Rosto branco */}
                            <View style={[
                                styles.faceContainer,
                                isListening ? styles.faceActive : styles.faceInactive
                            ]}>
                                {/* Olhos */}
                                <View style={styles.eyesContainer}>
                                    {/* Olho esquerdo */}
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

                                    {/* Olho direito */}
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

                                {/* Boca/Sorriso */}
                                <View style={styles.mouthContainer}>
                                    <View style={[styles.mouth, isListening && styles.mouthActive]} />
                                </View>
                            </View>
                        </View>

                        {/* Ondas animadas */}
                        {isListening && (
                            <View style={styles.wavesContainer}>
                                {renderWave(wave1, 200)}
                                {renderWave(wave2, 200)}
                                {renderWave(wave3, 200)}
                                {renderWave(wave4, 200)}
                            </View>
                        )}
                    </TouchableOpacity>



                </Animated.View>



                {/* Texto de status */}
                <Text style={styles.statusText}>
                    {isListening ? 'Estou te ouvindo...' : 'Toque para falar'}
                </Text>


                {/* Controles de Cancelar e Enviar */}
                {isListening && (
                    <Animated.View style={[styles.controlsContainer, { opacity: controlsOpacity }]}>
                        {/* Botão Cancelar */}
                        <TouchableOpacity
                            style={styles.controlButton}
                            onPress={handleCancel}
                            activeOpacity={0.7}
                        >
                            <View style={[styles.controlIconContainer, styles.cancelButton]}>
                                <Ionicons name="close" size={28} color="#FFFFFF" />
                            </View>
                            <Text style={styles.controlText}>Cancelar</Text>
                        </TouchableOpacity>

                        {/* Botão Enviar */}
                        <TouchableOpacity
                            style={styles.controlButton}
                            onPress={handleSend}
                            activeOpacity={0.7}
                        >
                            <View style={[styles.controlIconContainer, styles.sendButton]}>
                                <Ionicons name="send" size={24} color="#FFFFFF" />
                            </View>
                            <Text style={styles.controlText}>Enviar</Text>
                        </TouchableOpacity>
                    </Animated.View>
                )}
            </View>
        </View>
    );
};