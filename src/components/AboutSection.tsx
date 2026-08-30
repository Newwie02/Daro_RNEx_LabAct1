import { Text, View } from 'react-native';
import SectionHeader from '@/components/SectionHeader';
import { portfolio } from '@/constants/portfolio';

export default function AboutSection() {
    return (
        <View className='items-center px-6'>
            <SectionHeader label='About Me' />
            <Text className='text-on-surface/80 text-center font-lexend-deca text-[15px] leading-[1.7]'>
                {portfolio.about}
            </Text>
        </View>
    );
}
