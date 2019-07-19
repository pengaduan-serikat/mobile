import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'
import { scale } from '../utils/scaling';
import { vw } from '../utils/viewPort';
// import { scale } from '../../../assets/scaling';
// import { vw } from '../../../assets/viewport';

class ModalAdd extends Component { //title, Press
  constructor(props) {
    super(props);
    this.state = {  
      isOpen : false
    };
  }
  showModal=()=>{
    this.setState({ isOpen : true })
    // this.refs.Modal.open()
  }
  closeModal=()=>{
    this.setState({ isOpen : false })
    // this.refs.Modal.close()
  }
  render() {
    return (
      <Modal
        ref={"Modal"}
        style={{
          height:'80%',
          width:'80%',
          borderRadius:scale(5)
        }}
        onClosed={()=>this.setState({ isOpen : false })}
        position="center"
        isOpen={this.state.isOpen}
        key={this.state.isOpen ? 1 : 2}
      >
        <View style={{flex:1, alignItems:'center', paddingVertical:scale(10), paddingHorizontal:scale(15)}}>
          <View style={{backgroundColor:'khaki'}}>

            <Text style={{fontSize:6*vw}}>x</Text>
          </View>
          <Text>TEsttttt</Text>
        </View>
      </Modal>
    );
  }
}

export default ModalAdd;