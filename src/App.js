import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getGithubAccountData from './accountService';

export default class App extends Component {
  constructor() {
    super();
    this.state = {accountData: 'loading...'}
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.showData();
  }

  render() {
    console.log("render");
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Account Data</Text>
        <Text style={styles.data}>{this.state.accountData}</Text>
      </View>
    );
  }

  showData() {
    getGithubAccountData()
    .then(data => {
      this.setState({accountData: JSON.stringify(data)});
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  data: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
