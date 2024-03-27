/* eslint-disable */
import { 
    greenThemeLight, 
    greenThemeDark, 
    bwThemeLight, 
    bwThemeDark, 
    blueThemeLight, 
    blueThemeDark, 
    redThemeLight, 
    redThemeDark, 
    orangeThemeLight, 
    orangeThemeDark, 
    purpleThemeLight, 
    purpleThemeDark, 
    pinkThemeLight, 
    pinkThemeDark, 
    yellowThemeLight, 
    yellowThemeDark
} from '../theme/theme'

import type { ThemeData } from '@/theme/theme'

type Theme = {
    theme: ThemeData
}

export const themeData: Theme = {
    theme: blueThemeDark
}


// Choose theme from above