import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/HeaderDefault';
import Footer from '../components/footer/FooterDefault';
import styles from '../styles/Home.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <h1>Hello</h1>
            <h1>user</h1>
            <Link href="/users">Index/Users</Link>
            <br />
            <Link href="/services">Services</Link>
        </>
    );
}
