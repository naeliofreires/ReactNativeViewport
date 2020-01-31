import styled from 'styled-components/native';
import {Image} from 'react-native';
import {Viewport} from '@skele/components';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 40px;

  align-items: center;
  justify-content: center;
`;

const ViewportAwareImage = Viewport.Aware(Image);

export const ImageAware = styled(ViewportAwareImage)`
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

export const Text = styled.Text`
  color: black;
  margin-top: 10px;

  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;
