import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const SignIn = (props) => {
    const { navigation } = props
    console.log(navigation);
    const [name, setName] = useState('Register');
        return (
            <View>
                <Button  
                title='Return'
                onPress={ ()=> navigation.goBack() }
                />
                <Text>
                    { name }
                </Text>
            </View>
        );
}

export default SignIn;