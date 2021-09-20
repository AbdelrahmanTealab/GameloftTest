import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import {styles} from './DetailsHeaderStyle';

export default class DetailsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imageUrl: null,
    };
  }

  componentDidMount(){
    this.setState({
      imageUrl: this.props.imageUrl != null ? this.props.imageUrl.replace("{w}", "300").replace("{h}", "300") : null,
      bgColor: this.props.bgColor != null ? this.props.bgColor : null
    })
  }

    render() {
        return (
        <View style={[styles.banner,{backgroundColor: `#${this.state.bgColor}`}]}>
          <Image source={{uri:this.state.imageUrl}} style={styles.image}/>
        </View>
        )
    }
}
