import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E40AF',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wavesContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60
    },
    wave: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    button: {
        width: 128,
        height: 128,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 20,
    },
    statusText: {
        marginTop: 40,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    robotFace: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    antennaContainer: {
        position: 'absolute',
        top: -5,
        flexDirection: 'row',
    },
    antenna: {
        width: 2,
        height: 15,
        backgroundColor: '#94A3B8',
        alignItems: 'center',
    },
    antennaTop: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#60A5FA',
        position: 'absolute',
        top: -4,
    },
    eyesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        marginTop: 20
    },
    eyeSocket: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(148, 163, 184, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    eye: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1E293B',
    },
    closedEye: {
        position: 'absolute',
        width: 24,
        height: 3,
        backgroundColor: '#64748B',
        borderRadius: 2,
    },
    mouthContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    mouth: {
        width: 40,
        height: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 3,
        borderTopWidth: 0,
        borderColor: '#64748B'
    },
    mouthActive: {
        borderColor: '#2563EB',
        width: 50,
    },
    cheeks: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    cheek: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'rgba(96, 165, 250, 0.3)',
        position: 'absolute',
    },
    cheekLeft: {
        left: 20,
        top: 60,
    },
    cheekRight: {
        right: 20,
        top: 60,
    },
});

export default styles;