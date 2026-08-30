import { createContext, useContext, useMemo } from 'react';
import { Material3Scheme } from '@pchmn/expo-material3-theme';
import { vars } from 'nativewind';
import { View } from 'react-native';
import { useThemeColors } from '@/hooks/useThemeColors';

interface ThemeContextValue {
    colors: Material3Scheme;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function buildCSSVariables(colors: Material3Scheme) {
    return vars({
        '--color-primary': colors.primary,
        '--color-on-primary': colors.onPrimary,
        '--color-primary-container': colors.primaryContainer,
        '--color-on-primary-container': colors.onPrimaryContainer,
        '--color-secondary': colors.secondary,
        '--color-on-secondary': colors.onSecondary,
        '--color-secondary-container': colors.secondaryContainer,
        '--color-on-secondary-container': colors.onSecondaryContainer,
        '--color-tertiary': colors.tertiary,
        '--color-on-tertiary': colors.onTertiary,
        '--color-tertiary-container': colors.tertiaryContainer,
        '--color-on-tertiary-container': colors.onTertiaryContainer,
        '--color-background': colors.background,
        '--color-on-background': colors.onBackground,
        '--color-surface': colors.surface,
        '--color-on-surface': colors.onSurface,
        '--color-surface-variant': colors.surfaceVariant,
        '--color-on-surface-variant': colors.onSurfaceVariant,
        '--color-outline': colors.outline,
        '--color-outline-variant': colors.outlineVariant,
        '--color-inverse-surface': colors.inverseSurface,
        '--color-inverse-on-surface': colors.inverseOnSurface,
        '--color-inverse-primary': colors.inversePrimary,
        '--color-error': colors.error,
        '--color-on-error': colors.onError,
        '--color-error-container': colors.errorContainer,
        '--color-on-error-container': colors.onErrorContainer,
        '--color-shadow': colors.shadow,
        '--color-scrim': colors.scrim,
        '--color-surface-disabled': colors.surfaceDisabled,
        '--color-on-surface-disabled': colors.onSurfaceDisabled,
        '--color-backdrop': colors.backdrop,
        '--color-surface-dim': colors.surfaceDim,
        '--color-surface-bright': colors.surfaceBright,
        '--color-surface-container-lowest': colors.surfaceContainerLowest,
        '--color-surface-container-low': colors.surfaceContainerLow,
        '--color-surface-container': colors.surfaceContainer,
        '--color-surface-container-high': colors.surfaceContainerHigh,
        '--color-surface-container-highest': colors.surfaceContainerHighest,
        '--color-surface-tint': colors.surfaceTint,
    });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const colors = useThemeColors('light');

    const value = useMemo(() => ({ colors }), [colors]);
    const cssVars = useMemo(() => buildCSSVariables(colors), [colors]);

    return (
        <ThemeContext.Provider value={value}>
            <View style={cssVars} className='flex-1'>
                {children}
            </View>
        </ThemeContext.Provider>
    );
}

export function useAppThemeColors() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error(
            'useAppThemeColors must be used within a ThemeProvider',
        );
    }
    return ctx.colors;
}
