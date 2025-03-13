import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { getUsers } from '../lib/supabase_crud';

interface User {
    employee_id: number;
    first_name: string;
    last_name: string;
    department: string;
    hire_date: string;
    salary: number;
    email: string;
}

const Lab6: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const userData = await getUsers();
            if (userData && Array.isArray(userData)) {
                setUsers(userData);
            } else {
                setError('Invalid data format received from Supabase.');
            }
            setLoading(false);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch users.');
            setLoading(false);
        }
    };
    fetchUsers();
    }, []);
    console.log(users);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Loading users...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Error: {error}</Text>
            </SafeAreaView>
        );
    }

    const renderItem = ({ item }: { item: User }) => (
        <View style={styles.item}>
            <Text>Employee ID: {item.employee_id}</Text>
            <Text>First Name: {item.first_name}</Text>
            <Text>Last Name: {item.last_name}</Text>
            <Text>Department: {item.department}</Text>
            <Text>Hire Date: {item.hire_date}</Text>
            <Text>Salary: {item.salary}</Text>
            <Text>Email: {item.email}</Text>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.employee_id.toString()}
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default Lab6;