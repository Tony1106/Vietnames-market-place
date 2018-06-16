import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  FlatList,
  Button,
  ListView

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window')


export default class PhotoUpload extends Component {

  render() {
    return (
    <View>
      <Image source={this.props.img} style={{height: 250, width: width, resizeMode: 'cover'}}/>
    </View>


    );
  }
}

const styles = StyleSheet.create({

})
