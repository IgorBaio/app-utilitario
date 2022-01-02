import React, { useState, useEffect } from "react";
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
import { ConvertedValueText } from "../../components/ConvertedValueText";
import { scaleHeight } from "../../../utils/size";
import { styles } from "./styles";
import { setInitialsState } from "../../store/actions/currencyConversor";
import colors from "../../../utils/colors";

export default () => {
  const [currenciesState, setCurrenciesState] = useState(currencies);
  const [selectedBaseValue, setSelectedBaseValue] = useState("usd");
  const [selectedTargetValue, setSelectedTargetValue] = useState("brl");
  const [showModalBaseValue, setShowModalBaseValue] = useState(false);
  const [showModalTargetValue, setShowModalTargetValue] = useState(false);
  const [valueToConverter, setValueToConverter] = useState(null);
  const [valueConverted, setValueConverted] = useState(null);
  const convertedValue = useSelector((state) => state.currency.convertedValue);

  const dispatch = useDispatch();

  function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const convert = async () => {
    dispatch(
      getCurrencyConverted({
        selectedBaseValue,
        selectedTargetValue,
        valueToConverter,
      })
    );
  };

  useEffect(() => {
    dispatch(setInitialsState())
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          marginTop: "10%",
          marginHorizontal: "20%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `#c0c0c0`,
          padding: 10,
        }}
        onPress={() => setShowModalBaseValue(true)}
      >
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "100%",
          }}
        >
          {selectedBaseValue
            ? selectedBaseValue.toUpperCase()
            : "Selecione a moeda base"}
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
      >
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 20,
            fontSize: 20,
            width: "100%",
          }}
        >
          {selectedTargetValue
            ? selectedTargetValue.toUpperCase()
            : "Selecione a moeda base"}
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
          keyboardType="number-pad"
          placeholderTextColor={"#888"}
          value={valueToConverter}
          onChangeText={(text) => setValueToConverter(text)}
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            lineHeight: 25,
            fontSize: 20,
            width: "100%",
          }}
        />
        <Button
          style={{
            borderRadius: scaleHeight(30),
            marginTop: "4.5%",
          }}
          mode="contained"
          onPress={convert}
        >
          <Text style={{ fontWeight: "bold" }}>Converter</Text>
        </Button>
      </View>
      {convertedValue && (
        <View
          style={{
            margin: "10%",
            marginHorizontal: "20%",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <ConvertedValueText>{convertedValue}</ConvertedValueText>
        </View>
      )}

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
                    label={`${toCapitalize(currency.name)} - ${currency.title}`}
                    labelStyle={{ color: "#fff", fontSize: 16, margin: "2%" }}
                    styleView={styles.labelStyle}
                    fillColor={colors.purpleCommon}
                    checkColor={colors.purpleCommon}
                    value={selectedBaseValue == currency.name}
                    onChange={() => {
                      setSelectedBaseValue(currency.name);
                      setShowModalBaseValue(false);
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
                    label={`${toCapitalize(currency.name)} - ${currency.title}`}
                    labelStyle={{ color: "#fff", fontSize: 16, margin: "2%" }}
                    styleView={styles.labelStyle}
                    fillColor={colors.purpleCommon}
                    checkColor={colors.purpleCommon}
                    value={selectedTargetValue == currency.name}
                    onChange={() => {
                      setSelectedTargetValue(currency.name);
                      setShowModalTargetValue(false);
                    }}
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
