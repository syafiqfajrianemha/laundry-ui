import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {IconPesananAktif} from '../../assets';
import {WARNA_UTAMA, WARNA_WARNING} from '../../utils/constant';

const PesananAktif = ({noPesanan, statusPesanan}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananAktif />
      <View style={styles.pesanan}>
        <Text style={styles.title}>Pesanan No. {noPesanan}</Text>
        <Text style={styles.status(statusPesanan)}>{statusPesanan}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: 'center',
  },
  pesanan: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  status: statusPesanan => ({
    color: statusPesanan === 'Sudah selesai' ? WARNA_UTAMA : WARNA_WARNING,
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
  }),
});
