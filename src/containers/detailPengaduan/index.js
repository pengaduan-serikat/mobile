import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import detailComplaintExecutor from '../../actions/detailComplaintExecutor';
import { scale } from '../../utils/scaling';
import { vw } from '../../utils/viewPort';
import convertTgl from '../../utils/convertTgl';
import ModalAddFB from '../../components/ModalAddFB';
import addFeedback from '../../actions/addFeedback'
import detailComplaintUser from '../../actions/detailComplaint'
import convertTglWithTime from '../../utils/convertTglWithTime';


const mapStateToProps = state => ({
  detailComplaint : state.detailComplaint,
  stateAddFeedback : state.addFeedback
});

const mapDispatchToProps = dispatch => ({
  detailComplaintExecutor: (navigation, id) => {
    dispatch(detailComplaintExecutor(navigation, id))
  },
  detailComplaintUser: (navigation, id) => {
    dispatch(detailComplaintUser(navigation, id))
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
      this.props.detailComplaintUser(this.props.navigation, id)
    }
  }
  openModal = () => {
    this.refs.modalAddFB.showModal()
  }
  addFeedback = ( description  ) => {
    let { id } = this.props.navigation.state.params
    this.props.addFeedback( this.props.navigation, id, description )
  }
  colorCase = (caseStatus) => {
    if(caseStatus == 'Submitted'){
      return "#F9D12B" // F9D12B
    } else if( caseStatus == "In Progress" ){
      return "#006DBF"
    } else if( caseStatus == "Completed" ){
      return "#48C2FF"
    }
  }
  render() {
    let { id, user } = this.props.navigation.state.params
    let { data, loading, err, errMsg } = this.props.detailComplaint
    
    return (
      <View>     
        <ScrollView>
          <View style={{paddingHorizontal:scale(40), paddingVertical:scale(30), flex:1}}>
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
                data.case && (
                  <View>
                    {
                      ( data.feedbacks.length == 2 && user == 'executor' ) && (
                        <View style={{alignItems:'center', marginVertical:scale(20)}}>
                          <TouchableOpacity onPress={this.openModal} style={{backgroundColor:'#0c74c2', paddingVertical:scale(20), paddingHorizontal:scale(35), borderRadius:scale(5)}}>
                            <Text style={{fontSize:4*vw, color:'white', fontWeight:'bold'}}>TAMBAHKAN FEEDBACK</Text>
                          </TouchableOpacity>
                        </View>
                      )
                    }
                    <Text style={styles.titleStyle}>Title</Text>
                    <Text style={styles.textStyle}>{ data.case.title || "-" }</Text>
                    <Text style={styles.titleStyle}>Deskripsi</Text>
                    <Text style={styles.textStyle}>{data.case.description || "-" }</Text>
                    <Text style={styles.titleStyle}>Nama Pengadu</Text>
                    <Text style={styles.textStyle}>{data.case.user_full_name || "-" }</Text>
                    <Text style={styles.titleStyle}>Nama Executor</Text>
                    <Text style={styles.textStyle}>{ data.case.executor_full_name || "-" }</Text>
                    <Text style={styles.titleStyle}>Tanggal</Text>
                    <Text style={styles.textStyle}>{ data.case.created_at ? convertTgl(data.case.created_at) : "-" }</Text>
                    <Text style={styles.titleStyle}>Riwayat Pengaduan</Text>
                    <View style={{ width:scale(20), alignItems:'center', marginLeft:scale(10), height:scale(20)}}>
                      <View style={{flex:1, borderWidth:1, borderColor:'#C4C4C4'}}></View>
                    </View>
                    {
                      data.feedbacks.map(( item, index ) => {
                        return(
                          <View key={index} style={{ marginLeft:scale(10), flexDirection:'row'}}>
                            {
                              index == (data.feedbacks.length - 1) ? (
                                <View style={{ width:scale(20), alignItems:'center'}}>
                                  <View style={{width:scale(7), height:scale(7), backgroundColor:this.colorCase(item.case_status),borderRadius:scale(30)}}></View>
                                </View>
                              ):(
                                <View style={{ width:scale(20), alignItems:'center'}}>
                                  <View style={{width:scale(7), height:scale(7), backgroundColor:this.colorCase(item.case_status),borderRadius:scale(30)}}></View>
                                  <View style={{flex:1, borderWidth:1, borderColor:'#C4C4C4'}}></View>
                                </View>
                              )
    
                            }
                            <View style={{marginLeft:scale(5)}}>
                              <Text style={{color:'#8D8D8D', fontFamily:'Montserrat-Regular', fontSize:3*vw}}>{convertTglWithTime(item.created_at)} - <Text style={{fontFamily:'Montserrat-Italic'}}>{item.case_status}</Text></Text>
                              <Text style={{paddingBottom:scale(20),paddingTop:scale(3), fontFamily:'OpenSans-Regular', color:'#6F6E6E', fontSize:3.7*vw}}>Desc : {item.description}</Text>
                            </View>
                          </View>
                        )
                      })
                    }
                  </View>
                )
              )
            )
            }
          </View>
        </ScrollView>
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