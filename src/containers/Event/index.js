import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, RefreshControl } from 'react-native'
import { connect } from 'react-redux';
import events from "../../actions/events"
import List from '../../components/ListEvent';
import { scale } from '../../utils/scaling';

const mapStateToProps = state => ({
  listEvent: state.listEvent,
});
const mapDispatchToProps = dispatch => ({
  getEvents: (navigation , page) => {
    dispatch(events(navigation, page));
  },
})

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      page : 0,
      refreshing : false
    };
  }
  componentDidMount=()=>{
    this.getEvents(1)
  }
  refreshState = () => {
    this.setState({ refreshing : true })
    this.getEvents(0)
    this.setState({ refreshing : false })
  }
  getEvents=( next )=>{
    let page = this.state.page + next
    this.props.getEvents(this.props.navigation, page)
    this.setState({ page })
  }
  render() {
    return (
      <View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshState}
            ></RefreshControl>
          }
        >
          {
            this.props.listEvent.loading ? (
              <View style={{paddingTop:scale(100)}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
              </View>
            ) : (
              <View style={{paddingHorizontal:scale(40), paddingVertical:scale(50)}}>
                <List list={this.props.listEvent.events}></List>
              </View>
            )
          }
        </ScrollView>
        {/* <Text>Event</Text> */}
        {/* <Text>{JSON.stringify(this.props.listEvent)}</Text> */}
      </View>
    ); 
  }
}

// export default Event;
export default connect(mapStateToProps, mapDispatchToProps)(Event);