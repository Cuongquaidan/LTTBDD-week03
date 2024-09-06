import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const index = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#00CCF9",
                justifyContent: "space-around",
                alignItems: "center",
                paddingVertical: 60,
            }}
        >
            <View
                style={{
                    borderWidth: 15,
                    borderRadius: 99,
                    borderStyle: "solid",
                    borderColor: "#000",
                    width: 160,
                    height: 160,
                }}
            ></View>
            <View>
                <Text
                    style={{
                        width: 189,
                        fontWeight: "700",
                        fontSize: 25,
                        textAlign: "center",
                    }}
                >
                    GROW {"\n"}YOUR BUSINESS
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
                    We will help you to grow your business using online server
                </Text>
            </View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 50,
                }}
            >
                <Pressable>
                    <View style={styles.buttonYellow}>
                        <Text style={styles.textButtonYellow}>LOGIN</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.buttonYellow}>
                        <Text style={styles.textButtonYellow}>SIGN UP</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    buttonYellow: {
        borderRadius: 8,
        paddingHorizontal: 30,
        paddingVertical: 12,
        backgroundColor: "#E3C000",
    },
    textButtonYellow: {
        fontSize: 20,
        fontWeight: 700,
    },
});
