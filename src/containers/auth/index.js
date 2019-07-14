import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LoginForm from '../../components/LoginForm';
import { scale } from '../../utils/scaling';
import registerAction from '../../actions/register';
import loginAction from '../../actions/login';

const mapStateToProps = state => ({
  login: state.login,
  register: state.register,
});

const mapDispatchToProps = dispatch => ({
  registerAction: (payload) => {
    dispatch(registerAction(payload));
  },
  loginAction: (payload, navigation) => {
    dispatch(loginAction(payload, navigation));
  }
});

class Auth extends Component {
  state = {
    loginForm: true,
    NIK: '',
    email: '',
    password: '',
    errMsg: '',
  };

  changeForm = () => {
    const {
      loginForm,
    } = this.state;

    this.setState({
      loginForm: !loginForm,
      NIK: '',
      email: '',
      password: '',
      errMsg: '',
    });
  };

  authSend = () => {
    const { props } = this;
    const {
      loginForm,
      NIK,
      email,
      password,
    } = this.state;

    this.setState({
      errMsg: '',
    });

    if (loginForm) {
      if (NIK && password) {
        props.loginAction({ NIK, password }, props.navigation);
      } else {
        this.setState({
          errMsg: 'NIK atau password tidak boleh kosong',
        });
      }
    } else if (!loginForm) {
      if (NIK && email) {
        props.registerAction({ NIK, email });
      } else {
        this.setState({
          errMsg: 'NIK atau email tidak boleh kosong',
        });
      }
    }
  };

  onChangeInput = (value, key) => {
    this.setState({ [key]: value });
  };

  render() {
    const {
      loginForm,
      NIK,
      email,
      password,
      errMsg,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ paddingVertical: scale(30) }}>
          <Text style={styles.signupButton}>{ loginForm ? 'Login Form' : 'Register Form' }</Text>
        </View>
        <LoginForm
          loginForm={loginForm}
          NIK={NIK}
          email={email}
          password={password}
          onChangeInput={this.onChangeInput}
          authSend={this.authSend}
        />
        <Text>
          {errMsg}
        </Text>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Belum registrasi akun ? </Text>
          <TouchableOpacity onPress={this.changeForm}>
            <Text style={styles.signupButton}>
              { loginForm ? 'Register' : 'Login' }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  }
});
