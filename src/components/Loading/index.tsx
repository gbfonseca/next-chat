import { ReactElement } from 'react';

import Lottie from 'react-lottie';

import { PaperPlane } from '../../assets/loading';

function Loading(): ReactElement {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PaperPlane,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={120} width={120} />;
}

export default Loading;
