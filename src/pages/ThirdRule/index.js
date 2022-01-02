import React, { useState } from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import colors from "../../../utils/colors";
import { scaleHeight } from "../../../utils/size";
import Input from "../../components/Input";
import { styles } from "./styles";

export default () => {
  const [valorA, setValorA] = useState(null);
  const [valorB, setValorB] = useState(100);
  const [valorC, setValorC] = useState(null);
  const [valorD, setValorD] = useState(null);
  const [resultado, setResultado] = useState("");
  const [alerta, setAlerta] = useState("");

  const calculate = () => {
    if (!valorA) {
      let valorTotal = valorC * valorB;
      valorTotal = valorTotal !== 0 ? valorTotal / valorD : null;
      if (!valorTotal) {
        setAlerta("Valor inválido");
        setResultado(null)
      } else {
        setAlerta(null);
        setResultado(`x = ${valorTotal}`);
      }
    }
    if (!valorC) {
      let valorParcial = valorA * valorD;
      valorParcial = valorParcial !== 0 ? valorParcial / valorB : null;
      if (!valorParcial) {
        setAlerta("Valor inválido");
        setResultado(null)
      } else {
        setAlerta(null);
        setResultado(`y = ${valorParcial}`);
      }
    }
    if (!valorD) {
      let procentagemParcial = valorC * valorB;
      procentagemParcial = procentagemParcial !== 0 ? procentagemParcial / valorA : null;
      if (!procentagemParcial) {
        setAlerta("Valor inválido");
        setResultado(null)
      } else {
        setAlerta(null);
        setResultado(`z = ${procentagemParcial}`);
      }
    }
  };
  
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          marginTop: Platform.OS === "android" ? "10%" : 0,
        }}
      >
        <View style={styles.viewRow}>
          <View>
            <Title style={styles.title}>Digite o valor de A</Title>
            <Input
              placeholder="X"
              borderColor={colors.purpleCommon}
              value={valorA}
              keyboardType="number-pad"
              onChangeText={(text) => setValorA(text)}
            />
          </View>

          <View>
            <Title style={[styles.title]}>Digite o valor de B</Title>
            <Input
              placeholder="100%"
              borderColor={colors.purpleCommon}
              value={valorB}
              keyboardType="number-pad"
              onChangeText={(text) => setValorB(text)}
            />
          </View>
        </View>
        <View style={[styles.viewRow, styles.viewDistance]}>
          <View>
            <Title style={styles.title}>Digite o valor de C</Title>
            <Input
              placeholder="Y"
              borderColor={colors.purpleCommon}
              value={valorC}
              keyboardType="number-pad"
              onChangeText={(text) => setValorC(text)}
            />
          </View>

          <View>
            <Title style={[styles.title]}>Digite o valor de D</Title>
            <Input
              placeholder="Z%"
              borderColor={colors.purpleCommon}
              value={valorD}
              keyboardType="number-pad"
              onChangeText={(text) => setValorD(text)}
            />
          </View>
        </View>

        <Button
          style={{
            borderRadius: scaleHeight(30),
            marginTop: "2.5%",
          }}
          mode="contained"
          onPress={calculate}
        >
          <Text style={{ fontWeight: "bold" }}>Calcular</Text>
        </Button>
        {alerta ? (
          <Text
            style={{
              fontSize: 20,
              padding: 20,
              color: "#F0141E",
              fontWeight: "bold",
            }}
          >
            {alerta}
          </Text>
        ) : (
          false
        )}
        {resultado ? (
          <View style={{ padding: 20 }}>
            <Title style={{ fontSize: 25, marginBottom: "1%" }}>
              Resultado:
            </Title>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {resultado}
            </Text>
          </View>
        ) : (
          false
        )}
      </View>
    </SafeAreaView>
  );
};
