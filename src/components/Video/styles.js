import styled from 'styled-components/native';
import {Viewport} from '@skele/components';
import Video from 'react-native-video';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;

  margin: 20px 0;
  background-color: #adadadad;
`;

const ViewportAwareImage = Viewport.Aware(Video);

export const VideoAware = styled(ViewportAwareImage)`
  width: 100%;
  height: 400px;
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: black;
  margin-top: 10px;

  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;
