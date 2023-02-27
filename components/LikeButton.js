import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Animated } from 'react-native';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [starsAnim] = useState(new Animated.Value(0));

  const handleLike = () => {
    setLiked(!liked);

    // SANİYE AYARLAMA KISMI 

    Animated.timing(starsAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      //"starsAnim" state'inin değerini sıfırlıyor.
      starsAnim.setValue(0);
    });
  };
  
// yıldız animasyonunun görünürlüğünü ve boyutunu belirten yer 
//  "starsOpacity" değişkeni "interpolate" fonksiyonu kullanarak animasyonun başlangıcında ve bitişinde yıldızların görünmez olmasını sağlıyor.
  const starsOpacity = starsAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });
// "starsScale" değişkeni animasyon sırasında yıldızların boyutunu ayarlıyor.
  const starsScale = starsAnim.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [0, 1.2, 1.5, 1.2, 1.1, 0.9],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLike} style={styles.button}>
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={40}
          color={liked ? 'red' : 'black'}
        />
        {liked && (
          <Animated.View
            style={[
              styles.stars,
              {
                opacity: starsOpacity,
                transform: [{ scale: starsScale }],
              },
            ]}
          >
            <Ionicons name="star" size={16} color="yellow" />
            <Ionicons name="star" size={16} color="yellow" />
            <Ionicons name="star" size={16} color="yellow" />
          </Animated.View>
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{liked ? 'Liked' : 'Like'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
  stars: {
    position: 'absolute',
    top: -20,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
