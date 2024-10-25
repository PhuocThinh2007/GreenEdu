import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import SlideImage from "./component/SlideImage";
import { basic, EDataType } from "../../db/slide-data";
import CardItem from "./component/CardItem";
import { StatusBar } from "expo-status-bar";

type Props = {};

const Home = (props: Props) => {
  const data = basic;
  return (
    <ScrollView flex={1} bg="$white" showsVerticalScrollIndicator={false}>
      <StatusBar style="light" backgroundColor="green" />
      <VStack bg="$white" px={"$4"} py={"$6"}>
        <SlideImage data={Object.values(data)} />
      </VStack>
      <VStack flex={1} p={"$4"} gap={"$2"} bg="$primary600" style={{
        backgroundColor: "#B7DA58",
      }}>
        <HStack justifyContent="space-between" mt={"$4"}>
          <Text fontWeight="$semibold" fontSize={"$2xl"} color="$white">
            Ô nhiễm là gì?
          </Text>
        </HStack>
        <HStack flexWrap="wrap" justifyContent="space-between">
          {Object.values(data).map((item) => (
            <Box key={item.id} mb={"$6"}>
              <CardItem item={item} type={EDataType.BASIC} />
            </Box>
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
