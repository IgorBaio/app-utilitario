import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";

export default () => {
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [valorC, setValorC] = useState(0);
  const [resultado, setResultado] = useState("");
  const [alerta, setAlerta] = useState("");
  /**
     * System.out.println("Calculando a fórmula de Bhaskara");
       System.out.println("Digite o valor de A: ");
       double a = scan.nextDouble();
       System.out.println("Digite o valor de B: ");
       double b = scan.nextDouble();
       System.out.println("Digite o valor de C: ");
       double c = scan.nextDouble();
     */
  const calculate = () => {
    const delta = valorB * valorB - 4 * valorA * valorC;
    if (delta < 0) {
      setAlerta("Delta menor que 0, não existe valor real para a solução.");
      setResultado("");
    } else {
      let x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
      let x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
      x1 = x1 ? x1 : 0;
      x2 = x2 ? x2 : 0;

      setAlerta("");
      setResultado("x1 = " + x1 + "\n" + "x2 = " + x2);
    }
  };
  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Title>Digite o valor de A</Title>
        <TextInput
          label="Valor de A"
          value={valorA}
          onChangeText={(text) => setValorA(text)}
        />
        <Title>Digite o valor de B</Title>
        <TextInput
          label="Valor de B"
          value={valorB}
          onChangeText={(text) => setValorB(text)}
        />
        <Title>Digite o valor de C</Title>
        <TextInput
          label="Valor de C"
          value={valorC}
          onChangeText={(text) => setValorC(text)}
        />
        <Button style={{
            borderRadius:'30%',
            marginTop:'2.5%'
        }} mode='contained' onPress={calculate}>
          <Text style={{fontWeight:'bold'}}>Calcular</Text>
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
