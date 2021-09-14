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
import { scaleHeight } from "../../../utils/size";
import { Ionicons } from '@expo/vector-icons';

export default () => {
  const [currenciesState, setCurrenciesState] = useState(currencies);
  const [selectedBaseValue, setSelectedBaseValue] = useState('USD');
  const [selectedTargetValue, setSelectedTargetValue] = useState('BRL');
  const [showModalBaseValue, setShowModalBaseValue] = useState(false);
  const [showModalTargetValue, setShowModalTargetValue] = useState(false);
  const [valueToConverter, setValueToConverter] = useState(null);
  const valueConverted = useSelector(state => state.currency.convertedValue)
  // const convertedValue = useSelector(state=>state.convertedValue)
  console.log('aaaaa', valueConverted.payload || valueConverted)
  const dispatch = useDispatch()
  function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const convert = async () => {
    console.log('selectedBaseValue,selectedTargetValue')
    console.log(selectedBaseValue, selectedTargetValue, valueToConverter)
    dispatch(getCurrencyConverted({ selectedBaseValue, selectedTargetValue, valueToConverter }))
  }

  return (
    <View style={{
      paddingVertical: scaleHeight(90)
    }}>
      <View style={{
        flexDirection: 'row',
        width: '100%'
      }}>

        <TouchableOpacity
          style={{
            marginHorizontal: "5%",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#4F249D",
            borderWidth: 2,
            padding: 10,
            width: '40%',
            flexDirection: 'row'
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
          <Ionicons name="chevron-down" size={24} color="black" />


        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: "5%",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#4F249D",
            borderWidth: 2,
            padding: 10,
            width: '40%',
            flexDirection: 'row'
          }}
          onPress={() => {
            setShowModalTargetValue(true);
          }}
        >
          <Text style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "70%",
          }}>
            {selectedTargetValue ? selectedTargetValue : "Selecione a moeda base"}
          </Text>
          <Ionicons name="chevron-down" size={24} color="black" />

        </TouchableOpacity>

      </View>
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
      {!!valueConverted?.payload && <View
        key={valueConverted?.payload || valueConverted}
        style={{
          margin: scaleHeight(5),
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          // backgroundColor:'purple'
        }}

      >
        <Title
          key={valueConverted?.payload || valueConverted}
          style={{ color: '#000' }}
        >
          Valor convertido: <Title
            key={valueConverted?.payload || valueConverted}
            style={{ fontSize: scaleHeight(25) }}
          >{valueConverted?.payload || valueConverted}
          </Title>
        </Title>
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
                    label={`${currency.name} - ${currency.title}`}
                    labelStyle={{ color: "#4F249D", fontSize: 16 }}
                    fillColor={"#4F249D"}
                    checkColor={"#4F249D"}
                    value={selectedBaseValue == currency.name}
                    onChange={() => {
                      setSelectedBaseValue(currency.name);
                      setShowModalBaseValue(false)
                    }}
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
                    label={`${currency.name} - ${currency.title}`}
                    labelStyle={{ color: "#4F249D", fontSize: 16 }}
                    fillColor={"#4F249D"}
                    checkColor={"#4F249D"}
                    value={selectedTargetValue == currency.name}
                    onChange={() => {
                      setSelectedTargetValue(currency.name);
                      setShowModalTargetValue(false)
                    }}
                  />
                </View>
              );
            })}
          </View>
        }
      />
    </View>
  );
};
