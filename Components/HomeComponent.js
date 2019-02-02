import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeComponent extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text>
                    Welcome To Dwaddle!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeComponent;