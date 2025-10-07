import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historial</Text>
            <Text>Tus asistencias pasadas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});