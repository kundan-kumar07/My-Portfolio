import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import DataS from './DataS.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    DataS
};

export const workData = [
    {
        title: 'Edusity',
        description: 'Frontend Project',
        bgImage: '/university.png',
        link:"https://university-page-frontend-project.vercel.app/"
    },
    {
        title: 'Quick.ai',
        description: 'Full stack ai saas app',
        bgImage: '/work2.jpg',
        link:"https://ai-saas-app-gray.vercel.app/"
        
    },
    {
        title: 'Spotify Clone',
        description: 'Full Stack Project with Admin feature',
        bgImage: '/work-3.jpg',
        link:"https://spotify-frontend-oq0o.onrender.com/"
    },
    {
        title: 'Ford Car Price Prediction',
        description: 'DS/ML Project',
        bgImage: '/work-4.jpg',
        link:"https://fordcarpriceprediction-kr3dvwr6akkvugfrfghync.streamlit.app/"
    },
    
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Full-Stack Web Development', description: 'Building scalable and modern web applications using React, Next.js, Node.js, and databases — delivering responsive designs with secure and optimized backends..', link: '' },
    
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'Designing intuitive and user-centered interfaces with Figma and modern design principles, ensuring smooth interactions that align with business goals.', link: '' },
    { icon: assets.web_icon, title: 'Data Science & Machine Learning', description: 'Applying Python, Pandas, and machine learning models to analyze data, build predictive systems, and create data-driven insights for smarter decisions.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];