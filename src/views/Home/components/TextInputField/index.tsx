import React from 'react';
import { TextInputField } from './styles';
import { TextInputProps } from 'react-native';

export default function TextInputContainer({
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
}: TextInputProps) {
  return (
    <TextInputField
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      value={value}
    />
  );
}
