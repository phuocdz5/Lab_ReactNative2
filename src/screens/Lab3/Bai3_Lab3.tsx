import React, { useRef } from 'react';
import { Animated, Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTFAMILY } from '../../../assets/fonts';
import COLORS from '../../assets/colors/Colors';
import { ContainerComponent, SectionComponent, TextComponent } from '../../components';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const Bai3_Lab3 = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const imageSize = scrollY.interpolate({
    inputRange: [0, WINDOW_HEIGHT],
    outputRange: [100, 0], 
    extrapolate: 'clamp'
  });

  const textOpacity = scrollY.interpolate({
    inputRange: [0, WINDOW_HEIGHT],
    outputRange: [1, 0], 
    extrapolate: 'clamp'
  });



  const translateY = scrollY.interpolate({
    inputRange: [0, 220],
    outputRange: [0, -150], 
    extrapolate: 'clamp'
  });

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    scrollY.setValue(offsetY);
  };

  const data = [
    { key: '1', text: 'Category 1' },
    { key: '2', text: 'Category 2' },
    { key: '3', text: 'Category 3' },
  ];

  const renderItem = ({ item}:any) => (
    <View style={styles.flatListItem}>
      <Text style={styles.flatListItemText}>{item.text}</Text>
    </View>
  );

  return (
    <ContainerComponent>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder}></View>
      </SafeAreaView>
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.upperHeader}>
          <SectionComponent>
            <TextComponent size={20} color={COLORS.WHITE} text='Netguru' font={FONTFAMILY.poppins_black} />
          </SectionComponent>
          <SectionComponent styles={{ marginTop: 35 }}>
            <Animated.Image
              style={[styles.image, { width: imageSize, height: imageSize }]}
              source={{ uri: 'https://img.freepik.com/premium-photo/anime-boy-man-avatar-ai-generative-art_225753-12290.jpg' }} />
          </SectionComponent>
          <SectionComponent>
            <Animated.Text
              style={{ fontSize: 25, color: COLORS.WHITE, opacity: textOpacity }}
            >{`Mornin' Mark \nReady for a quiz !`}</Animated.Text>
          </SectionComponent>
          <Animated.View
            style={[styles.categoriesList, {transform: [{ translateY:translateY, }] }]}
          >
            <FlatList
              horizontal
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.key}
            />
          </Animated.View>
        </View>
        <View style={styles.lowerHeader}></View>
      </SafeAreaView>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={styles.paddingForHeader}></View>
        <View style={styles.scrollViewContent}></View>
      </ScrollView>
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  upperHeaderPlaceholder: {
    height: 80
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: COLORS.HEX_ORANGE
  },
  upperHeader: {
    height: 80
  },
  image: {
    borderRadius: 10
  },
  lowerHeader: {
    height: 270
  },
  paddingForHeader: {
    height: 270
  },
  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: COLORS.WHITE
  },
  categoriesList: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  flatListItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: COLORS.WHITE,
  },
  flatListItemText: {
    fontSize: 16,
    color: COLORS.HEX_BLACK,
  },
});

export default Bai3_Lab3;
