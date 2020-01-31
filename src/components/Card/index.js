import React, {useRef, useState} from 'react';

import * as S from './styles';

export default function Card({uri, index}) {
  const containerRef = useRef();

  const [opacity, setOpacity] = useState(0.5);

  return (
    <S.Container ref={containerRef} style={{opacity}}>
      <S.ImageAware
        source={{
          uri,
        }}
        preTriggerRatio={-0.4}
        onViewportEnter={() => {
          // console.log('entrando na viewport => Imagem', index);

          setOpacity(1);
        }}
        onViewportLeave={() => {
          // console.log('saindo da viewport: Imagem', index);

          setOpacity(0.5);
        }}
        innerRef={ref => (this._refImg = ref)}
        retainOnceInViewport={true}
      />
      <S.Text>Image: {index}</S.Text>
    </S.Container>
  );
}
