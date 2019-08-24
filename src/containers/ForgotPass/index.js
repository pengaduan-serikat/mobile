import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import { scale } from '../../utils/scaling';
import { vw } from '../../utils/viewPort';
import { connect } from 'react-redux';
import forgotPass from '../../actions/forgotPass'

const mapStateToProps = state => ({
  reducerforgotPass : state.forgotPass
});
const mapDispatchToProps = dispatch => ({
  forgotPass: ( navigation, email ) => {
    dispatch(forgotPass(navigation, email));
  },
});
class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      errMsg : null,
      email : null
    };
  }
  forgotPass = (email) => {
    this.props.forgotPass( this.props.navigation, email)
  }
  sendEmail = () => {
    this.setState({ errMsg : null })

    if( !this.state.email ){
      this.setState({ errMsg : "Email harus terisi." })
    } else{
      this.forgotPass(this.state.email)
    }
  }
  render() {
    let { loading, err, errMsg, success, successMsg } = this.props.reducerforgotPass

    return (
      <View style={{flex:1, alignItems:'center', paddingVertical:scale(10), paddingHorizontal:scale(15)}}>
        <Text style={{color:'#8D8D8D', fontSize:5*vw, fontWeight:'700'}}>Forgot Password</Text>
        <View style={{width:'100%', paddingHorizontal:scale(20), marginTop:scale(10)}}>
          <View style={ [styles.ContainerContent, {marginBottom:scale(20)}] }>
            <Text style={ styles.TitleStyle }>Email</Text>
            <TextInput style={ styles.InputStyle } autoCapitalize={'none'} value={this.state.email} onChangeText={(email)=>this.setState({ email })}></TextInput>
          </View>
        </View>
        <View>
        {
          loading ? (
            <ActivityIndicator size={'small'}></ActivityIndicator>
          ) : (
            <TouchableOpacity onPress={this.sendEmail} style={{backgroundColor:'#5FC856', paddingHorizontal:scale(35), paddingVertical:scale(10), borderRadius:scale(30)}}>
                <Text style={{color:'white', fontSize:4*vw}}>Send</Text>
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
    );
  }
}
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
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);
// export default ForgotPass;