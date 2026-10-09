import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BottomNavProps {
  onHome: () => void;
  onCourses: () => void;
  onContact: () => void;
}

export default function BottomNav({ onHome, onCourses, onContact }: BottomNavProps) {
  return (
    <View style={styles.navContainer}>
      
      {/* Botão Lar / Home */}
      <TouchableOpacity style={styles.navItem} onPress={onHome}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* Botão Explore / Programs */}
      <TouchableOpacity style={styles.navItem} onPress={onCourses}>
        <Text style={styles.navText}>Explore</Text>
      </TouchableOpacity>

      {/* Botão Contato */}
      <TouchableOpacity style={styles.navItem} onPress={onContact}>
        <Text style={styles.navText}>Contato</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3D3B30', // Cor escura do seu menu na foto
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,       
  elevation: 99,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});