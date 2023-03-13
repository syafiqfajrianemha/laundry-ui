import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconAddSaldo,
  IconEkspress,
  IconGetPoint,
  IconKarpet,
  IconKiloan,
  IconSatuan,
  IconSetrikaSaja,
  IconVip,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') return <IconAddSaldo />;
    if (title === 'Get Point') return <IconGetPoint />;
    if (title === 'Kiloan') return <IconKiloan />;
    if (title === 'Satuan') return <IconSatuan />;
    if (title === 'VIP') return <IconVip />;
    if (title === 'Karpet') return <IconKarpet />;
    if (title === 'Setrika Saja') return <IconSetrikaSaja />;
    if (title === 'Ekspress') return <IconEkspress />;
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.icon(type)}>
        <Icon />
      </View>
      <Text style={styles.textIcon(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: type => ({
    marginBottom: type === 'btnLayanan' ? 12 : 0,
    marginRight: type === 'btnLayanan' ? 30 : 0,
  }),
  icon: type => ({
    backgroundColor: WARNA_SEKUNDER,
    padding: type === 'btnLayanan' ? 12 : 7,
    borderRadius: 10,
  }),
  textIcon: type => ({
    fontSize: type === 'btnLayanan' ? 14 : 10,
    fontFamily:
      type === 'btnLayanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
});
