// JavaScript source code
// JavaScript source code
import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={40}
            />
        );
    }
}

export default class MultiText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Address',
        };
    }

    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
        return (
            <View style={{
                backgroundColor:
                    //this.state.text
                'rgba(255,255,255,0.6)'
                ,
             
                width: 300,
                borderColor: '#000000',
                borderRadius: 25,
                paddingHorizontal: 16,
                color: '#494949',
                borderWidth: 1,
                marginVertical: 10
            }}
            >
                <UselessTextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
            </View>
        );
    }
}






// skip these lines if using Create React Native App
AppRegistry.registerComponent(
    'AwesomeProject',
    () => MultiText
);
