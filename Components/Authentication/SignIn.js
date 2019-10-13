import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignIn = (props) => {
    const { navigation } = props
    console.log(navigation);
    
    const [name, setName] = useState('login');
        return (
            <View>
                <Button  
                title='SignUp'
                onPress={ ()=> navigation.navigate('SignUp') }
                />
                <Text>
                    { name }
                </Text>
            </View>
            
        );
}

export default SignIn;