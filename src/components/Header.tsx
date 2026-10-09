import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Props = {
  onMenuPress?: () => void;
};

export default function Header({
  onMenuPress,
}: Props) {
  return (
    <View style={styles.header}>

      <View style={styles.logoContainer}>
        <View style={styles.logoShape} />

        <View>
          <Text style={styles.logoText}>
            Pawsitive
          </Text>

          <Text style={styles.subtitle}>
            EDUCAÇÃO E CUIDADOS
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.menu}
        onPress={onMenuPress}
      >
        <Text style={styles.menuText}>
          Menu
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoShape: {
    width: 20,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#2A9D78',
    marginRight: 5,
  },

  logoText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#243F4F',
  },

  subtitle: {
    fontSize: 4,
    color: '#2A9D78',
  },

  menu: {
    borderWidth: 1,
    borderColor: '#243F4F',
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },

  menuText: {
    fontSize: 7,
    color: '#243F4F',
  },
});