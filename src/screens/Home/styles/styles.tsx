import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    list: {flex: 1, paddingHorizontal: 25},
    header: {
        alignItems: 'center',
        paddingVertical: 15,
        marginHorizontal: 25,
    },
    headerTitle: {
        color: 'red',
        fontSize: 24,
        fontWeight: '700',
    },
    searchInput: {
        marginTop: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
    },
    emptyList: {
        marginHorizontal: 25,
        marginTop: 25,
    }
});

export default styles;
