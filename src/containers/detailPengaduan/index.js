import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import detailComplaintExecutor from '../../actions/detailComplaintExecutor';
import { scale } from '../../utils/scaling';
import { vw } from '../../utils/viewPort';
import convertTgl from '../../utils/convertTgl';
import ModalAddFB from '../../components/ModalAddFB';
import addFeedback from '../../actions/addFeedback'
import detailComplaint from '../../actions/detailComplaint'


const mapStateToProps = state => ({
  detailComplaint : state.detailComplaint,
  stateAddFeedback : state.addFeedback
});

const mapDispatchToProps = dispatch => ({
  detailComplaintExecutor: (navigation, id) => {
    dispatch(detailComplaintExecutor(navigation, id))
  },
  detailComplaint: (navigation, id) => {
    dispatch(detailComplaint(navigation, id))
  },
  addFeedback : (navigation, id, description) => {
    dispatch(addFeedback(navigation, id, description))
  },
  resetState: () => {
    // dispatch({type : 'DETAIL_COMPLAINT_RESET'})
    dispatch({type : 'ADD_FEEDBACK_RESET'})
  }
})
class DetailPengaduan extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading : false
    };
  }
  componentDidMount=()=>{
    let { id, user } = this.props.navigation.state.params
    // this.setState({ loading : true })
    if( user == 'executor'){
      this.props.detailComplaintExecutor(this.props.navigation, id)
    } else if( user == 'user'){
      this.props.detailComplaint(this.props.navigation, id)
    }
  }
  openModal = () => {
    this.refs.modalAddFB.showModal()
  }
  addFeedback = ( description  ) => {
    let { id } = this.props.navigation.state.params
    this.props.addFeedback( this.props.navigation, id, description )
  }
  render() {
    let { id, user } = this.props.navigation.state.params
    let { data, loading, err, errMsg } = this.props.detailComplaint
    return (
      <View style={{paddingHorizontal:scale(40), paddingVertical:scale(30), flex:1}}>
        {/* <Text>detail pengaduan</Text> */}
        {/* <Text>{JSON.stringify(id)}</Text>
        <Text>{JSON.stringify(user)}</Text> */}
        {
         loading ? (
           <View style={{paddingTop:scale(100)}}>
             <ActivityIndicator size={'large'}></ActivityIndicator>
           </View>
         ) : (
          err ? (
            <View style={{paddingTop:scale(100)}}>
              <Text style={{color:'#FF6948', paddingTop:scale(5), textAlign:'center'}}>{errMsg}</Text>
            </View>
          ) : (
            <View>
              {/* <Text>{JSON.stringify(data)}</Text> */}
              <Text style={styles.titleStyle}>Title</Text>
              <Text style={styles.textStyle}>{data.title}</Text>
              <Text style={styles.titleStyle}>Deskripsi</Text>
              <Text style={styles.textStyle}>{data.description}</Text>
              <Text style={styles.titleStyle}>Nama Pengadu</Text>
              <Text style={styles.textStyle}>{data.user_full_name}</Text>
              <Text style={styles.titleStyle}>Nama Executor</Text>
              <Text style={styles.textStyle}>{data.executor_full_name}</Text>
              <View style={{ flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Text style={styles.titleStyle}>Tanggal</Text>
                  <Text style={styles.textStyle}>{convertTgl(data.created_at)}</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.titleStyle}>Status</Text>
                  <Text style={styles.textStyle}>{data.case_status}</Text>
                </View>
              </View> 
              {
                data.case_status == "Completed" ? (
                  <View>
                    <Text style={styles.titleStyle}>Feedback</Text>
                    <Text style={styles.textStyle}>{data.feedback || "-"}</Text>
                  </View>
                ) : (
                  data.case_status == "In Progress" && (
                    user == 'executor' ? (
                      <View style={{alignItems:'center', marginTop:scale(50)}}>
                        <TouchableOpacity onPress={this.openModal} style={{backgroundColor:'#0c74c2', paddingVertical:scale(20), paddingHorizontal:scale(35), borderRadius:scale(5)}}>
                          {/* <Text>Tambahkan Feedback</Text> */}
                          <Text style={{fontSize:4*vw, color:'white', fontWeight:'bold'}}>TAMBAHKAN FEEDBACK</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View>
                        <Text style={styles.titleStyle}>Feedback</Text>
                        <Text style={styles.textStyle}>{data.feedback || "-"}</Text>
                      </View>
                    )
                  )
                )
              }
            </View>
          )
         )
        }
        <ModalAddFB ref={'modalAddFB'} id={id} addFeedback={this.addFeedback} stateAddFeedback={this.props.stateAddFeedback} resetState={this.props.resetState}></ModalAddFB>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleStyle : {
    color:'#8D8D8D',
    fontWeight: 'bold',
    fontSize: 3*vw
  },
  textStyle :{
    color:'#6F6E6E',
    paddingLeft:scale(10),
    paddingBottom:scale(20)
  }
})
// export default DetailPengaduan;
export default connect(mapStateToProps, mapDispatchToProps)(DetailPengaduan);