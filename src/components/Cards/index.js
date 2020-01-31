/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Viewport} from '@skele/components';
import {ScrollView} from 'react-native';

import Card from '../Card';

import service from '../../services/images-data';

export default function Cards() {
  return (
    <Viewport.Tracker>
      <ScrollView
        scrollEventThrottle={1}
        style={{
          paddingTop: 20,
          marginBottom: 100,
          marginHorizontal: 20,
        }}>
        {service.map((img, index) => (
          <Card key={index} uri={img.url} index={index} />
        ))}
      </ScrollView>
    </Viewport.Tracker>
  );
}
