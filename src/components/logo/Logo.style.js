import { StyleSheet } from "react-native";

const styles = ({ isBlack ,isScreamBlack}) =>
  StyleSheet.create({
    header: {},
    textArea: {
      flexDirection: "row",
    },
    textMusic: {
      fontWeight: "bold",
      fontSize: 30,
      color: isBlack ? "black" : "white",
    },
    textGru: {
      color: "tomato",
      fontSize: 30,
      fontWeight: "bold",
    },
    scream: {
      color: isScreamBlack ? 'black' :'white',
      marginLeft: 12,
      fontSize: 15,
    },
  });

export default styles;
