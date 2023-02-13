import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchImages from '../../SearchImages';

const SearchContent = ({data}) => {
  const [searchImg, setSearchImg] = useState([]);

  useEffect(() => {
    setSearchImg(SearchImages);
  }, []);

  return (
    <View>
      <FlatList
        data={searchImg}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return (
            <>
              {item.id == 0 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}>
                  {item.image.map((imageData, index) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => data(imageData)}
                        onPressOut={() => data(null)}
                        style={{paddingBottom: 2}}>
                        <Image
                          source={imageData}
                          style={{width: 129, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : null}

              {item.id == 1 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      width: 261,
                      justifyContent: 'space-between',
                    }}>
                    {item.image.slice(0, 4).map((imageData, index) => {
                      return (
                        <TouchableOpacity
                          onPressIn={() => data(imageData)}
                          onPressOut={() => data(null)}
                          style={{paddingBottom: 2}}>
                          <Image
                            source={imageData}
                            style={{width: 129, height: 150}}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <TouchableOpacity style={{marginLeft: 2}}>
                    <Image
                      source={item?.image[5]}
                      style={{width: 129, height: 300}}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}

              {item.id == 2 ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPressIn={() => data(item?.image[2])}
                    onPressOut={() => data(null)}
                    style={{marginLeft: 2}}>
                    <Image
                      source={item?.image[2]}
                      style={{width: 260, height: 300}}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      width: 130,
                      justifyContent: 'space-between',
                    }}>
                    {item.image.slice(0, 2).map((imageData, index) => {
                      return (
                        <TouchableOpacity
                          onPressIn={() => data(imageData)}
                          onPressOut={() => data(null)}
                          style={{paddingBottom: 2}}>
                          <Image
                            source={imageData}
                            style={{width: 129, height: 150}}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              ) : null}
            </>
          );
        }}
      />
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({});
