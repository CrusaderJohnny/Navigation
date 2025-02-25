import React, {useState} from 'react';
import { TouchableOpacity, View, StyleSheet, Text, FlatList } from 'react-native';
import vacationDestinations from '../constants/list_items';

const lab4 = () => {
    const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

    const handleDestination = (index: number) => {
        if(selectedDestinations.includes(index)) {
            setSelectedDestinations(selectedDestinations.filter((i) => i !== index));
        } else {
            setSelectedDestinations([...selectedDestinations, index]);
        }
    };

    const renderDestination = ({ item, index}: {item: any; index: number}) => {
        const isSelected = selectedDestinations.includes(index);

        return(
            <TouchableOpacity onPress={() => handleDestination(index)}>
                <View style={styles.destinationContainer}>
                    <View style={styles.destinationInfo}>
                        <Text style={styles.destinationName}>{item.location}</Text>
                        <Text>${item.price}</Text>
                        <Text>{item.average_yearly_temperature}</Text>
                    </View>
                    <View style={styles.checkIconContainer}>
                        {isSelected && <Text style={styles.checkIcon}>{"\u2705"}</Text>}
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose the destination(s) you would like a quote for</Text>
            <FlatList
            data={vacationDestinations}
            renderItem={renderDestination}
            keyExtractor={(item, index) => index.toString()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    destinationContainer: {
      flexDirection: 'row',
      alignItems: 'center', 
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    destinationInfo: {
      flex: 1, 
    },
    destinationName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    checkIconContainer: {
      marginLeft: 10,
    },
    checkIcon: {
      fontSize: 20,
      color: 'green',
    },
});

export default lab4;