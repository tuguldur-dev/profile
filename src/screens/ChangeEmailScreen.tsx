import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../navigation/ProfileNavigator';
import { useTheme } from '@micro.app.dev/shared';

type ChangeEmailScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'ChangeEmail'>;

const ChangeEmailScreen: React.FC = () => {
  const navigation = useNavigation<ChangeEmailScreenNavigationProp>();
  const { colors } = useTheme();
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeEmail = async () => {
    if (!currentEmail || !newEmail || !confirmEmail) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (newEmail !== confirmEmail) {
      Alert.alert('Error', 'New email addresses do not match');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement email change logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      Alert.alert(
        'Success',
        'Email changed successfully',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error) {
      console.error('Error changing email:', error);
      Alert.alert('Error', 'Failed to change email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.form}>
        <View style={[styles.inputContainer, { borderBottomColor: colors.border }]}>
          <Text style={[styles.label, { color: colors.text }]}>Current Email</Text>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={currentEmail}
            onChangeText={setCurrentEmail}
            placeholder="Enter current email"
            placeholderTextColor={colors.text + '99'}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={[styles.inputContainer, { borderBottomColor: colors.border }]}>
          <Text style={[styles.label, { color: colors.text }]}>New Email</Text>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={newEmail}
            onChangeText={setNewEmail}
            placeholder="Enter new email"
            placeholderTextColor={colors.text + '99'}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={[styles.inputContainer, { borderBottomColor: colors.border }]}>
          <Text style={[styles.label, { color: colors.text }]}>Confirm New Email</Text>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={confirmEmail}
            onChangeText={setConfirmEmail}
            placeholder="Confirm new email"
            placeholderTextColor={colors.text + '99'}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleChangeEmail}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Changing Email...' : 'Change Email'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangeEmailScreen; 