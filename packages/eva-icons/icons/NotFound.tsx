import * as React from 'react';

import {
  Rect,
  Svg,
  SvgProps,
  Text,
} from 'react-native-svg';

export default (props?: SvgProps): React.ReactElement<SvgProps> => (
  <>

    <Svg {...props} viewBox='0 0 24 24'>
      <Rect x="2" y="2" width="20" height="20" fill="#E0E0E0" stroke="#BDBDBD" strokeWidth="2" />
      <Text
        x="12"
        y="16"
        fontSize="12"
        fontWeight="bold"
        textAnchor="middle"
        fill="#757575"
      >
        ?
      </Text>
    </Svg>
  </>
);
