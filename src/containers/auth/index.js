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
import { vw } from '../../utils/viewPort';
// import cekToken from '../../actions/cekToken';

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
  },
  resetState: () => {
    dispatch({type : "REGISTER_RESET"})
    dispatch({type : "LOGIN_RESET"})
  }
});

class Auth extends Component {
  state = {
    loginForm: true,
    NIK: '',
    email: '',
    password: '',
    errMsg: '',
    konfirmasiPass : ''
  };

  changeForm = () => {
    const {
      loginForm,
    } = this.state;
    this.props.resetState()
    this.setState({
      loginForm: !loginForm,
      NIK: '',
      email: '',
      password: '',
      errMsg: '',
      konfirmasiPass : ''
    });
  };

  authSend = () => {
    const { props } = this;
    const {
      loginForm,
      NIK,
      email,
      password,
      konfirmasiPass
    } = this.state;

    this.setState({
      errMsg: '',
    });
    props.resetState()
    if (loginForm) {
      if (NIK && password) {
        props.loginAction({ NIK, password }, props.navigation);
      } else {
        this.setState({
          errMsg: 'NIK atau password tidak boleh kosong',
        });
      }
    } else if (!loginForm) {
      if (NIK && email && password && konfirmasiPass) {
        if( password == konfirmasiPass ){
          let emailSend = email.toLocaleLowerCase()
          props.registerAction({ NIK, email : emailSend.trim(), password });
        } else{
          this.setState({
            errMsg: 'Password & Konfirmasi Password harus sesuai',
          })
        }
      } else {
        this.setState({
          errMsg: 'Semua field harus terisi',
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
      konfirmasiPass
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
          konfirmasiPass={konfirmasiPass}
          onChangeInput={this.onChangeInput}
          authSend={this.authSend}
        />
        {
          this.props.register.success && (
            <Text style={{color:'#5FC856', fontSize:5*vw}}>Registrasi Berhasil !</Text>
          )
        }
        {/* <Text>{JSON.stringify(this.props.register)}</Text> */}
        {
          this.props.register.err ? (
            <Text style={{color:'#FF6948'}}>
              {JSON.stringify(this.props.register.errMsg)}
            </Text>
          ) : (
            this.props.login.err ? (
              <Text style={{color:'#FF6948'}}>
                {this.props.login.errMsg.message}
              </Text>
            ) : (
              <Text style={{color:'#FF6948'}}>
                {errMsg}
              </Text>
            )
          )
        }
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
