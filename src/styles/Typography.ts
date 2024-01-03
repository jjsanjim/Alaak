import type { SizesType, LineHeightType, FontFamilyType } from './types';
import { constants } from './index';
const size: SizesType = {
  XXS: 10,
  XS: 12,
  S: 14,
  M: 16,
  L: 18,
  XL: 20,
  XXL: 24,
  XXXL: 34,
};

const lineHeight: LineHeightType = {
  XXS: 12.1,
  XS: 14.52,
  S: 16.94,
  M: 20,
  L: 22,
  XL: 24,
  XXL: 30,
  XXXL: 39,
};

const fontFamilyPoppins: FontFamilyType = {
  REGULAR: 'Poppins-Regular',
  BOLD: 'Poppins-Bold',
  SEMIBOLD: 'Poppins-SemiBold',
  MEDIUM: 'Poppins-Medium',
  ITALIC: 'Poppins-Italic',
  LIGHT: 'Poppins-Light',
};
const fontFamilyInter: FontFamilyType = {
  REGULAR: 'Inter-Regular',
  BOLD: 'Inter-Bold',
  SEMIBOLD: 'Inter-SemiBold',
  MEDIUM: 'Inter-Medium',
  ITALIC: 'Poppins-Italic',
  LIGHT: 'Inter-Light',
};

const fontConfig = {
  default: {
    fontFamily: fontFamilyPoppins.REGULAR,
    color: constants.colors.black,
  },
  'tag-title': {
    fontFamily: fontFamilyPoppins.BOLD,
    fontSize: size.XXXL,
    lineHeight: lineHeight.XXXL,
    color: constants.colors.black,
  },
  'tag-title-level-1': {
    fontFamily: fontFamilyPoppins.BOLD,
    fontSize: size.XXL,
    lineHeight: lineHeight.XXL,
    color: constants.colors.gray800,
  },
  'tag-title-level-2': {
    fontFamily: fontFamilyPoppins.BOLD,
    fontSize: size.XL,
    lineHeight: lineHeight.XL,
    color: constants.colors.black,
  },
  'tag-title-level-3': {
    fontFamily: fontFamilyPoppins.BOLD,
    fontSize: size.L,
    lineHeight: lineHeight.L,
    color: constants.colors.black,
  },
  'tag-subtitle': {
    fontFamily: fontFamilyPoppins.BOLD,
    fontSize: size.S,
    lineHeight: lineHeight.XL,
    color: constants.colors.black,
  },
  'tag-subtitle-level-1': {
    fontFamily: fontFamilyPoppins.MEDIUM,
    fontSize: size.S,
    lineHeight: lineHeight.S,
    color: constants.colors.gray700,
  },
  'tag-subtitle-level-1-FontWeight': {
    fontFamily: fontFamilyPoppins.BOLD,
    fontSize: size.S,
    lineHeight: lineHeight.S,
    color: constants.colors.black,
  },
  'tag-subtitle-level-2': {
    fontFamily: fontFamilyInter.MEDIUM,
    fontSize: size.XS,
    lineHeight: lineHeight.XS,
    color: constants.colors.gray700,
  },
  'tag-legend': {
    fontSize: size.XXS,
    lineHeight: lineHeight.XXS,
  },
  'body-1': {
    fontFamily: fontFamilyInter.REGULAR,
    fontSize: size.M,
    lineHeight: lineHeight.M,
  },
  'body-2': {
    fontFamily: fontFamilyInter.REGULAR,
    fontSize: size.S,
    lineHeight: lineHeight.S,
  },
  'body-3': {
    fontFamily: fontFamilyInter.REGULAR,
    fontSize: size.XS,
    lineHeight: lineHeight.XS,
  },
  'body-4': {
    fontFamily: fontFamilyInter.LIGHT,
    fontSize: size.XXS,
    lineHeight: lineHeight.XXS,
  },
  Paragraph: {
    fontFamily: fontFamilyInter.REGULAR,
    fontSize: size.S,
    lineHeight: lineHeight.L,
    color: constants.colors.black,
  },
};

export { fontFamilyInter, fontFamilyPoppins, lineHeight, size, fontConfig };
