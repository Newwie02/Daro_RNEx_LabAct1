import { useEffect } from 'react';
import {
    Material3Scheme,
    useMaterial3Theme,
} from '@pchmn/expo-material3-theme';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { useColorScheme } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system';

export function isDarkMode(
    mode: ThemeMode,
    systemScheme: string | null | undefined,
) {
    return mode === 'dark' || (mode === 'system' && systemScheme === 'dark');
}

export function useThemeColors(mode: ThemeMode = 'light') {
    const systemColorScheme = useColorScheme();
    const { theme } = useMaterial3Theme({
        fallbackSourceColor: '#C67B5C',
    });

    const dark = isDarkMode(mode, systemColorScheme);
    const base = dark ? theme.dark : theme.light;

    return base;
}

export function useNavBarColor(colors: Material3Scheme) {
    useEffect(() => {
        setBackgroundColorAsync(colors.surfaceContainerLowest).catch(() => {});
    }, [colors.surfaceContainerLowest]);
}
