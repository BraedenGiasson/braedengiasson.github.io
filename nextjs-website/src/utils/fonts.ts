import { 
    Poppins, 
    Big_Shoulders_Text, 
    Roboto,
    Noto_Sans_TC,
    Montserrat,
    Raleway,
    Caveat
} from 'next/font/google';

export const poppins_init = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const big_shoulders_text_init = Big_Shoulders_Text({
    subsets: ['latin'],
    display: 'swap',
    variable: '--big-shoulders-text',
    weight: ['100', '300', '400', '500', '600', '700']
})

export const roboto_init = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--roboto',
    weight: ['100', '300', '400', '500', '700'],
})

export const noto_sans_tc_init = Noto_Sans_TC({
    subsets: ['latin'],
    display: 'swap',
    variable: '--noto-sans-tc',
    weight: ['100', '300', '400', '500', '700'],
})

// export const montserrat_init = Montserrat({
//     subsets: ['latin'],
//     display: 'swap',
//     variable: '--montserrat',
//     weight: ['100', '300', '400', '500', '700'],
// })

// export const raleway_init = Raleway({
//     subsets: ['latin'],
//     display: 'swap',
//     variable: '--raleway',
//     weight: ['100', '300', '400', '500', '700'],
// })

export const caveat_init = Caveat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--caveat',
    weight: ['400', '500', '600'],
})


export const poppins = poppins_init.variable;
export const big_shoulders_text = big_shoulders_text_init.variable;
export const roboto = roboto_init.variable;
export const noto_sans_tc = noto_sans_tc_init.variable;
export const caveat = caveat_init.variable;