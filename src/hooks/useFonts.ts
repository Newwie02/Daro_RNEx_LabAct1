import {
    LexendDeca_100Thin,
    LexendDeca_200ExtraLight,
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_600SemiBold,
    LexendDeca_700Bold,
    LexendDeca_800ExtraBold,
    LexendDeca_900Black,
} from '@expo-google-fonts/lexend-deca';
import { useFonts } from 'expo-font';

export function useAppFonts() {
    return useFonts({
        LexendDeca_100Thin,
        LexendDeca_200ExtraLight,
        LexendDeca_300Light,
        LexendDeca_400Regular,
        LexendDeca_500Medium,
        LexendDeca_600SemiBold,
        LexendDeca_700Bold,
        LexendDeca_800ExtraBold,
        LexendDeca_900Black,
    });
}
