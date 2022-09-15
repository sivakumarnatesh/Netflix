/* eslint-disable prettier/prettier */
import { View, Text ,StyleSheet, Image, SafeAreaView} from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import data from '../../modal/data';
import { Searchbar } from 'react-native-paper';
import { FIND_ACTIVE } from '../../assets/images';

const Flatlist = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const renderItem = (item) => {
   return(
    <View style={styles.flatContent} >
      <Image style={styles.flatImage}
       source={item.image}/>
      <Text style={styles.movieName} >
            {item.title}
      </Text>
    </View>
)};
return (

  <SafeAreaView style={styles.container}>
    <Searchbar
      placeholder="Search by movie name"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchBar}
      icon={() => <Image name={FIND_ACTIVE} size={30} />}
    />
  <Text style={styles.Title}>Explore what’s streaming</Text>
  <FlatList data={data}
   horizontal={true}
   renderItem={({item}) => renderItem(item)}
   />

  </SafeAreaView>
)}

export default Flatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ScrollView: 100,
  },
  flatContent:{
    marginHorizontal: 12,
    marginTop:20,
  },
  flatImage:{
    height:200,
    width:200,
    borderRadius:10,
    padding:10,
  },
  movieName:{
    color:'yellow',
    fontSize:15,
    marginTop:10,
  },
  Title:{
    color:'yellow',
    fontSize:25,
    marginTop:20,
    marginLeft:12,
  },
  searchBar:{
    borderRadius:15,
    flexDirection:'row',
    marginLeft:12,
    marginRight:12,
    marginTop:20,
    borderColor:'grey',
    borderWidth:1,
  },
});
