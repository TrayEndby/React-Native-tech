// src/screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import PostCardView from '../components/PostCard';

const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  // const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
      <ScrollView>
        <PostCardView
          title="Beautiful Card"
          comment="This card is beautifully designed with custom styles."
        />
      </ScrollView>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default PostScreen;
