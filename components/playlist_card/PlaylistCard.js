import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {styles} from './PlaylistCardStyle';
import LinearGradient from 'react-native-linear-gradient';

export default class PlaylistCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const styling = this.props.style;
      const pressed = this.props.pressed;
      const item = this.props.item
      const title = item.attributes.name;
      const curator = item.attributes.curatorName;
      const artwork = item.attributes.artwork;
      const imageUrl = artwork.url.replace("{w}", "300").replace("{h}", "300");
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.shadow,{backgroundColor: artwork.bgColor}]} onPress={pressed}>
                <Image style={styles.image} source={{uri:imageUrl}}/>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text numberOfLines={1} style={[styles.title]}>{title}</Text>
          <Text numberOfLines={1} style={[styles.subtitle]}>{curator}</Text>
        </View>
      </View>
    );
  }
}
