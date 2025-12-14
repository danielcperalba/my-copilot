import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function AnalyticsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#141414',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
