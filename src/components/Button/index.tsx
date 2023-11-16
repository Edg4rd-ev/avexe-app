import React from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonT } from '../../@types/Button';

export function Button({color, title, bgColor} : ButtonT) {
  return (
    <Pressable style={{
        backgroundColor:bgColor, 
        width:'80%', 
        padding:15, 
        alignItems:'center',
        borderRadius: 100,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1
      }}>
      <Text style={{color: color}}>{title}</Text>
    </Pressable>
  );
}