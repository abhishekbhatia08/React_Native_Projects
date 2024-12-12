import { Image, StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Contact } from '../models/contact';

export default function ContactList() {
    const contacts: Contact[] = [
        {
            uid: "1",
            name: "John Doe",
            photo: "https://randomuser.me/api/portraits/men/1.jpg",
            phoneNumber: "123-456-7890",
        },
        {
            uid: "2",
            name: "Jane Smith",
            photo: "https://randomuser.me/api/portraits/women/2.jpg",
            phoneNumber: "987-654-3210",
        },
        {
            uid: "3",
            name: "Alice Johnson",
            photo: "https://randomuser.me/api/portraits/women/3.jpg",
            phoneNumber: "555-123-4567",
        },
        {
            uid: "4",
            name: "Bob Brown",
            photo: "https://randomuser.me/api/portraits/men/3.jpg",
            phoneNumber: "555-987-6543",
        },
        {
            uid: "5",
            name: "Emily Davis",
            photo: "https://randomuser.me/api/portraits/women/4.jpg",
            phoneNumber: "555-234-5678",
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView scrollEnabled={false}>
                {
                    contacts.map((c: Contact) => ContactCard(c))
                }
            </ScrollView>
        </View>
    )
}


function ContactCard(data: Contact) {
    return (
        <TouchableOpacity key={data.uid}>
            <View style={[styles.contactCard]}>
                <Image source={{ uri: data.photo }} style={styles.contactImage}></Image>
                <View style={styles.textPadding}>
                    <Text style={styles.contactName}>{data.name}</Text>
                    <Text style={styles.contactNumber}>{data.phoneNumber}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 8,
    },
    contactCard: {
        padding: 12,
        flexDirection: 'row',
        backgroundColor: "#E8E0E0FF",
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        elevation: 5
    },
    contactImage: {
        borderRadius: 30,
        height: 60,
        width: 60,
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    contactNumber: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000'
    },
    textPadding: {
        marginHorizontal: 14,
        marginVertical: 12,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    }
})