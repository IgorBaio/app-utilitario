import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, Title } from "react-native-paper";
import { Alert, Platform, SafeAreaView, Text, View } from "react-native";
import { TitleTimer } from "../../components/TitleTimer";

const InformCode = () => {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState(false);

  useEffect(() => {
    setCountdown(
      <CountdownCircleTimer
        isPlaying={isPlaying}
        key={isPlaying}
        duration={time}
        rotation="clockwise"
        colors={[
          ["#4F249D", 0.33],
          ["#4F249D", 0.33],
          ["#4F249D", 0.33],
        ]}
      >
        {({ remainingTime }) => {
          setTime(remainingTime);
          if (remainingTime === 0 && time !== 0 && isPlaying) {
            setIsPlaying(false);
            Alert.alert("Acabou!!");
            return;
          } else if (remainingTime === 0 && time !== 0 && isPlaying) {
            setIsPlaying(false);
          }
          if (isPlaying === false) {
            return (
              <MaterialIcons
                onPress={() => {
                  setIsPlaying(true);
                }}
                name="play-circle-outline"
                size={100}
                color="#026"
              />
            );
          }
          return (
            <MaterialIcons
              onPress={() => {
                setIsPlaying(false);
              }}
              name="pause-circle-outline"
              size={100}
              color="#026"
            />
          );
        }}
      </CountdownCircleTimer>
    );
  }, [isPlaying]);

  return (
    <SafeAreaView
    // title={sectionTitle}
    // subTitle={subTitle}
    // visible={visibility}
    >
      <TitleTimer style={{ marginTop: Platform.OS === "android" ? "10%" : 0 }}>
        Digite o valor do Timer:
      </TitleTimer>
      <TextInput
        label="Valor do timer"
        keyboardType="number-pad"
        value={time}
        onChangeText={(text) => setTime(text.replace("-", ""))}
        onBlur={() => setIsPlaying(true)}
      />

      <View
        style={{
          margin: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {countdown && countdown}
        <View style={{ margin: "20%" }}>
          <Title style={{ fontSize: 40, lineHeight: 40 }}>{time}</Title>
        </View>
      </View>
    </SafeAreaView>
  );
  // return(
  //   <SafeAreaView>
  //     <Text>Ola</Text>
  //   </SafeAreaView>
  // )
};

export default InformCode;
