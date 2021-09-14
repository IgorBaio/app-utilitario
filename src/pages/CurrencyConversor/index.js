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
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyConverted } from "../../store/actions";

export default () => {
  const [currenciesState, setCurrenciesState] = useState(currencies);
  const [selectedBaseValue, setSelectedBaseValue] = useState('usd');
  const [selectedTargetValue, setSelectedTargetValue] = useState('brl');
  const [showModalBaseValue, setShowModalBaseValue] = useState(false);
  const [showModalTargetValue, setShowModalTargetValue] = useState(false);
  const [valueToConverter, setValueToConverter] = useState(null);
  const [valueConverted, setValueConverted] = useState(null);
  const convertedValue = useSelector(state=>state.convertedValue)
  console.log(convertedValue)
  const dispatch = useDispatch()
  function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  const convert = async () => {
    console.log('selectedBaseValue,selectedTargetValue')
    console.log(selectedBaseValue,selectedTargetValue,valueToConverter)
    dispatch(getCurrencyConverted({selectedBaseValue,selectedTargetValue}))
    // let value = await getCurrencyConversor(selectedBaseValue, selectedTargetValue)
    // console.log('value')
    // console.log(value)
    // value = ( parseFloat(valueToConverter) * value).toFixed(2);
    // setValueConverted(value)
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          padding: 10,
        }}
        onPress={() => setShowModalBaseValue(true)}
      >
        {/* <TextInput
          placeholder={"Selecione a moeda base"}
          placeholderTextColor={"#888"}
          value={selectedBaseValue}
          disabled
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "100%",
          }}
        /> */}
        <Text style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "100%",
          }}>
          {selectedBaseValue ? selectedBaseValue : "Selecione a moeda base"}
        </Text>
          {/* placeholder={"Selecione a moeda base"}
          placeholderTextColor={"#888"}
          value={selectedBaseValue}
          disabled
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "100%",
          }}
        /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          padding: 10,
        }}
        onPress={() => {
          setShowModalTargetValue(true);
        }}
      >
        <TextInput
          placeholder={"Selecione a moeda alvo"}
          placeholderTextColor={"#888"}
          value={selectedTargetValue}
          onChangeText={null}
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "100%",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          margin:"10%",
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
          onChangeText={(text)=>setValueToConverter(text)}
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 25,
            fontSize: 20,
            width: "100%",
          }}
        />
        <Button style={{
            borderRadius:'30%',
            marginTop:'4.5%'
        }} mode='contained' onPress={convert}>
          <Text style={{fontWeight:'bold'}}>Converter</Text>
        </Button>
      </View>
      {valueConverted && <View
        style={{
          margin:"10%",
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
        
      >
        <Text
          >
            {valueConverted}    
          </Text>
      </View>}

      <BottomModal
        modalVisible={showModalBaseValue}
        setModalVisible={setShowModalBaseValue}
        title={"Selecione a moeda base"}
        content={
          <View>
            {currenciesState.map((genre, index) => {
              return (
                <View key={genre.id} style={{}}>
                  <RadioButton
                    label={toCapitalize(genre.name)}
                    labelStyle={{ color: "#fff", fontSize: 16 }}
                    fillColor={"orange"}
                    checkColor={"orange"}
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
        title={"Selecione a moeda base"}
        content={
          <View>
            {currenciesState.map((genre, index) => {
              return (
                <View key={genre.id} style={{}}>
                  <RadioButton
                    label={toCapitalize(genre.name)}
                    labelStyle={{ color: "#fff", fontSize: 16 }}
                    fillColor={"orange"}
                    checkColor={"orange"}
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
