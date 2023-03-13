import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ImageHeader, Logo} from '../../assets/';
import {PesananAktif, Saldo} from '../../components/';
import {ButtonIcon} from '../../components/';
import {WARNA_ABU_ABU} from '../../utils/constant';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.textHello}>Selamat Datang,</Text>
            <Text style={styles.userHello}>Syafiq Fajrian Emha</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kiloan" type="btnLayanan" />
            <ButtonIcon title="Satuan" type="btnLayanan" />
            <ButtonIcon title="VIP" type="btnLayanan" />
            <ButtonIcon title="Karpet" type="btnLayanan" />
            <ButtonIcon title="Setrika Saja" type="btnLayanan" />
            <ButtonIcon title="Ekspress" type="btnLayanan" />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif noPesanan="20230004" statusPesanan="Masih dicuci" />
          <PesananAktif noPesanan="20230003" statusPesanan="Sudah selesai" />
          <PesananAktif noPesanan="20230002" statusPesanan="Sudah selesai" />
          <PesananAktif noPesanan="20230001" statusPesanan="Sudah selesai" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

// supaya responsive di semua ukuran layar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.04,
  },
  textHello: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  userHello: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    marginTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    marginBottom: 10,
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    paddingTop: 15,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
