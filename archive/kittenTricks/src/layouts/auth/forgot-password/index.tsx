import React from 'react';

import { useRouter } from 'expo-router';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Button,
  Input,
  Text,
} from '@fox-ui/components';

import { KeyboardAvoidingView } from './extra/3rd-party';
import { EmailIcon } from './extra/icons';
import { ImageOverlay } from './extra/image-overlay.component';

export default (): React.ReactElement => {
  const [email, setEmail] = React.useState<string>();
  const router = useRouter();

  const onResetPasswordButtonPress = (): void => {
    navigation && router.back();
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('./assets/image-background.jpg')}>
        <Text style={styles.forgotPasswordLabel} category='h4' status='control'>
          Forgot Password
        </Text>
        <Text style={styles.enterEmailLabel} status='control'>
          Please enter your email address
        </Text>
        <View style={styles.formContainer}>
          <Input
            status='control'
            placeholder='Email'
            accessoryRight={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Button size='giant' onPress={onResetPasswordButtonPress}>
          RESET PASSWORD
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 24,
  },
  enterEmailLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 64,
  },
});
