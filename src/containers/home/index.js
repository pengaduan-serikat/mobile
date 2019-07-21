import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import cases from '../../actions/cases';
import convertTgl from '../../utils/convertTgl';
import ListCase from '../../components/ListCase';
import { scale } from '../../utils/scaling';
import { vw } from '../../utils/viewPort';
import ModalAdd from '../../components/ModalAdd';
import addComplaint from '../../actions/addComplaint';

const mapStateToProps = state => ({
  listCase: state.listCase,
  stateAddComplaint : state.addComplaint
});

const mapDispatchToProps = dispatch => ({
  getCases: (navigation) => {
    dispatch(cases(navigation));
  },
  addComplaint: (navigation, data) => {
    dispatch(addComplaint(navigation, data))
  },
  resetState: () => {
    dispatch({type : 'ADD_COMPLAINT_RESET'})
  }
})

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      refreshing : false
    };
  }
  componentDidMount=()=>{
    this.props.getCases(this.props.navigation)
  }
  openModalAdd = () =>{
    this.refs.modalAdd.showModal()
  }
  addComplaint = ( data ) => {
    this.props.addComplaint( this.props.navigation, data )
  }
  refreshState = () => {
    this.setState({ refreshing : true })
    this.props.getCases(this.props.navigation)
    this.setState({ refreshing : false })
  }
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshState}
            ></RefreshControl>
          }
        >
          <View style={{paddingHorizontal:scale(40), paddingVertical:scale(50)}}>
            <View style={{paddingBottom:scale(30)}}>
              <TouchableOpacity onPress={this.openModalAdd} style={{backgroundColor:'#0c74c2', paddingVertical:scale(20), borderRadius:scale(5), alignItems:'center'}}>
                <Text style={{fontSize:4*vw, color:'white', fontWeight:'bold'}}>TAMBAHKAN PENGADUAN</Text>
              </TouchableOpacity>
            </View>
            <ListCase list={this.props.listCase.cases}></ListCase>
          </View>
        </ScrollView>
        <ModalAdd ref={'modalAdd'} addComplaint={this.addComplaint} stateAddComplaint={this.props.stateAddComplaint} resetState={this.props.resetState}></ModalAdd>
      </View>
    );
  }
}

// export default index;
export default connect(mapStateToProps, mapDispatchToProps)(index);