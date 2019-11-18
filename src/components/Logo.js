// JavaScript source code
// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Logo extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://cdn4.iconfinder.com/data/icons/project-management-2-10/50/122-512.png' }} />
                <Text style={styles.logoText}>WePay </Text>
                <Text style={styles.logoText}>Latest loan invest services provider</Text>
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#212121'
    },
    logoText: {
        marginVertical: 10,
        fontSize: 18,
        color: 'rgb(255, 255, 255)'
    }
});