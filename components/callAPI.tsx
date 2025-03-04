import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Image } from 'react-native';

const useImage = require('../assets/spongey.jpg');

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const CallAPI: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (post) {
    return (
      <View style={styles.postContainer}>
        <View style={styles.header}>
          <Image
            source={useImage}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.username}>User {post.userId}</Text>
            <Text style={styles.timestamp}>Just now</Text>
          </View>
        </View>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postBody}>{post.body}</Text>
        <View style={styles.footer}>
          <Text style={styles.likes}>❤️ 123 Likes</Text>
          <Text style={styles.comments}>💬 45 Comments</Text>
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  postContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 16,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likes: {
    color: 'red',
  },
  comments: {
    color: 'blue',
  },
});

export default CallAPI;