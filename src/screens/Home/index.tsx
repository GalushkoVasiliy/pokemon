import { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { POKEMON_NAMES } from '../../config/CONSTANTS';
import SinglePockemon from '../../components/SinglePockemon';
import styles from './styles/styles';
import { Pokemon } from '../../config/types';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([...POKEMON_NAMES]);

    useEffect(() => {
        if (searchQuery.length > 2) {
            const searchedArray = POKEMON_NAMES.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setPokemonsList(searchedArray);
        } else {
            setPokemonsList([...POKEMON_NAMES])
        }
    }, [searchQuery]);

    const renderItem = useCallback((item: {item: Pokemon}) => <SinglePockemon item={item.item} />, []);
    return (
        <View style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pokedex</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Pokémon"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>
            {pokemonsList.length > 0 ? (
                <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.list}
                data={pokemonsList}
                renderItem={renderItem}
            />
            ) : (
                <View style={styles.emptyList}>
                    <Text>Nothing found...</Text>
                </View>
            )}
            
        </View>
    );
};

export default Home;
