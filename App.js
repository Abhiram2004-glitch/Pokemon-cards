import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet , Platform, ScrollView} from 'react-native';
import PokemonCard from './components/PokemonCard';


export default function App() {
 const charmanderData = {
  name: "Charmander",
  image: require("./assets/2.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Smokescreen"],
  weaknesses: ["Water", "Rock", "Ground"],
};
  const bulbasaurData = {
  name: "Bulbasaur",
  image: require("./assets/3.png"),
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

  const squirtleData = {
  name: "Squirtle",
  image: require("./assets/1.png"),
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Tail Whip", "Water Gun", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...squirtleData} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==='android'?25:0 ,
    

  },
});
