import { Text, View } from 'react-native';

interface SectionHeaderProps {
    label: string;
}

export default function SectionHeader({ label }: SectionHeaderProps) {
    return (
        <View className='mb-4 flex-row items-center justify-center gap-3'>
            <Text className='font-lexend-deca text-[11px] font-semibold uppercase tracking-[0.15em] text-outline'>
                {label}
            </Text>
        </View>
    );
}
