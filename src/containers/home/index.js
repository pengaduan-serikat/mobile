import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import cases from '../../actions/cases';
import convertTgl from '../../utils/convertTgl';
import ListCase from '../../components/ListCase';
import { scale } from '../../utils/scaling';
import { vw } from '../../utils/viewPort';
import ModalAdd from '../../components/ModalAdd';

const mapStateToProps = state => ({
  listCase: state.listCase
});

const mapDispatchToProps = dispatch => ({
  getCases: (navigation) => {
    dispatch(cases(navigation));
  }
})

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount=()=>{
    this.props.getCases(this.props.navigation)
  }
  openModalAdd = () =>{
    this.refs.modalAdd.showModal()
  }
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{paddingHorizontal:scale(40), paddingVertical:scale(50)}}>
            <View style={{paddingBottom:scale(30)}}>
              <TouchableOpacity onPress={this.openModalAdd} style={{backgroundColor:'#0c74c2', paddingVertical:scale(20), borderRadius:scale(5), alignItems:'center'}}>
                <Text style={{fontSize:4*vw, color:'white', fontWeight:'bold'}}>TAMBAHKAN</Text>
              </TouchableOpacity>
            </View>
            <ListCase list={this.props.listCase.cases}></ListCase>
          </View>
        </ScrollView>
        <ModalAdd ref={'modalAdd'}></ModalAdd>
      </View>
    );
  }
}

// export default index;
export default connect(mapStateToProps, mapDispatchToProps)(index);