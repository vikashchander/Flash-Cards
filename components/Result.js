import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Question from './Question';

function Result(props) {
  const { correct, incorrect, restart, deck, deckId, navigation } = props;
  const results=Math.round((correct / deck.questions.length) * 100)
  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.score}>Correct: {correct}</Text>
        <Text style={styles.score}>Incorrect: {incorrect}</Text>
        <Text style={styles.score}>
          {results<=50 ?`🙁 ${results}%` :`🙂 ${results}% `}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#20517E', marginTop: 25, borderRadius:10 }]}
        onPress={() => {
          restart();
          navigation.push('Quiz', { deckId: deckId });
        }}>
        <Text style={styles.btnText}>Restart Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: 'white', marginTop: 25, borderRadius:10 }]}
        onPress={() =>
          navigation.navigate('Deck', { deckId: deckId, deckName: deck.title })
        }>
        <Text style={[styles.btnText, { color: 'black' }]}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    marginTop: 17,
    marginLeft: 10,
    marginRight: 10,
  },
  results: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
  score: {
    color: 'black',
    flexDirection: 'row',
    fontSize: 25,
    marginBottom: 5,
  },
});

export default withNavigation(Result);
