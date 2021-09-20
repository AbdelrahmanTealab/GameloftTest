import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {styles} from './DetailsCardStyle';
import LinearGradient from 'react-native-linear-gradient';

export default class DetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

  render() {
      const styling = this.props.style;
      const pressed = this.props.pressed;
      const item = this.props.item
      const title = item.attributes.name;
      const artist = item.attributes.artistName;
      const duration = item.attributes.durationInMillis;
      const artwork = item.attributes.artwork;
      const imageUrl = artwork.url.replace("{w}", "300").replace("{h}", "300");
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={pressed}>
          <View style={styles.row}>
            <Image style={styles.image} source={{uri:imageUrl}}/>
            <View style={styles.column}>
              <Text numberOfLines={2} style={styles.title}>{title}</Text>
              <Text numberOfLines={1} style={styles.artist}>{artist}</Text>
            </View>
            <Text style={styles.duration}>{this.millisToMinutesAndSeconds(duration)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
