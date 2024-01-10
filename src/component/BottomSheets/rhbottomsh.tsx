import React from 'react';
import {Text, View, Alert} from 'react-native';
import styles from '../Styles/styles';
import Input from '../AleBoxView/input';
import SearchIcon from '../Icons/SearchIcon';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import Calendar from '../Icons/Calendar';
import Documents from '../Icons/Documents';
import Copy from '../Icons/Copy';
import MapIcon from '../Icons/Map';

function RhSheet() {
  const information = [
    {
      name: 'Fecha de Ingreso',
      content: '04 de Septiembre de 2023',
    },
    {
      name: 'RFC',
      content: 'NATA9602',
    },
    {
      name: 'CURP',
      content: 'NATA960202MDFLML04',
    },
    {
      name: 'Dirección',
      content: 'AV. Del Imán, Tlalpan CDMX',
    },
    {
      name: 'NSS',
      content: '54781254NSS',
    },
    {
      name: 'CV',
      content: '...',
    },
  ];
  return (
    <View style={styles.squareShape}>
      <Text style={styles.textNames}>Información Personal </Text>
      <View>
        {information.map((item, index) => {
          return (
            <View style={styles.littleSquare} key={index}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iconsbs}>
                  <MapIcon />
                </View>
                <View style={styles.textShape}>
                  <Text style={styles.textBox}>{item.name}</Text>
                  <Text style={styles.textBoxtwo}>{item.content}</Text>
                </View>
              </View>
              <Copy />
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default RhSheet;
