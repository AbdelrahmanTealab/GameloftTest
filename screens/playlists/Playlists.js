import React, { Component } from 'react';
import { 
    Platform,
    View, 
    Text,
    FlatList,
    ActivityIndicator
    } 
from 'react-native';
import PlaylistCard from '../../components/playlist_card/PlaylistCard';
import {styles} from './PlaylistsStyle';

export default class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
        DATA: [],
        client: null,
    };
  }

  async fetchSession(){
      fetch('https://tealab-gameloft-test.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
              {
                getPlaylistDetails {
                  id
                  attributes {
                    playParams {
                      id
                    }
                    name
                    curatorName
                    artwork{
                      url
                      bgColor
                    }
                  }
                }
              }
            `
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            DATA:result.data.getPlaylistDetails
            })
          });
  }

  async componentDidMount(){

      this.fetchSession()
  }

  navigateToDetails(id,color,url){
    this.props.navigation.navigate('Details',
    {
      playlist_id:id,
      bgColor:color,
      imageUrl:url
    }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            style={styles.flatlist}
            contentContainerStyle={{paddingBottom:150}}
            data={this.state.DATA}
            numColumns={2}
            renderItem={({item}) => 
              <PlaylistCard style={styles.card} item={item} 
              pressed={()=>{
                this.navigateToDetails(
                  item.attributes.playParams.id,
                  item.attributes.artwork.bgColor,
                  item.attributes.artwork.url)
                }} />
            }
            bounces={true}
            keyExtractor={item => item.id}   
            ListEmptyComponent={()=> <ActivityIndicator style={styles.indicator} size="large" color="#ffffff55" />}
        />
      </View>
    );
  }
}

