import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image, VStack, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { IData } from "../../../types";
import { EDataType } from "../../../db/slide-data";

type Props = {
  item: IData;
  type: EDataType;
};

const { width, height } = Dimensions.get("screen");
const cardWidth = width - 24;

const CardItem = ({ item, type }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      key={item.id}
      activeOpacity={0.8}
      style={styles.bgCard}
      onPress={() =>
        navigation.navigate("Detail", {
          id: item.id,
          type: type,
        })
      }
    >
      <VStack>
        <Image
          source={item.image}
          rounded={"$xl"}
          alt="image"
          style={styles.img}
        />
        <VStack gap={"$2"} p={"$4"}>
          <Text
            fontSize={"$xl"}
            fontWeight="$semibold"
            color="$black"
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {item.title}
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={2} color={"$coolGray500"}>
            {item.description}
          </Text>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  bgCard: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    margin: "auto",
  },
});
