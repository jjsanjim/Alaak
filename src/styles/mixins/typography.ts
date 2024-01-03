import { StyleSheet } from 'react-native';

import { scaleFont } from '../../utils/scaleSizes';

import { colors, fontSizes } from '../constants';

export default StyleSheet.create({
  // Font Family
  // - The default Sans Serif font
  fontSans: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  fontSansItalic: {
    fontFamily: 'Poppins-Italic',
    fontStyle: 'italic',
    fontWeight: '400',
  },
  fontSansMedium: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  fontSansMediumItalic: {
    fontFamily: 'Poppins-MediumItalic',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  fontSansSemiBold: {
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  fontSansSemiBoldItalic: {
    fontFamily: 'Poppins-SemiBoldItalic',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  fontSansBold: {
    fontFamily: 'Poppins-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  fontSansBoldItalic: {
    fontFamily: 'Poppins-BoldItalic',
    fontStyle: 'italic',
    fontWeight: '700',
  },
  // - Monospace font
  fontMono: {
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  fontMonoMedium: {
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
  },
  fontMonoSemiBold: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  fontMonoBold: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
  },
  // Font Size
  textXxs: {
    fontSize: scaleFont(fontSizes.xxs),
  },
  textXs: {
    fontSize: scaleFont(fontSizes.xs),
  },
  textSm: {
    fontSize: scaleFont(fontSizes.sm),
  },
  textBase: {
    fontSize: scaleFont(fontSizes.base),
  },
  textLg: {
    fontSize: scaleFont(fontSizes.lg),
  },
  textXl: {
    fontSize: scaleFont(fontSizes.xl),
  },
  textXxl: {
    fontSize: scaleFont(fontSizes.xxl),
  },
  textXxxl: {
    fontSize: scaleFont(fontSizes.xxxl),
  },
  // Text Alignment
  textAuto: {
    textAlign: 'auto',
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textJustify: {
    textAlign: 'justify',
  },
  // Text Color
  textTransparent: {
    color: colors.transparent,
  },
  textBlack: {
    color: colors.black,
  },
  textWhite: {
    color: colors.white,
  },
  textPrimary: {
    color: colors.primary,
  },
  textSecondary: {
    color: colors.secondary,
  },
  textTertiary: {
    color: colors.tertiary,
  },
  textSuccess: {
    color: colors.success,
  },
  textError: {
    color: colors.error,
  },
  textWarning: {
    color: colors.warning,
  },
  textInfo: {
    color: colors.info,
  },
  textNeutro: {
    color: colors.neutroText,
  },
  textGray200: {
    color: colors.gray200,
  },
  textGray300: {
    color: colors.gray300,
  },
  textGray400: {
    color: colors.gray400,
  },
  textGray500: {
    color: colors.gray500,
  },
  textGray600: {
    color: colors.gray600,
  },
  textGray700: {
    color: colors.gray700,
  },
  textGray800: {
    color: colors.gray800,
  },
  textAccent1: {
    color: colors.accent1,
  },
  textAccent2: {
    color: colors.accent2,
  },
  textSubTitle: {
    color: colors.subText,
  },
  // Text Decoration
  underline: {
    textDecorationLine: 'underline',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  underlineLineThrough: {
    textDecorationLine: 'underline line-through',
  },
  noUnderline: {
    textDecorationLine: 'none',
  },
  // Text Transform
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  normalCase: {
    textTransform: 'none',
  },
});
