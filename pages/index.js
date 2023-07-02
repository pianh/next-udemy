import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/HeaderDefault';
import Footer from '../components/footer/FooterDefault';
import styles from '../styles/Home.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const router = useRouter();
    const userid = 23;
    const username = 'karma';

    return (
        <>
            <h1>Hello</h1>
            <h1>user</h1>
            <Link href="/users">Index/Users</Link>
            <br />
            <Link href="/services">Services</Link>
            <br />
            <button
                onClick={() => {
                    router.push('/users');
                }}
            >
                Navigate to users
            </button>
            <br />
            <button
                onClick={() => {
                    router.push('/services');
                }}
            >
                Navigate to services
            </button>
            <br />
            <button
                onClick={() => {
                    router.push(`/users/${userid}/${username}`);
                }}
            >
                Navigate to user id 5 name is karma
            </button>
        </>
    );
}
