import React, { Component } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

class Header extends Component {
    render () {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={this.props.onToggleAllComplete}>
                    <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
                </TouchableOpacity>
                <TextInput style={styles.input}
                    value={this.props.value}
                    onChangeText={this.props.onChange}
                    onSubmitEditing={this.props.onAddItem}
                    placeholder="What needs to be done?"
                    blurOnSubmit={false}
                    returnKeyType="done" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    input: {
        flex: 1
    },
    toggleIcon: {
        marginTop: 5,
        fontSize: 30,
        color: '#CCC'
    }
})
export default Header