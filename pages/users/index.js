import React from 'react';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Index() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1>user</h1>
            <Link href="/">Index/Home</Link>
            <br />
            <Link href="/services">Services</Link>
        </div>
    );
}
