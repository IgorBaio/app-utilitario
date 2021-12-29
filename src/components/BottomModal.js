import React, { Children, memo, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  ScrollView,
  Animated,
  TouchableWithoutFeedback, 
  TouchableOpacity
} from "react-native";
import SvgBackArrow from '../assets/SvgBackArrow';

const BottomModal = memo(({ modalVisible, setModalVisible, content, title }) => {

  const [animationBackground, setAnimationBackground] = useState(new Animated.Value(0));
 
  const showAnimationBackground = () => {
    Animated.timing(animationBackground, {
      toValue:1,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  const dismissModal = () => {
    Animated.timing(animationBackground, {
      toValue:0,
      duration: 100,
      useNativeDriver: false
    }).start(() => {
      setAnimationBackground(new Animated.Value(0));
      setModalVisible(!modalVisible);
    });
  }

  const backgroundInterpolation =  animationBackground.interpolate({
    inputRange: [0, 1],
    outputRange:["#66666600" , "#66666670"]
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={dismissModal}
      onShow={showAnimationBackground}
      statusBarTranslucent={true}
      accessible
      accessibilityViewIsModal
    >   
        <Animated.View style={[styles.wrapperModal, {
          backgroundColor: backgroundInterpolation
        }]}>
        <TouchableOpacity activeOpacity={1} style={styles.wrapperModal} onPress={() =>  dismissModal(false)}>   
          
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView} accessible accessibilityViewIsModal>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => dismissModal(false)}
                >
                  <Text style={styles.textModalClose}>Voltar</Text>
                  <SvgBackArrow color={'black'} />
                </Pressable>
                <ScrollView style={styles.scrollView}>
                  <Text style={styles.textModalTitle}>{title}</Text>
                  {content}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
      </TouchableOpacity>
        </Animated.View>
    </Modal>
  );
});
export default BottomModal;

const styles = StyleSheet.create({
  scrollView:{
    marginTop:20,
  },
  wrapperModal:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button:{
      flexDirection:'row',
      alignItems: 'center'
  },
  centeredView: {
    marginTop: (100),
    flex:1,
    justifyContent:'flex-end'
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: (20),
    paddingRight: (35),
    paddingBottom: (40),
    paddingLeft: (35),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textModalClose: {
    fontSize: (16),
    fontFamily: 'Montserrat',
    color: '#AFA22C',
    fontWeight: "600",
    marginRight: 5
  },
  textModalTitle: {
    fontFamily: "Mulish",
    fontSize: (18),
    color: '#AFA22C',
    fontWeight: "bold",
    marginBottom: (10),
  },
  textModalBody: {
    fontFamily: 'Montserrat',
    fontWeight: "300",
    color: 'gray',
    fontSize: (16),
  },
});
