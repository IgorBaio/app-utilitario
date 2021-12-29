import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import currencies from "./dataCurrencies/currencies";
import { getCurrencyConversor } from "../../../service/currencyService";
import BottomModal from "../../components/BottomModal";
import RadioButton from "../../components/RadioButton";
import { Button, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyConverted } from "../../store/actions";
import { ConvertedValueText } from "../../components/ConvertedValueText";

export default () => {
  const [currenciesState, setCurrenciesState] = useState(currencies);
  const [selectedBaseValue, setSelectedBaseValue] = useState('USD');
  const [selectedTargetValue, setSelectedTargetValue] = useState('BRL');
  const [showModalBaseValue, setShowModalBaseValue] = useState(false);
  const [showModalTargetValue, setShowModalTargetValue] = useState(false);
  const [valueToConverter, setValueToConverter] = useState(null);
  const [valueConverted, setValueConverted] = useState(null);
  const convertedValue = useSelector(state=>state.currency.convertedValue)
  console.log('convertedValue', convertedValue)
  const dispatch = useDispatch()
  function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const convert = async () => {
    console.log('selectedBaseValue,selectedTargetValue')
    console.log(selectedBaseValue,selectedTargetValue,valueToConverter)
    dispatch(getCurrencyConverted({selectedBaseValue,selectedTargetValue,valueToConverter}))
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `#c0c0c0`,
          padding: 10,
        }}
        onPress={() => setShowModalBaseValue(true)}
      >
        <Text style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "70%",
          }}>
          {selectedBaseValue ? selectedBaseValue : "Selecione a moeda base"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#c0c0c0",
          padding: 10,
        }}
        onPress={() => {
          setShowModalTargetValue(true);
        }}
      ><Text style={{
        fontWeight: "bold",
        alignSelf: "center",
        lineHeight: 20,
        fontSize: 20,
        width: "100%",
      }}>
      {selectedTargetValue ? selectedTargetValue : "Selecione a moeda base"}
    </Text>
        
      </TouchableOpacity>
      <View
        style={{
          margin: "10%",
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}

      >
        <TextInput
          placeholder={"Digite um valor"}
          placeholderTextColor={"#888"}
          value={valueToConverter}
          onChangeText={(text) => setValueToConverter(text)}
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 25,
            fontSize: 20,
            width: "100%",
            borderColor: "#4F249D",
            borderWidth: 2,
            padding: 10
          }}
        />
        <Button style={{
          borderRadius: scaleHeight(30),
          marginTop: scaleHeight(30)
        }} mode='contained' onPress={convert}>
          <Text style={{ fontWeight: 'bold' }}>Converter</Text>
        </Button>
      </View>
      {convertedValue && <View
        style={{
          margin: scaleHeight(5),
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          // backgroundColor:'purple'
        }}

      >
        <ConvertedValueText
          >
            {convertedValue}    
          </ConvertedValueText>
      </View>}

      <BottomModal
        modalVisible={showModalBaseValue}
        setModalVisible={setShowModalBaseValue}
        title={"Selecione a moeda base"}
        content={
          <View>
            {currenciesState.map((currency, index) => {
              return (
                <View key={currency.id} style={{}}>
                  <RadioButton
                    label={toCapitalize(genre.name)}
                    labelStyle={{ color: "#fff", fontSize: 16, margin:'2%' }}
                    fillColor={"#4F249D"}
                    checkColor={"#4F249D"}
                    value={selectedBaseValue == genre.name}
                    onChange={() => setSelectedBaseValue(genre.name)}
                  />
                </View>
              );
            })}
          </View>
        }
      />
      <BottomModal
        modalVisible={showModalTargetValue}
        setModalVisible={setShowModalTargetValue}
        title={"Selecione a moeda alvo"}
        content={
          <View>
            {currenciesState.map((currency, index) => {
              return (
                <View key={currency.id} style={{}}>
                  <RadioButton
                    label={toCapitalize(genre.name)}
                    labelStyle={{ color: "#fff", fontSize: 16 }}
                    fillColor={"#4F249D"}
                    checkColor={"#4F249D"}
                    value={selectedTargetValue == genre.name}
                    onChange={() => setSelectedTargetValue(genre.name)}
                  />
                </View>
              );
            })}
          </View>
        }
      />
    </SafeAreaView>
  );
};
