import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import cases from '../../actions/cases';
import convertTgl from '../../utils/convertTgl';
import ListCase from '../../components/ListCase';
import { scale } from '../../utils/scaling';
import { vw } from '../../utils/viewPort';
import ModalAdd from '../../components/ModalAdd';
import addComplaint from '../../actions/addComplaint';
import AsyncStorage from '@react-native-community/async-storage';
import casesExecutor from '../../actions/casesExecutor';

const mapStateToProps = state => ({
  listCase: state.listCase,
  stateAddComplaint : state.addComplaint
});

const mapDispatchToProps = dispatch => ({
  getCases: (navigation) => {
    dispatch(cases(navigation));
  },
  getCasesExecutor: (navigation) => {
    dispatch(casesExecutor(navigation));
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
      refreshing : false,
      user : null
    };
  }
  componentDidMount= async () =>{
    try{
      const accessId = await AsyncStorage.getItem('accessId')
      if( accessId == 2 ){
        this.setState({ user : "user" })
        this.props.getCases(this.props.navigation)
      } else if( accessId == 3 ){
        this.setState({ user : "executor" })
        this.props.getCasesExecutor(this.props.navigation)
      }
    } catch(err){

    }
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
          {
            this.props.listCase.loading ? (
              <View style={{paddingTop:scale(50)}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
              </View>
            ) : (
              <View style={{paddingHorizontal:scale(40), paddingVertical:scale(50)}}>
                {
                  this.state.user === 'user' && (
                    <View style={{paddingBottom:scale(30)}}>
                      <TouchableOpacity onPress={this.openModalAdd} style={{backgroundColor:'#0c74c2', paddingVertical:scale(20), borderRadius:scale(5), alignItems:'center'}}>
                        <Text style={{fontSize:4*vw, color:'white', fontWeight:'bold'}}>TAMBAHKAN PENGADUAN</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
                <ListCase list={this.props.listCase.cases} user={this.state.user} navigation={this.props.navigation}></ListCase>
              </View>
            )
          }
        </ScrollView>
        <ModalAdd ref={'modalAdd'} addComplaint={this.addComplaint} stateAddComplaint={this.props.stateAddComplaint} resetState={this.props.resetState}></ModalAdd>
      </View>
    );
  }
}

// export default index;
export default connect(mapStateToProps, mapDispatchToProps)(index);