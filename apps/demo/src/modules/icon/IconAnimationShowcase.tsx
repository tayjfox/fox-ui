import React from 'react';

import { ImageProps } from 'react-native';

import {
  Button,
  Container,
  HStack,
  Icon,
  IconElement,
  IconProps,
} from '@fox-ui/components-legacy';

export const IconAnimationShowcase = (): React.ReactElement => {

  const zoomIconRef = React.useRef<Icon<Partial<ImageProps>> | null>(null);
  const pulseIconRef = React.useRef<Icon<Partial<ImageProps>> | null>(null);
  const shakeIconRef = React.useRef<Icon<Partial<ImageProps>> | null>(null);
  const infiniteAnimationIconRef = React.useRef<Icon<Partial<ImageProps>> | null>(null);
  const noAnimationIconRef = React.useRef<Icon<Partial<ImageProps>> | null>(null);

  React.useEffect(() => {
    infiniteAnimationIconRef.current?.startAnimation();
  }, []);

  const renderZoomIcon = (props: IconProps): IconElement => (
    <Icon
      {...props}
      ref={zoomIconRef}
      animation='zoom'
      name='maximize-outline'
    />
  );

  const renderPulseIcon = (props: IconProps): IconElement => (
    <Icon
      {...props}
      ref={pulseIconRef}
      animation='pulse'
      name='activity'
    />
  );

  const renderShakeIcon = (props: IconProps): IconElement => (
    <Icon
      {...props}
      ref={shakeIconRef}
      animation='shake'
      name='shake'
    />
  );

  const renderInfiniteAnimationIcon = (props: IconProps): IconElement => (
    <Icon
      {...props}
      ref={infiniteAnimationIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='shake'
      name='clock-outline'
    />
  );

  const renderNoAnimationIcon = (props: IconProps): IconElement => (
    <Icon
      {...props}
      ref={noAnimationIconRef}
      animation={null}
      name='eye'
    />
  );

  return (
    <Container>
      <HStack gap='md' alignment='center' className='flex-wrap'>

        <Button

          accessoryLeft={renderZoomIcon}
          onPress={() => zoomIconRef.current?.startAnimation()}
        >
          ZOOM
        </Button>

        <Button
          appearance='outline'
          status='success'

          accessoryLeft={renderPulseIcon}
          onPress={() => pulseIconRef.current?.startAnimation()}
        >
          PULSE
        </Button>

        <Button
          appearance='ghost'
          status='danger'

          accessoryLeft={renderShakeIcon}
          onPress={() => shakeIconRef.current?.startAnimation()}
        >
          SHAKE
        </Button>

        <Button
          appearance='ghost'
          status='info'

          accessoryRight={renderInfiniteAnimationIcon}
        >
          INFINITE
        </Button>

        <Button
          appearance='ghost'
          status='warning'
          accessoryRight={renderNoAnimationIcon}
        >
          NO ANIMATION
        </Button>

      </HStack>
    </Container>
  );
};

