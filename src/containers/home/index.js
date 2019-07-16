import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import cases from '../../actions/cases';
import convertTgl from '../../utils/convertTgl';

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
  render() {
    return (
      <View>
        {
          this.props.listCase.cases.map((value, index)=>{
            return (
              <View style={{borderWidth:1}}>
                {/* <Text key={index}>{JSON.stringify(value)}--</Text> */}
                <Text key={index}>title : {value.title}</Text>
                <Text key={index}>description : {value.description}</Text>
                <Text key={index}>date : {convertTgl(value.created_at)}</Text>

              </View>
            )
          })
        }
      </View>
    );
  }
}

// export default index;
export default connect(mapStateToProps, mapDispatchToProps)(index);