import { FontAwesome5 } from '@expo/vector-icons';
import { Linking, Pressable, View } from 'react-native';
import SectionHeader from '@/components/SectionHeader';
import { useAppThemeColors } from '@/components/ThemeProvider';
import { portfolio } from '@/constants/portfolio';

interface SocialItem {
    iconName: React.ComponentProps<typeof FontAwesome5>['name'];
    url: string;
    color: string;
}

export default function SocialSection() {
    const colors = useAppThemeColors();

    const items: SocialItem[] = [
        {
            iconName: 'envelope',
            url: `mailto:${portfolio.social.email}`,
            color: colors.primary,
        },
        {
            iconName: 'github',
            url: portfolio.social.github,
            color: colors.onSurface,
        },
        {
            iconName: 'facebook-f',
            url: portfolio.social.facebook,
            color: '#1877F2',
        },
    ];

    return (
        <View className='items-center px-6'>
            <SectionHeader label='Socials' />
            <View className='flex-row items-center justify-center gap-4'>
                {items.map((item, i) => (
                    <Pressable
                        key={i}
                        onPress={() => Linking.openURL(item.url)}
                        className='h-14 w-14 items-center justify-center rounded-2xl active:opacity-70'
                        style={{ backgroundColor: item.color + '14' }}>
                        <FontAwesome5
                            name={item.iconName}
                            size={20}
                            color={item.color}
                            solid
                        />
                    </Pressable>
                ))}
            </View>
        </View>
    );
}
