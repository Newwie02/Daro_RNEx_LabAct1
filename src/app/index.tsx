import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AboutSection from '@/components/AboutSection';
import ProfileHero from '@/components/ProfileHero';
import SkillsSection from '@/components/SkillsSection';
import SocialSection from '@/components/SocialSection';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View className='flex-1 bg-surface-lowest'>
            <ScrollView
                className='flex-1'
                contentContainerStyle={{
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom + 24,
                }}
                showsVerticalScrollIndicator={false}>
                {/* Hero */}
                <ProfileHero />

                {/* Spacer */}
                <View className='h-8' />

                {/* About */}
                <AboutSection />

                {/* Spacer */}
                <View className='h-8' />

                {/* Skills */}
                <SkillsSection />

                {/* Spacer */}
                <View className='h-8' />

                {/* Socials */}
                <SocialSection />

                {/* Footer */}
                <View className='items-center px-6 pb-4 pt-10'>
                    <View className='items-center gap-1'>
                        <Text className='text-outline/40 font-lexend-deca text-[10px]'>
                            Built with React Native
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
