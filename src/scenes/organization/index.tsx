import React, {
  useMemo,
  useRef,
  useState,
  useInsertionEffect,
  useEffect,
} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Input from '../../component/AleBoxView/input';
import Box from '../../component/AleBoxView';
import styles from '../../component/Styles/BowViewStyles';
import FilterIcon from '../../component/Icons/FilterIcon';
import NotificationIcon from '../../component/Icons/NotificationIcon';
import SearchIcon from '../../component/Icons/SearchIcon';
import ArrowIcon from '../../component/Icons/ArrowIcon';
import SettingIcon from '../../component/Icons/SettingIcon';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import FilterSheet from '../../component/BottomSheets';
import CloseCircleIcon from '../../component/Icons/CloseCircleIcon';
import {addNewPartner} from '../../Store/Reducers/teamReducers';

const team = [
  {
    avatar: require('../../component/Images/Avatar-base(6).png'),
    firstName: 'Amaury ',
    lastName: 'Almanza',
    area: 'CEO ',
    email: 'amaury@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(7).png'),
    firstName: 'Emilio ',
    lastName: 'Camargo',
    area: 'CTO ',
    email: 'emilio@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(8).png'),
    firstName: 'César ',
    lastName: 'Mendoza',
    area: 'VP ',
    email: 'cesar@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(9).png'),
    firstName: 'Claudia ',
    lastName: 'Rodríguez',
    area: 'Product',
    email: 'claudia@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(10).png'),
    firstName: 'Juan',
    lastName: 'Rivera',
    area: 'App MovileI',
    email: 'juan.ro@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(5).png'),
    firstName: 'Humberto ',
    lastName: 'Alonso',
    area: 'UX&UI Manager',
    email: 'humberto.am@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(4).png'),
    firstName: 'Luis ',
    lastName: 'Mota',
    area: 'Trainne UX&UI ',
    email: 'luis.mg@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(2).png'),
    firstName: 'César',
    lastName: 'Ramón',
    area: 'Trainne UX&UI ',
    email: 'maki@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(1).png'),
    firstName: 'Aline',
    lastName: 'Palacios',
    area: 'Trainne UX&UI ',
    email: 'aline.pd@maanyuba.com',
  },
  {
    avatar: require('../../component/Images/Avatar-base(3).png'),
    firstName: 'Nathali',
    lastName: 'Ortiz',
    area: 'Trainne UX&UI ',
    email: 'emilio@maanyuba.com',
  },
  {
    avatar: require('../../component/Images//Avatar-base.png'),
    firstName: 'Vanessa',
    lastName: 'Luna',
    area: 'Trainne UX&UI ',
    email: 'vanessa.lc@maanyuba.com',
  },
  {
    avatar: require('../../component/Images//Avatar-base.png'),
    firstName: 'Dylan',
    lastName: 'Torres',
    area: 'Developer',
    email: 'dylan.tc@maanyuba.com',
  },
];

function OrganScene() {
  const navigation = useNavigation();
  //ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '93%'], []);
  //hook
  const [searchText, setSearchText] = useState('');
  const [buttonActive, setButtonActive] = useState('all'); // "all" Vert todo - "mine" Mi equipo
  const [teamFilter, setTeamFilter] = useState([]);
  const [chips, setChips] = useState([]);
  const myArea = 'UX&UI';
  //console.log("search",team.filter((item)=> item.firstName.toLowerCase().includes(searchText.toLowerCase()) ))

  useEffect(() => {
    const arrayFilter = team.filter(item =>
      buttonActive === 'all' ? item : item.area.includes(myArea),
    );
    const newTeam = arrayFilter.filter(
      item =>
        item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchText.toLowerCase()),
    );
    setTeamFilter(newTeam);
  }, [buttonActive, searchText]);

  const deleteBySplice = chip => {
    const newArr = [...chips];
    newArr.splice(chip, 1);
    //console.log("id",chip)
    setChips(newArr);
  };
  const deleteByFilter = id => {
    setChips(prevState => prevState.filter(chip => chip.id != id));
  };
  console.log('id', chips);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowIcon />
          </TouchableOpacity>
          <Text style={styles.text}> Perfil Empresarial </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => console.log('Noti')}>
              <NotificationIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Setting')}>
              <SettingIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*SearchBar*/}
      <View style={styles.buttonSearch}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 100,
            height: 56,
            borderWidth: 0.5,
            borderColor: '#E8E8E9',
            paddingHorizontal: 24,
            alignItems: 'center',
          }}>
          <SearchIcon />
          <Input
            onChangeText={text => setSearchText(text)}
            style={{marginLeft: 12}}
            placeholderTextColor={'#333'}
            placeholder="Buscar en Mi empresa"
          />
        </View>
      </View>
      {/*Buttons Filter*/}
      <View style={styles.filter}>
        <View style={styles.buttonShape}>
          <Text style={styles.textFil}>Filtros</Text>
        </View>
        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.expand(BottomSheet)}
          style={styles.buttonShapeFour}>
          <FilterIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setButtonActive('mine')}
          style={[
            buttonActive === 'mine'
              ? styles.buttonShapeThree
              : styles.buttonShapeTwo,
          ]}>
          <Text
            style={[
              buttonActive === 'mine' ? styles.textFilThree : styles.textFiltwo,
            ]}>
            Mi equipo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setButtonActive('all')}>
          <View
            style={[
              buttonActive === 'all'
                ? styles.buttonShapeThree
                : styles.buttonShapeTwo,
            ]}>
            <Text
              style={[
                buttonActive === 'all'
                  ? styles.textFilThree
                  : styles.textFiltwo,
              ]}>
              Todos
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/*Filtros by bottomSheet*/}
      {chips.length ? (
        <View style={styles.fil}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            {chips.map(chip => (
              <View key={chip.id} style={styles.buttonShapeF}>
                <Text style={styles.textFilF}>{chip.labelKey}</Text>
                <TouchableOpacity onPress={() => deleteByFilter(chip.id)}>
                  {/*} ()=>deleteBySplice(item)}>*/}
                  <CloseCircleIcon />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      ) : null}

      {/*Content*/}
      <View style={styles.main}>
        <Box data={teamFilter} />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enableOverDrag
        enablePanDownToClose={true}
        backgroundStyle={{backgroundColor: '#fff'}}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            enableTouchThrough={false}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            style={[
              {backgroundColor: 'rgba(0, 0, 0, 1)'},
              StyleSheet.absoluteFillObject,
            ]}
          />
        )}>
        <ScrollView>
          <FilterSheet
            onClose={() => bottomSheetRef.current?.close()}
            updateFilter={setChips}
          />
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}
export default OrganScene;
