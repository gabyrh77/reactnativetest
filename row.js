import React, { Component } from "react"
import { Text, StyleSheet } from "react-native"

class Row extends Component {
    render () {
        return (
            <Text style={styles.wrapper}>
                <Text>{String.fromCharCode(8226)} </Text>
                <Text>{this.props.text}</Text>
            </Text>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontSize: 24,
                color: '#4d4d4d'
    }
})
export default Row