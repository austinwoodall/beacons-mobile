import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SecureStore } from 'expo';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

import { BASEURL } from './Global';

class RegistrationComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            fName: '',
            lName: '',
            birthday: '',
            password: '',
            error: '',
            loading: false
        }

        this.signUpUser = this.signUpUser.bind(this);
    }

    signUpUser() {
        const {
            username,
            email,
            fName,
            lName,
            birthday,
            password,
        } = this.state;

        this.setState({
            error: '',
            loading: true
        });

        axios.post(`${BASEURL}/users`, {
            username: username,
            email: email,
            fName: fName,
            lName: lName,
            birthday: birthday,
            password: password
        }, )
        .then((res) => {
            alert('user created');
            SecureStore.setItemAsync('token', res.data.token)
            .then(() => {
                // do another axios post request here for uploading image
                axios.post(`${BASEURL}/profile/upload`)
            })
            .catch(err => {
                alert(err);
            })
        })
        .catch((err) => {
            alert(err);
        })
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/hero.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={styles.container}>

                    <Text>Dwaddle</Text>

                    <TextInput
                        underlineColorAndroid='#f2f2f2'
                        onChangeText={(fName) => this.setState({fName: fName})}
                        style = {styles.input}
                        placeholder='First Name'
                    />

                    <TextInput
                        underlineColorAndroid='#f2f2f2'
                        onChangeText={(lName) => this.setState({lName: lName})}
                        style = {styles.input}
                        placeholder='Last Name'
                    />

                    <DatePicker
                        date={this.state.birthday}
                        mode="date"
                        placeholder="Select Date"
                        format="MM-DD-YYYY"
                        minDate="01-01-1950"
                        max-date="01-01-2018"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                width: 200
                            }
                        }}
                        onDateChange={(birthday) => this.setState({birthday: birthday})}
                    />
            
                    <TextInput
                        underlineColorAndroid='#f2f2f2'
                        onChangeText={(username) => this.setState({username: username})}
                        style = {styles.input}
                        placeholder='Username'
                    />
                

                    <TextInput
                        underlineColorAndroid='#f2f2f2'
                        onChangeText={(email) => this.setState({email: email})}
                        style = {styles.input}
                        placeholder='Email'
                    />

                    <TextInput
                        underlineColorAndroid='#f2f2f2'
                        onChangeText={(password) => this.setState({password: password})}
                        style = {styles.input}
                        placeholder='Password'
                    />

                    <Button
                        title="Sign Up"
                        fontSize={20}
                        onPress={this.signUpUser}
                        buttonStyle={{
                            backgroundColor: '#e74c3c',
                            borderRadius: 40,
                            height: 50,
                            marginTop: 40,
                        }}

                        textStyle={{
                            marginLeft: 70
                        }}

                        iconRight={{
                            name: 'keyboard-arrow-right',
                            size: 40,
                            style: {marginLeft: 50}
                        }}
                    />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        height: 100,
        backgroundColor: 'rgba(5,5,5,0.5)'
    },
    input: {
        paddingLeft: 20,
        marginBottom: 20,
        height: 50,
        color: '#ffffff'
    },
    links: {
        color: 'blue'
    }

});

export default RegistrationComponent;