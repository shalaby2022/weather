/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {styles} from './Home.styles';
import {BackButton} from '../../components';
import CityCard from '../../components/cityCard/CityCard';
import {useDispatch, useSelector} from 'react-redux';
import {getWeather} from '../../redux/actions/weather';
import {mockedData} from '../../constants/MockedApiData';

const Home = () => {
  const disptach = useDispatch();
  const {isLoading, data, error, location} = useSelector(
    state => state.weather,
  );

  useEffect(() => {
    disptach(getWeather());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton color={'#6247AA'} />
        <Text style={styles.headerTitle}>App Weather</Text>
      </View>

      {!isLoading && !error && (
        <View style={styles.listWrapper}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({item}) => (
              <CityCard item={item} location={location} />
            )}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={styles.ListFooterComponent} />}
          />
        </View>
      )}

      {isLoading && (
        <ActivityIndicator
          color={'red'}
          size={'large'}
          style={{marginTop: 300}}
        />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Home;
