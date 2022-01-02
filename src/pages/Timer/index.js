import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, Title } from "react-native-paper";
import { Alert, Platform, SafeAreaView, Text, View } from "react-native";
import { TitleTimer } from "../../components/TitleTimer";
import colors from "../../../utils/colors";
import Input from "../../components/Input";

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
    <SafeAreaView>
      <TitleTimer style={{ marginTop: Platform.OS === "android" ? "10%" : 0 }}>
        Timer:
      </TitleTimer>
      <Input
          placeholder="Digite o valor do Timer em segundos"
          borderColor={colors.purpleCommon}
          onChangeText={(text) => setTime(text.replace("-", ""))}
          onBlur={() => setIsPlaying(true)}
          keyboardType="number-pad"
          value={time}
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
};

export default InformCode;
