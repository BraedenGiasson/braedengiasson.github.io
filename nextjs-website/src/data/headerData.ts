import resume from '@/assets/pdf/BraedenGiasson_CV.pdf'
// import resume from '/BraedenGiasson_CV.pdf'
import profilePicture from '@/assets/jpeg/profilePic.JPEG'

type HeaderData = {
    name: string,
    title: string,
    desciption: string,
    image: string | any,
    resumePdf: any | string
}

export const headerData: HeaderData = {
    name: 'Braeden Giasson',
    title: "Software Developer",
    desciption:"Have you met someone who loves coding and traveling? Hey, I'm Braeden! I'm a full stack software developer from Canada. In short, I love coding, learning languages, and exploring new places. \nScroll down to get to know me better!",
    // image: 'https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/landingImg.png',
    image: profilePicture,
    resumePdf: resume
}
