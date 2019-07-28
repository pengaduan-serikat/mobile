import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modalbox'
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';

class ModalAddFB extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      isOpen : false,
      errMsg : null,
      description : null
    };
  }
  showModal=()=>{
    this.setState({ isOpen : true })
    // this.refs.Modal.open()
  }
  closeModal=()=>{
    this.setState({ isOpen : false, errMsg:null, description: null })
    this.props.resetState()
  }
  actionAddFeedback = () => {
    this.setState({ errMsg : null })
    let description = { description : this.state.description }
    if(description.description){
      this.props.addFeedback(description)
    } else{
      this.setState({ errMsg : "Deskripsi harus terisi" })
    }
  }
  render() {
    let { err, errMsg, loading, success } = this.props.stateAddFeedback
    return (
      <Modal
      ref={"Modal"}
      style={{
        height:'75%',
        width:'80%',
        borderRadius:scale(5)
      }}
      onClosed={()=>this.closeModal()}
      position="center"
      isOpen={this.state.isOpen}
      // swipeToClose={false}
      backdropPressToClose={false}
      key={this.state.isOpen ? 1 : 2}
    >
      {
        success ? (
          <View style={{flex:1, alignItems:'center', paddingVertical:scale(10), paddingHorizontal:scale(15)}}>
            <View style={{width:'100%', alignItems:'flex-end'}}>
              <TouchableOpacity style={{padding:scale(10)}} onPress={this.closeModal}>
                <Text style={{fontSize:6*vw, color:'#8D8D8D'}}>x</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:'#8D8D8D', fontSize:5*vw, fontWeight:'700', textAlign:'center', paddingBottom:scale(20)}}>Berhasil menambahkan feedback</Text>
              <TouchableOpacity onPress={this.closeModal} style={{backgroundColor:'#5FC856', paddingHorizontal:scale(35), paddingVertical:scale(10), borderRadius:scale(30)}}>
                <Text style={{color:'white', fontSize:4*vw}}>KEMBALI</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{flex:1, alignItems:'center', paddingVertical:scale(10), paddingHorizontal:scale(15)}}>
            <View style={{width:'100%', alignItems:'flex-end'}}>
              <TouchableOpacity style={{padding:scale(10)}} onPress={this.closeModal}>
                <Text style={{fontSize:6*vw, color:'#8D8D8D'}}>x</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color:'#8D8D8D', fontSize:5*vw, fontWeight:'700'}}>Form Feedback</Text>
            <View style={{width:'100%', paddingHorizontal:scale(20), marginTop:scale(10)}}>
              <View style={ [styles.ContainerContent, {height:scale(140)}] }>
                <Text style={ styles.TitleStyle }>Deskripsi</Text>
                <TextInput style={ [styles.InputStyle , {height:120, textAlignVertical:'top'}]} multiline={true} value={this.state.description} onChangeText={(description)=>this.setState({ description })}></TextInput>
              </View>
            </View>
            <View style={{width:'100%', alignItems:'center', marginTop:scale(20)}}>
              {
                loading ? (
                  <ActivityIndicator size={'small'}></ActivityIndicator>
                ) : (
                  <TouchableOpacity onPress={this.actionAddFeedback} style={{backgroundColor:'#5FC856', paddingHorizontal:scale(35), paddingVertical:scale(10), borderRadius:scale(30)}}>
                    <Text style={{color:'white', fontSize:4*vw}}>SIMPAN</Text>
                  </TouchableOpacity>
                )
              }
            </View>
            {
              err ? (
                <Text style={{color:'#FF6948', paddingTop:scale(5), textAlign:'center'}}>{errMsg}</Text>
              ) : (
                <Text style={{color:'#FF6948', paddingTop:scale(5), textAlign:'center'}}>{this.state.errMsg}</Text>
              )
            }
          </View>
        )
      }
    </Modal>    
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
    borderRadius:scale(5)
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
    marginTop : scale(5)
  }
})
export default ModalAddFB;