import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import changePassword from '../../actions/changePassword';
import { scale } from '../../utils/scaling';
import { vw } from '../../utils/viewPort';

const mapStateToProps = state => ({
  stateChangePass : state.changePassword
});
const mapDispatchToProps = dispatch => ({
  changePassword: (navigation, data) => {
    dispatch(changePassword(navigation, data))
  },
})
class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      oldPassword : null,
      newPassword : null,
      konfirmasiPassword : null,
      errMsg : null
    };
  }
  
  check = () => {
    let { oldPassword, newPassword, konfirmasiPassword } = this.state
    this.setState({ errMsg : null })
    if( oldPassword && newPassword && konfirmasiPassword ){
      if( newPassword == konfirmasiPassword ){
        if( newPassword.length >= 6 ){
          // this.setState({ errMsg : "Semua fudah sesuai" })
          let data = { oldPassword, newPassword }
          this.props.changePassword(data)
        } else{
          this.setState({ errMsg : "Password harus berisi minimal 6 karakter" })          
        }
      } else{
        this.setState({errMsg: 'Password baru & Konfirmasi Password harus sesuai' })
      }
    } else{
      this.setState({ errMsg : "Semua field harus terisi" })
    }
  }
  render() {
    let { loading, err, errMsg, success, successMsg } = this.props.stateChangePass

    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{ paddingVertical:scale(10), paddingHorizontal:scale(15), alignItems:'center' }}>
            <Text style={{color:'#8D8D8D', fontSize:5*vw, fontWeight:'700'}}>Ubah Password</Text>
            <View style={{width:'100%', paddingHorizontal:scale(20), marginTop:scale(10)}}>
              <View style={ [styles.ContainerContent, {marginBottom:scale(20)}] }>
                <Text style={ styles.TitleStyle }>Password lama</Text>
                <TextInput style={ styles.InputStyle } autoCapitalize={'none'} secureTextEntry={true} value={this.state.oldPassword} onChangeText={(oldPassword)=>this.setState({ oldPassword })}></TextInput>
              </View>
              {/* <View style={styles.Line}></View> */}
              <View style={ styles.ContainerContent }>
                <Text style={ styles.TitleStyle }>Password baru</Text>
                <TextInput style={ styles.InputStyle } autoCapitalize={'none'} secureTextEntry={true} value={this.state.newPassword} onChangeText={(newPassword)=>this.setState({ newPassword })}></TextInput>
              </View>
              <View style={ styles.ContainerContent }>
                <Text style={ styles.TitleStyle }>Konfirmasi password</Text>
                <TextInput style={ styles.InputStyle } autoCapitalize={'none'} secureTextEntry={true} value={this.state.konfirmasiPassword} onChangeText={(konfirmasiPassword)=>this.setState({ konfirmasiPassword })}></TextInput>
              </View>
            </View>
            <View style={{paddingTop:scale(20)}}>
              {
                loading ? (
                  <ActivityIndicator size={'small'}></ActivityIndicator>
                ) : (
                  <TouchableOpacity onPress={this.check} style={{backgroundColor:'#5FC856', paddingHorizontal:scale(35), paddingVertical:scale(10), borderRadius:scale(30)}}>
                      <Text style={{color:'white', fontSize:4*vw}}>SIMPAN</Text>
                  </TouchableOpacity>
                )
              }
            </View>
            {
              success ? (
                <Text style={{color:'#5FC856', paddingTop:scale(5), textAlign:'center'}}>{successMsg}</Text>
              ) : (
                err ? (
                  <Text style={{color:'#FF6948', paddingTop:scale(5), textAlign:'center'}}>{errMsg}</Text>
                ) : (
                  <Text style={{color:'#FF6948', paddingTop:scale(5), textAlign:'center'}}>{this.state.errMsg}</Text>
                )
              )
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

// export default ChangePass;
const styles = StyleSheet.create({
  ContainerContent : {
    paddingVertical : scale(10),
    borderWidth:1, 
    borderColor:'#C4C4C4', 
    paddingHorizontal:scale(10),
    marginTop:scale(15),
    borderRadius:scale(5),
    height:scale(65)
    // backgroundColor:'pink',
  },
  TitleStyle : {
    // fontFamily : 'Montserrat-Regular',
    fontSize : 3*vw,
    color : '#8D8D8D'
  }, 
  InputStyle : {
    padding:0,
    // fontFamily:'OpenSans-Regular', 
    fontSize:4*vw,
    color:'#6F6E6E',
    paddingVertical:scale(5)
  },
  Line : {
    borderWidth:1,
    borderColor:'#C4C4C4',
    marginTop : scale(5),
    // position: 'relative'
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);