import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Api} from '../providers';
import {Pokemon, Request} from '../interfaces';

const Home: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon>();

  const getPokemons = () => {
    Api.get('/pokemon')
      .then((response: Request) => {
        if (response.status === 200 || response.status === 201) {
          setAllPokemons(response.data);
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <SafeAreaView>
      {allPokemons?.results?.map(result => (
        <Text style={styles.text}>{result.name}</Text>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default Home;
