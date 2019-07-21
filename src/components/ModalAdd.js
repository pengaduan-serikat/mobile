import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modalbox'
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';
// import { scale } from '../../../assets/scaling';
// import { vw } from '../../../assets/viewport';

class ModalAdd extends Component { //title, Press
  constructor(props) {
    super(props);
    this.state = {  
      isOpen : false,
      title : null,
      description : null,
      errMsg : null
    };
  }
  showModal=()=>{
    this.setState({ isOpen : true })
    // this.refs.Modal.open()
  }
  closeModal=()=>{
    this.setState({ isOpen : false, errMsg:null, title: null, description: null })
    // this.setState({ isOpen : false })
    // this.refs.Modal.close()
  }
  actionAddComplaint = () => {
    this.setState({ errMsg : null })
    let data = {
      title : this.state.title,
      description : this.state.description
    }
    if(data.title && data.description){
      // this.setState({ errMsg : 'udah keisi semua' })
      this.props.addComplaint(data)
    } else{
      this.setState({ errMsg : "Semua field harus terisi" })
    }
  }
  componentDidUpdate = () => {
    if(this.props.stateAddComplaint.success){
      this.closeModal()
      this.props.resetState()
    }
  }
  render() {
    let { err, errMsg, loading } = this.props.stateAddComplaint
    return (
      <Modal
        ref={"Modal"}
        style={{
          height:'85%',
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
        <View style={{flex:1, alignItems:'center', paddingVertical:scale(10), paddingHorizontal:scale(15)}}>
          <View style={{width:'100%', alignItems:'flex-end'}}>
            <TouchableOpacity style={{padding:scale(10)}} onPress={this.closeModal}>
              <Text style={{fontSize:6*vw, color:'#8D8D8D'}}>x</Text>
            </TouchableOpacity>
          </View>
          <Text style={{color:'#8D8D8D', fontSize:5*vw, fontWeight:'700'}}>Form Pengaduan</Text>
          <View style={{width:'100%', paddingHorizontal:scale(20), marginTop:scale(10)}}>
            <View style={ [styles.ContainerContent, {height:scale(65)}] }>
              <Text style={ styles.TitleStyle }>Judul Pengaduan</Text>
              <TextInput style={ [styles.InputStyle, {height:scale(40), textAlignVertical:'top'}] } multiline={true} value={this.state.title} onChangeText={(title)=>this.setState({ title })}></TextInput>
            </View>
            <View style={ [styles.ContainerContent, {height:scale(150)}] }>
              <Text style={ styles.TitleStyle }>Deskripsi Pengaduan</Text>
              <TextInput style={ [styles.InputStyle , {height:130, textAlignVertical:'top'}]} multiline={true} value={this.state.description} onChangeText={(description)=>this.setState({ description })}></TextInput>
            </View>
          </View>
          <View style={{width:'100%', alignItems:'center', marginTop:scale(20)}}>
            {
              loading ? (
                <ActivityIndicator size={'small'}></ActivityIndicator>
              ) : (
                <TouchableOpacity onPress={this.actionAddComplaint} style={{backgroundColor:'#5FC856', paddingHorizontal:scale(35), paddingVertical:scale(10), borderRadius:scale(30)}}>
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
export default ModalAdd;