import React from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
// constatnts
import { images, theme } from "../../constants";
const { onBoarding1, onBoarding2, onBoarding3 } = images;
const { COLORS, SIZES } = theme;
// Dummy Data
const screensData = [
  {
    title: "Let's Travelling",
    description: "A",
    img: onBoarding1,
  },
  {
    title: "Navigation",
    description: "B",
    img: onBoarding2,
  },
  {
    title: "Designation",
    description: "C",
    img: onBoarding3,
  },
];

// main component
const OnBoardings = () => {
  // render items
  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {screensData.map((item, index) => (
          <View key={index} style={{ width: SIZES.width }}>
            {/* image */}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{ height: "100%", width: "100%" }}
              />
            </View>
            {/* heading and description */}
            <View
              style={{
                position: "absolute",
                bottom: "10%",
                alignSelf: "center",
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.h1,
                  color: COLORS.white,
                  fontWeight: "bold",
                  lineHeight: SIZES.lineH1,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.body1,
                  color: COLORS.gray,
                  lineHeight: SIZES.lineH1,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: SIZES.base,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  // main return function
  return (
    <View style={styles.container}>
      <View>{renderContent()}</View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardings;
