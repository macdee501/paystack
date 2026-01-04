import {Client,Account, Databases} from 'react-native-appwrite'


const client = new Client();
client.setEndpoint('https://fra.cloud.appwrite.io/v1').
setProject('692c35ce001ae0bbd4fb');

export const account = new Account(client);
export const databases = new Databases(client);