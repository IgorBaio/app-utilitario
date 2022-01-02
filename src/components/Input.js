import React from "react";
import styled from "styled-components/native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import commonStyles from "../../commonStyles";
import colors from "../../utils/colors";
const InputArea = styled.View`
  width: 90%;
  height: 60px;
  background-color: transparent;
  flex-direction: row;
  padding-left: 15px;
  align-items: center;
  justify-content: center;
  border: 2px;
  border-color: #fff;
  border-radius: 18px;
  margin-left: 4%;
  margin-right: 2%;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${(props) => props.colorInput || "#FFF"};
  margin-left: 10px;
`;

export default ({
  IconName,
  placeholder,
  value,
  onChangeText,
  password,
  borderColor,
}) => {
  return (
    <InputArea
      colorInput={commonStyles.colors.primary}
      style={{ borderColor: borderColor }}
    >
      {IconName && (
        <IconMaterial
          name={IconName}
          size={25}
          color={commonStyles.colors.textButtons}
        />
      )}
      <Input
        colorInput={borderColor || commonStyles.colors.primary}
        placeholder={placeholder}
        placeholderTextColor={
          borderColor ? colors.textPurple : "rgba(255,255,255,0.5)"
        }
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        style={{
          color: borderColor ? colors.textPurple : "rgba(255,255,255,0.5)",
        }}
      />
    </InputArea>
  );
};
