import React from 'react'
import {View,TouchableOpacity,Image,FlatList} from 'react-native'
import {Text} from 'react-native-paper';
import { API } from '../../api';
import HomeHeader from '../../components/HomeHeader'
import { screenWidth } from '../../constants/dimensions';
import styles from './styles'
import * as Actions from '../../store/actions';
import {useDispatch,useSelector} from 'react-redux';
import { createConfigItem } from '@babel/core';
import moment from 'moment';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const newsData = useSelector(state => state.stateContent.newsData);
  React.useEffect(()=>{
    fetchData()
  },[])
  const fetchById = (id)=>{
    API.getStoryById({
      success:(item)=>{
        dispatch({type:Actions.newsData,payload:item.data})
      },
      error:(error)=>{
      }
    },{
      id
    })
  }
  
  const fetchData = ()=>{
    API.getTopStories({
      success:(response)=>{
        let data = response.data;
        for(let i=0; i<data.length; i++){
          fetchById(data[i])
        }
      },
      error:(error)=>{

      }
    })
  }
  const loadNewStories = () =>{
    API.getNewStories({
      success:(response)=>{
        let data = response.data;
        for(let i=0; i<data.length; i++){
          fetchById(data[i])
        }
      },
      error:(error)=>{

      }
    })
  }

  const renderNews = (item, index) => {
    return (
      <TouchableOpacity
        // onPress={() => handleNewsDetails(item)}
        style={styles.newsContainer}
      >
        <Image
          source={require('../../assets/images/newsIcon.png')}
          style={styles.newsImage}
        />
        <View style={{ marginLeft: 12 }}>
          <Text weight="regular" style={{ width: screenWidth(65) }}>
            {item.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Trending Latest News</Text>
        <FlatList 
        data={newsData}
        renderItem={renderNews}
        keyExtractor={item => item.id}
        onEndReached={loadNewStories}
        onEndReachedThreshold={0.5}
      />
      </View>
    </View>
  )
}
