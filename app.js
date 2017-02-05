import React, { Component } from "react"
import { View, Text, StyleSheet, ListView, Keyboard } from "react-native"
import Header from "./header"
import Footer from "./footer"
import Row from "./row"
class App extends Component {
    constructor (props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            allComplete: false,
            value: "",
            items: [],
            dataSource: ds.cloneWithRows([])
        }
        this.setSource = this.setSource.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    }

    setSource (items, itemsDataSource, otherState = {}) {
        this.setState({
            items,
            dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
            ...otherState
        })
    }

    handleToggleAllComplete () {
        const complete = !this.state.allComplete
        const newItems = this.state.items.map((item) => ({
            ...item,
            complete
        }))
        this.setSource(newItems, newItems, { allComplete: complete })
    }

    handleAddItem () {
        if (!this.state.value) return;
        const newItems = [
            ...this.state.items,
            {
                time: Date.now(),
                text: this.state.value,
                complete: false
            }
        ]
        this.setSource(newItems, newItems, { value: "" })
    }

    render () {
        return (
            <View style={styles.container}>
                <Header
                    value={this.state.value}
                    onAddItem={this.handleAddItem}
                    onChange={(value) => this.setState({ value })}
                    onToggleAllComplete={this.handleToggleAllComplete} />
                <View style={styles.content}>
                    <Text style={styles.listTitle}>
                        Todo List:
                    </Text>
                    <ListView style={styles.list}
                      enableEmptySections
                      dataSource={this.state.dataSource}
                      onScroll={ () => Keyboard.dismiss()}
                      renderRow={({ time, ...others}) => {
                        return <Row key={time} {...others} />
                      }}
                      renderSeparator={(sectionId, rowId) => {
                        return <View key={rowId} style={styles.separator} />
                      }} />
                </View>
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5FCFF'
    },
    content: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 16
    },
    list: {
        marginTop: 16
    },
    listTitle: {
        fontSize: 28
    },
    separator: {
        borderWidth: 1,
        borderColor: '#F5F5F5'
    }
})

export default App