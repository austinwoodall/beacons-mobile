import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet,} from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';
import { SecureStore } from 'expo';
import { BASEURL } from './Global';
import { connect } from 'react-redux';
import axios from 'axios';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.signInUser = this.signInUser.bind(this);
    }

    signInUser() {
        const {
            email,
            password,
        } = this.props;

        axios.post(`${BASEURL}/token`, {
            email: email,
            password: password
        })
        .then((res) => {
            SecureStore.setItemAsync('token', res.data.token)
            .then(() => {
                this.props.login();
            })
            .catch(err => {
                alert(err)
            })

        })
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text style={{
                        fontSize: 20
                    }}>
                        Dwaddle
                    </Text>
                    <Divider style={{ shadowColor: 'red',
                        shadowOpacity: 1,
                        shadowOffset: { width: 0, height: 5 },
                        shadowRadius: 5}}
                        
                        containerStyle={{
                        borderTopRightRadius: 100,
                        borderBottomRightRadius: 100,
                        height: 150,
                        borderWidth: 0,
                    }}>
                        <TextInput
                            underlineColorAndroid='#e74c3c'
                            style = {styles.input}
                            onChangeText={(email) => this.props.onChange(email, 'email')}
                            placeholder='Email' 
                        />

                        <TextInput
                            underlineColorAndroid='#e74c3c'
                            style = {styles.input}
                            onChangeText={(password) => this.props.onChange(password, 'password')}
                            placeholder='Password' 
                        />
                    </Divider>
                    <Button
                        title="Sign In"
                        fontSize={20}
                        onPress={ this.signInUser }
                        buttonStyle={{
                            backgroundColor: '#e74c3c',
                            borderRadius: 40,
                            height: 50,
                            marginTop: 40,
                            width: 300
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
                    <Button
                        title='Sign Up'
                        fontSize={20}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        buttonStyle={{
                            backgroundColor: 'transparent',
                            borderColor: '#e74c3c',
                            borderStyle: 'solid',
                            borderWidth: 2,
                            borderRadius: 40,
                            height: 50,
                            width: 300,
                            marginTop: 40,
                        }}

                        textStyle={{
                            color: '#e74c3c'
                        }}
                    />
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        email: state.auth.email,
        password: state.auth.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({type: 'LOGIN'}),
        onChange: (value, name) => dispatch({ type: 'UPDATE', value: value, name: name })
    }
}



const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 40,
        height: 800,
        backgroundColor: 'rgba(250,250,250,1)'
    },
    input: {
        paddingLeft: 20,
        marginBottom: 20,
        height: 50,
        width: 300
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);