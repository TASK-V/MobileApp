import React from 'react';
import { Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = (props) => {
  
  return (
    <Card>
        <CardSection>
            <Text>{props.album.name}</Text>
        </CardSection>

       
        <CardSection>
            <Text>{props.album.email}</Text>
        </CardSection>

        <CardSection>
            <Text>{props.album.id}</Text>
        </CardSection>

        

    </Card>
  );
};


export default AlbumDetail;
