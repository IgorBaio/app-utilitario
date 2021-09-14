import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { Modal, Card, useTheme, Subheading } from "react-native-paper";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { scaleHeight } from '../../utils/size'

const MyImage = styled.Image`
  display: flex;
  width: 95%;
  height: 5%;
  padding: 15%;
`;

const ImageFake = () => (
  <View
    style={{
      width: 100,
      height: 100,
      backgroundColor: "purple",
      left: 20,
    }}
  />
);

export default ItemGrid = ({ name, image, onPress, dispatch, navigation }) => {
  return (
    <Card
      style={{
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        elevation: 5,
        borderRadius: scaleHeight(20),
        backgroundColor: "#4F249D",
        color: "#000",
        flex: 1,
      }}
      onPress={onPress}
    >
      <Card.Content>
        {image !== "" &&
          typeof image !== "function" &&
          typeof image !== "string" ? (
          <MyImage source={image} style={styles.image} />
        ) : typeof image === "string" && image.includes("community") ? (
          <MaterialCommunityIcons
            style={[styles.image, { alignSelf: "center", textAlign: "center" }]}
            name={image.replace("community-", "")}
            size={80}
            color={"#AFA22C"}
          />
        ) : typeof image === "string" ? (
          <MaterialIcons
            style={[styles.image, { alignSelf: "center", textAlign: "center" }]}
            name={image}
            size={80}
            color={"#AFA22C"}
          />
        ) : (
          <ImageFake />
        )}
        <Subheading
          style={{ textAlign: "center", fontWeight: "bold", color: "#EDD60B" }}
        >
          {name}
        </Subheading>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
});
