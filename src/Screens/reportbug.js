/*jshint esversion: 6 */
import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const ReportBugScreenView = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#f28a8a" barStyle="dark-content" />

      <View style={styles.aBar}>
        <Text style={styles.mainBarTitle}>
          {'<'}Report a Bug{'/>'}
        </Text>
      </View>

      <KeyboardAvoidingView
        style={styles.avoidViewContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Text style={styles.textH1}>Ooops! Something goes wrong.!</Text>
          <Text style={styles.textH4}>Please report any problem to us.</Text>

          <Image source={require('../img/bug.png')} style={styles.img} />
          <Text style={styles.textTitle}>Your Name</Text>
          <TextInput style={styles.input} />

          <Text style={styles.textTitle}>Email</Text>
          <TextInput style={styles.input} />

          <Text style={styles.textTitle}>Comments</Text>
          <TextInput
            style={styles.inputComment}
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity style={styles.buttonSend}>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>Send Now!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  avoidViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  aBar: {
    flexDirection: 'column',
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    marginBottom: 10,
  },
  mainBarTitle: {
    fontSize: 25,
    margin: 10,
    color: '#787775',
  },
  textTitle: {
    marginLeft: 20,
    fontSize: 20,
    color: '#000',
    fontStyle: 'italic',
    letterSpacing: 2.5,
    marginVertical: 6,
  },
  textH1: {
    fontSize: 22,
    color: '#222',
    textAlign: 'center',
  },
  textH4: {
    fontSize: 20,
    color: '#222',
    textAlign: 'center',
    margin: 5,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  input: {
    padding: 14,
    marginHorizontal: 15,
    marginVertical: 5,
    color: '#fff',
    backgroundColor: '#bfbaba',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#888',
  },
  inputComment: {
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    color: '#fff',
    backgroundColor: '#bfbaba',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#888',
  },
  buttonSend: {
    padding: 15,
  },
  buttonWrapper: {
    backgroundColor: 'red',
    marginBottom: 15,
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
  },
});

export default ReportBugScreenView;
