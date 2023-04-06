import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Pagination = ({totalPages, currentPage, onPageChange}) => {
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);

  return (
    <View>
      {pages.map((page) => (
        <TouchableOpacity
          key={page}
          onPress={() => onPageChange(page)}
          disabled={currentPage === page}>
          <Text>{page}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Pagination;