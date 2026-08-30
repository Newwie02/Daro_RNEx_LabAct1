import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import SectionHeader from '@/components/SectionHeader';
import { useAppThemeColors } from '@/components/ThemeProvider';
import { portfolio } from '@/constants/portfolio';

const skillIcons: Record<
    string,
    React.ComponentProps<typeof FontAwesome5>['name']
> = {
    Coding: 'code',
    'Web Development': 'globe',
    'UI/UX Design': 'paint-brush',
    'Problem Solving': 'lightbulb',
    'Team Collaboration': 'users',
};

export default function SkillsSection() {
    const colors = useAppThemeColors();

    return (
        <View className='items-center px-6'>
            <SectionHeader label='Skills & Interests' />
            <View className='flex-row flex-wrap justify-center gap-2.5'>
                {portfolio.skills.map((skill) => {
                    const iconName = skillIcons[skill];
                    return (
                        <View
                            key={skill}
                            className='flex-row items-center gap-2 rounded-2xl px-4 py-3'
                            style={{
                                backgroundColor: colors.surfaceContainerLow,
                            }}>
                            {iconName && (
                                <FontAwesome5
                                    name={iconName}
                                    size={13}
                                    color={colors.onSurfaceVariant}
                                    solid
                                />
                            )}
                            <Text
                                className='font-lexend-deca text-[13px] font-medium'
                                style={{
                                    color: colors.onSurfaceVariant,
                                }}>
                                {skill}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
