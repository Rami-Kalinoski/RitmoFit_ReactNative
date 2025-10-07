import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CatalogueScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catálogo de Clases</Text>
            <Text>Listado de clases disponibles</Text>
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