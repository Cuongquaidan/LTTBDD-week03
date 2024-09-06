import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from "@expo/vector-icons/Fontisto";
const week3part2 = () => {
    return (
        <LinearGradient
            colors={["#c7f4f6", "#c7f4f6", "#e5f4f5", "#00ccf9"]}
            style={{
                flex: 1,
                backgroundColor: "#00CCF9",
                justifyContent: "space-around",
                alignItems: "center",
                paddingVertical: 60,
            }}
        >
            <Fontisto name="locked" size={100} color="black" />
            <View>
                <Text
                    style={{
                        width: 189,
                        fontWeight: "700",
                        fontSize: 25,
                        textAlign: "center",
                    }}
                >
                    FORGET {"\n"}PASSWORD
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        width: 300,
                        fontWeight: "700",
                        fontSize: 15,
                        textAlign: "center",
                    }}
                >
                    Provide your account’s email for which you want to reset
                    your password
                </Text>
            </View>
            <View
                style={{
                    position: "relative",
                    width: "80%",
                    marginHorizontal: "auto",
                }}
            >
                <Fontisto
                    name="email"
                    size={40}
                    color="black"
                    style={{
                        position: "absolute",
                        top: 5,
                        left: 10,
                    }}
                />
                <TextInput
                    placeholder="Email"
                    keyboardType="numeric"
                    style={{
                        paddingHorizontal: 60,
                        paddingTop: 10,
                        paddingBottom: 15,
                        fontWeight: 600,
                        fontSize: 20,
                        backgroundColor: "#C4C4C4",
                    }}
                />
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 50,
                    width: "100%",
                    paddingHorizontal: 40,
                }}
            >
                {" "}
                <View style={styles.buttonYellow}>
                    <Pressable>
                        <Text style={styles.textButtonYellow}>NEXT</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    );
};

export default week3part2;

const styles = StyleSheet.create({
    buttonYellow: {
        paddingHorizontal: 80,
        paddingVertical: 12,
        width: "100%",
        backgroundColor: "#E3C000",
    },
    textButtonYellow: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
    },
});
