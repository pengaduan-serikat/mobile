import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { scale } from '../../utils/scaling';
import AsyncStorage from '@react-native-community/async-storage';
import { vw } from '../../utils/viewPort';
import ModalChangePass from '../../components/ModalChangePass';
import { connect } from 'react-redux';
import changePassword from '../../actions/changePassword';

const mapStateToProps = state => ({
  stateChangePass : state.changePassword
});

const mapDispatchToProps = dispatch => ({
  changePassword: (navigation, data) => {
    dispatch(changePassword(navigation, data))
  },
  resetState: () => {
    dispatch({type : 'CHANGE_PASSWORD_RESET'})
  }
})

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      NIK : null,
      division : null,
      email : null,
      fullName : null
    };
  }
  Logout = async () => {
    try{
      await AsyncStorage.clear()
      this.props.navigation.navigate('Auth')
    } catch(err) {
    }
  }
  componentDidMount = async () => {
    try{
      let NIK = await AsyncStorage.getItem('NIK')
      let email = await AsyncStorage.getItem('email')
      let division = await AsyncStorage.getItem('division')
      let fullName = await AsyncStorage.getItem('fullName')

      this.setState({ NIK, email, division, fullName })
    } catch(err){

    }
  }
  changePassword = (data) => {
    this.props.changePassword(this.props.navigation, data)
  }
  render() {
    let { NIK, email, division, fullName } = this.state
    return (
      <View style={{paddingHorizontal:scale(40), paddingVertical:scale(30), flex:1}}>
        <Text style={{ fontSize:7*vw, color:'#0c74c2', fontWeight:'bold', paddingBottom:scale(30)}}>{fullName}</Text>
        <View style={{marginBottom:scale(50)}}>
          <View style={{paddingBottom:scale(10)}}>
            <Text style={{fontSize:4*vw, color:'#6F6E6E'}}>NIK</Text>
            <Text style={{fontSize:5*vw, color:'#6F6E6E', fontWeight:'700'}}>{NIK}</Text>
          </View>
          <View style={{paddingBottom:scale(10)}}>
            <Text style={{fontSize:4*vw, color:'#6F6E6E'}}>Email</Text>
            <Text style={{fontSize:5*vw, color:'#6F6E6E', fontWeight:'700'}}>{email}</Text>
          </View>
          <View style={{paddingBottom:scale(10)}}>
            <Text style={{fontSize:4*vw, color:'#6F6E6E'}}>Divisi</Text>
            <Text style={{fontSize:5*vw, color:'#6F6E6E', fontWeight:'700'}}>{division}</Text>
          </View>
        </View>
        <View style={{width:'100%', justifyContent:'space-between', flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>this.refs.modalChangePass.showModal()} style={{backgroundColor:'#48C2FF', paddingHorizontal:scale(20), paddingVertical:scale(20), borderRadius:scale(5)}}>
            <Text style={{color:'white', fontSize:4*vw, fontWeight:'700'}}>Ubah Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.Logout()} style={{backgroundColor:'#FF6948', paddingHorizontal:scale(20), paddingVertical:scale(20), borderRadius:scale(5)}}>
            <Text style={{color:'white', fontSize:4*vw, fontWeight:'700'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <ModalChangePass ref={'modalChangePass'} changePassword={this.changePassword} stateChangePass = { this.props.stateChangePass } resetState={this.props.resetState}></ModalChangePass>
      </View>
    );
  }
}

// export default index;
export default connect(mapStateToProps, mapDispatchToProps)(index);