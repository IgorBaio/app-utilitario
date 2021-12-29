import React from 'react';
import PropTypes from "prop-types"
import { View, TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';

export default function RadioButton(props) {
  
  function handleChange() {
    const { onChange } = props;
    if (onChange) {
      return onChange();
    }
  }
  // console.log('props')
  // console.log(props.label)
  return (
    <View style={styles.WrapperCheckBox}>
      <TouchableOpacity onPress={handleChange} style={[
        styles.CheckBox,
        { borderColor: props.checkColor ? props.checkColor : '#fff' }
      ]}>
        {
          props.value ? <View
            style={[{
              backgroundColor: props.fillColor ? props.fillColor : '#fff'
            }, styles.fill]}
          /> : null
        }
      </TouchableOpacity>
      <Pressable onPress={handleChange}>
        {/* <Text style={[styles.LabelCheck, props.labelStyle]}> */}
        <Text style={styles.LabelCheck}>
            {props.label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:20
  },
  fill:{
      width:10,
      height:10,
      borderRadius:10
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    margin: '2%',
    
  },
  LabelCheck: {
    color: '#000',
    marginLeft: 6,
    fontSize:18,
    fontWeight:'700'
  }
})

RadioButton.propTypes = {
  label: PropTypes.object,
  labelStyle: PropTypes.object,
  iconColor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.boolean,
  checkColor: PropTypes.string
}
