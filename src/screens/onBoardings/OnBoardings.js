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
  // this for dots
  const scrollX = new Animated.Value(0);
  // render items
  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        // for dots
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
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
                bottom: "15%",
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

  // render Dots
  const renderDots = () => {
    // dots position
    const dotsPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {screensData.map((item, index) => {
          const opacity = dotsPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotsPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.blue,
                marginHorizontal: 5,
                width: dotSize,
                height: dotSize,
              }}
              opacity={opacity}
            ></Animated.View>
          );
        })}
      </View>
    );
  };

  // main return function
  return (
    <View style={styles.container}>
      <View>{renderContent()}</View>

      <View
        style={{
          position: "absolute",
          bottom: SIZES.height > 700 ? "10%" : "5%",
        }}
      >
        {renderDots()}
      </View>
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
