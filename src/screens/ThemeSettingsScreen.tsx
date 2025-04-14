import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@micro.app.dev/shared';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ThemeSettingsScreen: React.FC = () => {
  const { theme, setTheme, colors } = useTheme();

  const themeOptions = [
    { value: 'light', label: 'Light', icon: 'light-mode' },
    { value: 'dark', label: 'Dark', icon: 'dark-mode' },
    { value: 'system', label: 'System', icon: 'settings-brightness' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Theme</Text>
        <View style={styles.themeOptions}>
          {themeOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.themeOption,
                { backgroundColor: colors.card },
                theme === option.value && { borderColor: colors.primary, borderWidth: 2 },
              ]}
              onPress={() => setTheme(option.value as 'light' | 'dark' | 'system')}
            >
              <Icon name={option.icon} size={24} color={colors.text} />
              <Text style={[styles.themeLabel, { color: colors.text }]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={[styles.previewSection, { backgroundColor: colors.card }]}>
        <Text style={[styles.previewTitle, { color: colors.text }]}>Preview</Text>
        <View style={styles.previewContent}>
          <Text style={[styles.previewText, { color: colors.text }]}>
            Sample Text
          </Text>
          <TouchableOpacity
            style={[styles.previewButton, { backgroundColor: colors.primary }]}
          >
            <Text style={styles.previewButtonText}>Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  themeOptions: {
    gap: 10,
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    gap: 10,
  },
  themeLabel: {
    fontSize: 16,
  },
  previewSection: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  previewContent: {
    gap: 15,
  },
  previewText: {
    fontSize: 16,
  },
  previewButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  previewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThemeSettingsScreen; 