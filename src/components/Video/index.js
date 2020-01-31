import React, {useState} from 'react';
import {Alert} from 'react-native';

import * as S from './styles';

export default function Video(props) {
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(true);

  return (
    <S.Container onPress={() => setMuted(!muted)}>
      <S.VideoAware
        source={{
          uri: props.uri,
        }}
        ref={ref => {
          this.player = ref;
        }}
        repeat
        muted={muted}
        paused={paused}
        resizeMode="contain"
        onBuffer={() => {}} // Callback when remote video is buffering
        onError={() => Alert.alert('', 'Error ao carregar video')} // Callback when video cannot be loaded
        //  controllers viewport
        preTriggerRatio={-0.4}
        onViewportEnter={() => {
          console.log('Sntrando na viewport => Video', props.index);

          setPaused(false);
        }}
        onViewportLeave={() => {
          console.log('Saindo da viewport => Video', props.index);

          setPaused(true);
        }}
        innerRef={ref => (this._refVideo = ref)}
        retainOnceInViewport={true}
      />
    </S.Container>
  );
}
