import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';

const InputForm = ({
  placeholder,
  value,
  icon,
  onChange,
  isValidate,
  validateText,
  borderStyle,
  placeholderTextColor,
  keyboardType,
  caretHidden,
  errorMessage,
}) => (
  <View style={styles.inputSpacing}>
    <View style={{ ...styles.inputFormContainer, ...borderStyle }}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => onChange(text)}
          style={styles.formStyle}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          caretHidden={caretHidden}
          secureTextEntry
        />
        {icon}
      </View>
    </View>
    {isValidate && (
      <View style={styles.wrapperErrorBlock}>
        <View style={styles.circleStyles}>
          <Text style={styles.symbolErrorStyles}>!</Text>
        </View>
        <Text style={styles.errorTextStyle}>{errorMessage}</Text>
      </View>
    )}
  </View>
);
export default InputForm;
