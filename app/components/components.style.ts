import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 8,
        height: 60,
        paddingHorizontal: 12,
    },
    button: {
        borderRadius: 4,
        padding: 10,
        elevation: 2,
        marginTop: 15,
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#000",
      }
});

export default styles