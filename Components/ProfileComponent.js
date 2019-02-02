import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SecureStore } from 'expo';
import  { connect } from 'react-redux';


class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.signOutUser = this.signOutUser.bind(this);
    }

    signOutUser() {
        SecureStore.deleteItemAsync('token')
        .then(() => {
            this.props.logout();
        })
        .catch(err => {
             alert(err);
        })
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text>
                    Welcome {this.props.fName}
                </Text>

                <Button
                    width={20}
                    title="Logout"
                    onPress={ this.signOutUser }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: 'LOGOUT' })
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);