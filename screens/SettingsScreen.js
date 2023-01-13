import React from 'react';
import {StyleSheet, SafeAreaView,
    StatusBar} from 'react-native';


function SettingsScreen() {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        </>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
});
