import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../Styles/BowViewStyles';
import FilterIcon from '../Icons/FilterIcon';
import PenIcon from '../Icons/PenIcon';
import {useNavigation} from '@react-navigation/native';
import {enableLayoutAnimations} from 'react-native-reanimated';
import {panGestureHandlerCustomNativeProps} from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
//{item,navigation} =+props*
const ListItem = ({item, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Perfil', {data: item})}>
    <View style={styles.squareShape}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Image style={styles.fotostyle} source={item.avatar} />
        <View style={styles.textShape}>
          <Text style={styles.textNames}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={styles.textNamesTwo}>{item.area}</Text>
        </View>
      </View>
      <PenIcon />
    </View>
  </TouchableOpacity>
);

function Box({data}) {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({item}) => (
        <ListItem item={item} navigation={navigation} /*{...props}*/ />
      )}
      ListEmptyComponent={() => (
        <View>
          <Text style={{color: '#fff', fontSize: 24}}>No hay resultados</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={{height: 15, width: '100'}} />}
      style={{paddingTop: 15}}
      ListHeaderComponent={() => (
        <Text style={{color: '#fff'}}> Resultado de tu búsqueda </Text>
      )}
      stickyHeaderHiddenOnScroll
    />
  );
}
export default Box;
