import '../global.css';
import { NavigationBar } from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useAppThemeColors } from '@/components/ThemeProvider';
import { useAppFonts } from '@/hooks/useFonts';
import { useNavBarColor } from '@/hooks/useThemeColors';

function RootLayoutInner() {
    const colors = useAppThemeColors();

    useNavBarColor(colors);

    return (
        <>
            <StatusBar style='dark' />
            <NavigationBar style='light' />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.background },
                }}
            />
        </>
    );
}

export default function RootLayout() {
    const fontsLoaded = useAppFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ThemeProvider>
            <RootLayoutInner />
        </ThemeProvider>
    );
}
