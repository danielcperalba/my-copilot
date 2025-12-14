import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    wavesContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wave: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
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
        elevation: 16,
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
        position: 'relative',
    },
    helmet: {
        position: 'absolute',
        top: 0,
        width: 110,
        height: 55,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        zIndex: 1,
    },
    helmetActive: {
        backgroundColor: '#2563EB',
    },
    helmetInactive: {
        backgroundColor: '#64748B',
    },
    gogglesContainer: {
        position: 'absolute',
        bottom: -5,
        width: '100%',
        alignItems: 'center',
    },
    goggles: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
    },
    gogglesActive: {
        backgroundColor: '#1E40AF',
    },
    gogglesInactive: {
        backgroundColor: '#475569',
    },
    goggleLens: {
        width: 28,
        height: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 14,
        borderWidth: 2,
    },
    goggleLensActive: {
        borderColor: '#1E3A8A',
    },
    goggleLensInactive: {
        borderColor: '#334155',
    },
    goggleBridge: {
        width: 12,
        height: 4,
        marginHorizontal: 2,
    },
    goggleBridgeActive: {
        backgroundColor: '#1E40AF',
    },
    goggleBridgeInactive: {
        backgroundColor: '#475569',
    },
    headphonesContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    headphone: {
        position: 'absolute',
        width: 24,
        height: 32,
        borderRadius: 12,
        top: '50%',
        marginTop: -16,
    },
    headphoneActive: {
        backgroundColor: '#1F2937',
    },
    headphoneInactive: {
        backgroundColor: '#374151',
    },
    headphoneLeft: {
        left: -8,
    },
    headphoneRight: {
        right: -8,
    },
    faceContainer: {
        width: 90,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        zIndex: 0,
    },
    faceActive: {
        backgroundColor: '#F3F4F6',
    },
    faceInactive: {
        backgroundColor: '#E5E7EB',
    },
    eyesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginTop: 8,
    },
    eyeSocket: {
        width: 16,
        height: 24,
        borderRadius: 8,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    eye: {
        width: 12,
        height: 20,
        borderRadius: 6,
        backgroundColor: '#1E293B',
    },
    closedEye: {
        position: 'absolute',
        width: 14,
        height: 3,
        backgroundColor: '#64748B',
        borderRadius: 2,
    },
    mouthContainer: {
        marginTop: 8,
        alignItems: 'center',
    },
    mouth: {
        width: 40,
        height: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 3,
        borderTopWidth: 0,
        borderColor: '#94A3B8',
    },
    mouthActive: {
        borderColor: '#3B82F6',
        width: 48,
        height: 18,
    },
    controlsContainer: {
        flexDirection: 'row',
        marginTop: 60,
        gap: 40,
    },
    controlButton: {
        alignItems: 'center',
        gap: 8,
    },
    controlIconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    cancelButton: {
        backgroundColor: '#EF4444',
    },
    sendButton: {
        backgroundColor: '#10B981',
    },
    controlText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default styles;