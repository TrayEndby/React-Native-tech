import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const PostCardView = ({ title, comment }) => {
    return (
      <Card style={styles.card}>
        {/* <Card.Cover source={require('./path-to-your-card-image.jpg')} /> */}
        <Card.Content style={styles.content}>
          <Title style={styles.title}>{title}</Title>
          <Paragraph style={styles.comment}>{comment}</Paragraph>
        </Card.Content>
      </Card>
    );
  };

  const styles = StyleSheet.create({
    card: {
      margin: 16,
      borderRadius: 10,
      elevation: 4,
      overflow: 'hidden', // Clip the image to rounded corners
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    comment: {
      fontSize: 16,
      color: 'gray',
    },
  });
  
  export default PostCardView;