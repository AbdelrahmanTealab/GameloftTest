import React, { Component } from 'react';
import { View, Text, FlatList, Linking, ActivityIndicator } from 'react-native';
import {styles} from './DetailsStyle';
import DetailsCard from '../../components/details_card/DetailsCard';
import DetailsHeader from '../../components/details_header/DetailsHeader';


export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA:null,
      imageUrl:null,
      bgColor:null,
    };
  }

  async fetchSession(){
    const {playlist_id} = this.props.route.params
    fetch('https://tealab-gameloft-test.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
              {
                getPlaylistDetailsByID(id:"${playlist_id}") {
                  relationships{
                    tracks{
                      data {
                        id
                        attributes{
                          name
                          artistName
                          durationInMillis
                          artwork{
                            url
                            
                          }
                        }
                      }
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
            DATA:result.data.getPlaylistDetailsByID[0].relationships.tracks.data
          })
          });
  }

  componentDidMount(){
    const {bgColor,imageUrl} = this.props.route.params
    this.setState({imageUrl:imageUrl,bgColor:bgColor})
    this.fetchSession()
  }

  playMusic(){
  }

  render() {    
    return (
      <View style={styles.container}>
        <FlatList 
            style={styles.flatlist}
            contentContainerStyle={{paddingBottom:'10%'}}
            data={this.state.DATA}
            ListHeaderComponent={()=><DetailsHeader bgColor={this.state.bgColor} imageUrl={this.state.imageUrl} />}
            renderItem={({item}) => <DetailsCard style={styles.card} item={item} pressed={()=>this.playMusic()} />}
            ListEmptyComponent={()=> <ActivityIndicator style={styles.indicator} size="large" color="#ffffff55" />}
            bounces={true}
            keyExtractor={item => item.id}   
        />
      </View>
    );
  }
}
