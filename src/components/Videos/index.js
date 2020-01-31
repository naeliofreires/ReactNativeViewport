/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Viewport} from '@skele/components';
import {ScrollView} from 'react-native';

import Video from '../Video';

export default function Cards() {
  const styles = {
    paddingTop: 20,
    marginBottom: 100,
    marginHorizontal: 20,
  };

  const urls = [
    'https://video.twimg.com/ext_tw_video/1223082807846551552/pu/vid/720x720/9FCxdHoGNegJ3Ez_.mp4?tag=10',

    'https://scontent-gru1-1.cdninstagram.com/v/t50.2886-16/84593651_3279214818815475_3074536877258775418_n.mp4?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Phw2PaTf-pMAX9XJwYV&oe=5E3734FA&oh=eede2466c0c185a2c6b88ab437dea302',

    'https://video.twimg.com/ext_tw_video/1188923479153893377/pu/vid/590x586/FcI8FbzbulEK1N1L.mp4?tag=10',

    'https://video.twimg.com/ext_tw_video/1223082807846551552/pu/vid/720x720/9FCxdHoGNegJ3Ez_.mp4?tag=10',

    'https://scontent-gru2-2.cdninstagram.com/v/t50.2886-16/84059936_2686697288089650_662842049243717068_n.mp4?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=106&_nc_ohc=jlP6dYD5MnEAX-HQ-7Y&oe=5E36BB2E&oh=51fbfeab5c9b330081f105de5b11a04f',

    'https://video.twimg.com/ext_tw_video/1223082807846551552/pu/vid/720x720/9FCxdHoGNegJ3Ez_.mp4?tag=10',

    'https://scontent-gru1-1.cdninstagram.com/v/t50.2886-16/84593651_3279214818815475_3074536877258775418_n.mp4?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Phw2PaTf-pMAX9XJwYV&oe=5E3734FA&oh=eede2466c0c185a2c6b88ab437dea302',

    'https://video.twimg.com/ext_tw_video/1223082807846551552/pu/vid/720x720/9FCxdHoGNegJ3Ez_.mp4?tag=10',
  ];

  return (
    <Viewport.Tracker>
      <ScrollView scrollEventThrottle={1} style={{...styles}}>
        {urls.map((uri, index) => (
          <Video uri={uri} key={index} index={index} />
        ))}
      </ScrollView>
    </Viewport.Tracker>
  );
}
