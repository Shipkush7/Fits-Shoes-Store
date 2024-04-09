import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import shoe1 from '../assets/images/shoes--1.png'
import shoe3 from '../assets/images/shoes--3.png'
import shoe4 from '../assets/images/shoes--4.png'
import shoe5 from '../assets/images/shoes--5.jpg'
import shoe6 from '../assets/images/shoes--6.png'
import shoe7 from '../assets/images/shoes--7.png'

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe1,
        name: "Fits Air Jordan-041",
        price: "$200.20",
        bg_color:'#fffbf2',
    },
    {
        imgURL: shoe4,
        name: "Fits Air Jordan-10",
        price: "$210.20",
        bg_color: '#e8f3ea'
    },
    {
        imgURL: shoe3,
        name: "Fits Air Jordan-100",
        price: "$220.20",
        bg_color:'#fbf2f6',
    },
    {
        imgURL: shoe5,
        name: "Fits Air Jordan-001",
        price: "$230.20",
        bg_color:'#f4f4ff'
    },
    {
        imgURL: shoe6,
        name: "Fits Air Jordan-031",
        price: "$530.20",
        bg_color: '#f3fef4'
    },
    {
        imgURL: shoe7,
        name: "Fits Air Jordan-01",
        price: "$250.20",
        bg_color: '#f2f3f4'
    },
    

];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Sam Curran',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Monica',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Fits Waffle Racer", link: "/" },
            { name: "Fits Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@fits.com", link: "mailto:customer@fits.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
