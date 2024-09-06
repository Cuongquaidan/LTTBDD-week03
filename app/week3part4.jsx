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
            <View>
                <Text
                    style={{
                        fontSize: 60,
                        fontWeight: 700,
                    }}
                >
                    CODE
                </Text>
            </View>
            <View>
                <Text
                    style={{
                        width: 189,
                        fontWeight: "700",
                        fontSize: 25,
                        textAlign: "center",
                    }}
                >
                    VERIFICATION
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
                    Enter ontime password sent on {"\n"} ++849092605798
                </Text>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <TextInput
                    style={styles.inputSquare}
                    keyboardType="numeric"
                ></TextInput>
                <TextInput
                    style={styles.inputSquare}
                    keyboardType="numeric"
                ></TextInput>
                <TextInput
                    style={styles.inputSquare}
                    keyboardType="numeric"
                ></TextInput>
                <TextInput
                    style={styles.inputSquare}
                    keyboardType="numeric"
                ></TextInput>
                <TextInput
                    style={styles.inputSquare}
                    keyboardType="numeric"
                ></TextInput>
                <TextInput
                    style={styles.inputSquare}
                    keyboardType="numeric"
                ></TextInput>
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
                <View style={styles.buttonYellow}>
                    <Pressable>
                        <Text style={styles.textButtonYellow}>VERIFY CODE</Text>
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
    inputSquare: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#c4c4c4",
        borderStyle: "solid",
        boxShadow: "0px 4px 4px 0px #00000040",
    },
});
