import React from 'react';
import { connect } from 'react-redux';
import { SignedOutStack, SignedInStack } from './Components/Router';
import { SecureStore } from 'expo';

class Entry extends React.Component {
    constructor() {
        super();
        this.state = {
            ready: false
        }
    }

    componentWillMount() {
        SecureStore.getItemAsync('token')
        .then(token => {
            if (!token) {
                this.setState({
                    ready: true
                });
            } else {
                this.props.login();
                this.setState({
                    ready: true
                });
            }
        })
        .catch(() => {
            this.setState({
                ready: true,
            })
        })
    }

    render() {
        if (!this.state.ready) {
            return null;
        } else if (this.state.ready && this.props.isLoggedIn) {
            return <SignedInStack />
        } else {
            return <SignedOutStack />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        email: state.auth.email,
        password: state.auth.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({type: 'LOGIN'}),
        logout: () => dispatch({type: 'LOGOUT'}),
        onChange: (value, name) => dispatch({type: 'UPDATE', value: value, name: name}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);