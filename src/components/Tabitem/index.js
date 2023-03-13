import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconHome, IconPesanan, IconAkun} from '../../assets/icons';
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant';

const Tabitem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return <IconHome />;
    if (label === 'Pesanan') return <IconPesanan />;
    if (label === 'Akun') return <IconAkun />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Tabitem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    marginTop: 8,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    fontWeight: 'bold',
  }),
});
