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

export default () => {
  const [currenciesState, setCurrenciesState] = useState(currencies);
  const [selectedBaseValue, setSelectedBaseValue] = useState(false);
  const [selectedTargetValue, setSelectedTargetValue] = useState();
  const [showModalBaseValue, setShowModalBaseValue] = useState(false);
  const [showModalTargetValue, setShowModalTargetValue] = useState(false);
  // getCurrencyConversor()
  function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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
        <TextInput
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
        />
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
