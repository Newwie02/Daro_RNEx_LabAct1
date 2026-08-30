import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { portfolio } from '@/constants/portfolio';

export default function ProfileHero() {
    const insets = useSafeAreaInsets();
    const scale = useSharedValue(0.8);
    const opacity = useSharedValue(0);
    const nameOpacity = useSharedValue(0);
    const nameTranslateY = useSharedValue(12);
    const tagOpacity = useSharedValue(0);

    useEffect(() => {
        scale.value = withDelay(
            100,
            withTiming(1, { duration: 600, easing: Easing.out(Easing.cubic) }),
        );
        opacity.value = withDelay(
            100,
            withTiming(1, { duration: 500, easing: Easing.out(Easing.cubic) }),
        );
        nameOpacity.value = withDelay(
            350,
            withTiming(1, { duration: 400, easing: Easing.out(Easing.cubic) }),
        );
        nameTranslateY.value = withDelay(
            350,
            withTiming(0, { duration: 400, easing: Easing.out(Easing.cubic) }),
        );
        tagOpacity.value = withDelay(
            550,
            withTiming(1, { duration: 400, easing: Easing.out(Easing.cubic) }),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const imageStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));

    const nameStyle = useAnimatedStyle(() => ({
        opacity: nameOpacity.value,
        transform: [{ translateY: nameTranslateY.value }],
    }));

    const tagStyle = useAnimatedStyle(() => ({
        opacity: tagOpacity.value,
    }));

    return (
        <View
            className='items-center px-6'
            style={{ paddingTop: insets.top + 24, paddingBottom: 8 }}>
            {/* Profile Image */}
            <Animated.View style={imageStyle}>
                <View className='border-primary/25 h-[120px] w-[120px] overflow-hidden rounded-full border-[3px]'>
                    <Image
                        source={require('../../assets/images/profile.jpg')}
                        className='h-full w-full'
                        resizeMode='cover'
                    />
                </View>
            </Animated.View>

            {/* Name */}
            <Animated.View style={nameStyle} className='mt-5 items-center'>
                <Text className='font-lexend-deca text-[28px] font-bold tracking-tight text-on-surface'>
                    {portfolio.name}
                </Text>
            </Animated.View>

            {/* Role + descriptor */}
            <Animated.View
                style={tagStyle}
                className='mt-1.5 items-center gap-1.5'>
                <Text className='font-lexend-deca text-sm font-medium uppercase tracking-[0.08em] text-primary'>
                    {portfolio.role}
                </Text>
                <Text className='font-lexend-deca text-[13px] text-outline'>
                    {portfolio.descriptor}
                </Text>
            </Animated.View>
        </View>
    );
}
