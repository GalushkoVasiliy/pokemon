import { Image, Text, View, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { useGetPokemonByNameQuery } from '../../services/api';
import styles from './styles/styles';

const SinglePokemon = () => {
    const route = useRoute<RouteProp<{ params: { name: string } }>>();
    const { data, error, isLoading } = useGetPokemonByNameQuery(route.params.name);

    const getTypesInfo = (types: { slot: number; type: { name: string; url: string } }[]) => {
        return types.map(item => item.type.name).join(', ');
    };

    const getStatValue = (statName: string) => {
        const stat = data?.stats.find(stat => stat.stat.name === statName);
        return stat ? stat.base_stat : 'N/A';
    };

    return (
        <>
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
            {error && (
                <View>
                    <Text>Something happened</Text>
                </View>
            )}
            {data && (
                <View style={styles.successContainer}>
                    <View style={styles.headerContainer}>
                        <Image source={{ uri: data?.sprites?.front_shiny }} style={styles.image} />
                        <View>
                            <Text>{data?.name}</Text>
                            <Text>ID: {data?.id}</Text>
                            <Text>Types: {getTypesInfo(data?.types)}</Text>
                        </View>
                    </View>

                    <Text>HEIGHT: {data?.height}</Text>
                    <Text>WEIGHT: {data?.weight}</Text>
                    <Text>Base exp: {data?.base_experience}</Text>

                    <Text>Stats:</Text>
                    <Text>HP: {getStatValue('hp')}</Text>
                    <Text>ATTACK: {getStatValue('attack')}</Text>
                    <Text>DEFENSE: {getStatValue('defense')}</Text>
                    <Text>SPEED: {getStatValue('speed')}</Text>
                    <Text>SPECIAL ATTACK: {getStatValue('special-attack')}</Text>
                    <Text>SPECIAL DEFENSE: {getStatValue('special-defense')}</Text>
                </View>
            )}
        </>
    );
};

export default SinglePokemon;