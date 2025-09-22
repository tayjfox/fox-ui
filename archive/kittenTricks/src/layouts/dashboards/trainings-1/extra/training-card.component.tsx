import React from 'react';

import { StyleSheet } from 'react-native';

import {
  Button,
  Card,
  CardElement,
  CardProps,
  Text,
} from '@fox-ui/components';

import { Training } from './data';
import { ClockIcon } from './icons';
import { ImageOverlay } from './image-overlay.component';

export interface TrainingCardProps extends Omit<CardProps, 'children'> {
  training: Training;
}

export type TrainingCardElement = React.ReactElement<TrainingCardProps>;

export const TrainingCard = (props: TrainingCardProps): CardElement => {
  const { style, training, ...cardProps } = props;

  return (
    <Card {...cardProps} style={[styles.container, style]}>
      <ImageOverlay style={styles.image} source={training.image}>
        <Text style={styles.level} category='s1' status='control'>
          {training.formattedLevel}
        </Text>
        <Text style={styles.title} category='h2' status='control'>
          {training.title}
        </Text>
        <Button
          style={styles.durationButton}
          size='tiny'
          accessoryLeft={ClockIcon}>
          {training.formattedDuration}
        </Button>
      </ImageOverlay>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  level: {
    zIndex: 1,
  },
  title: {
    zIndex: 1,
  },
  durationButton: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    borderRadius: 16,
    paddingHorizontal: 0,
  },
});
