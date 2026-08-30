# Angel Daro — Portfolio

A personal portfolio app for Angel Daro, BSIT 3rd Year student at University of Mindanao.

![Screenshot](./docs/Screenshot.jpg)

Built with React Native, Expo, NativeWind, and Material 3 design tokens.

## Stack

- Expo 57
- React Native 0.86
- NativeWind 4 (Tailwind CSS for React Native)
- @pchmn/expo-material3-theme (dynamic Material 3 palette)
- @expo/vector-icons (FontAwesome5 icons)
- react-native-reanimated (entrance animations)
- TypeScript (strict)

## Quick Start

```bash
npm install
npm start
```

## Scripts

| Command           | Description      |
| ----------------- | ---------------- |
| `npm start`       | Expo dev server  |
| `npm run android` | Start on Android |
| `npm run ios`     | Start on iOS     |
| `npm run web`     | Start on web     |
| `npm run lint`    | Lint             |
| `npm run format`  | Format           |

## Structure

```
src/
  app/
    _layout.tsx          — Root layout with ThemeProvider
    index.tsx            — Single-page portfolio scroll
  components/
    ThemeProvider.tsx    — Light-only Material 3 CSS variable injection
    ProfileHero.tsx      — Animated profile image, name, role
    SectionHeader.tsx    — Centered uppercase section label
    AboutSection.tsx     — Bio paragraph
    SkillsSection.tsx    — Skill chips with icons
    SocialSection.tsx    — Icon-only social links
  constants/
    portfolio.ts         — All profile data (name, bio, skills, links)
  hooks/
    useThemeColors.ts    — useMaterial3Theme wrapper
    useFonts.ts          — Lexend Deca font loader
```

## Design

- **Theme**: Light-only, warm terracotta seed color (`#C67B5C`)
- **Font**: Lexend Deca (400–700)
- **Colors**: Dynamic Material 3 palette via CSS variables
- **Layout**: Center-aligned, single scroll, no navigation chrome
- **Sections**: Hero → About → Skills → Socials → Footer

## Disclaimer

_This project is for personal and educational purposes only. It is not intended for production use._

## License

MIT
