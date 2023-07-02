import React from 'react';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
export default function users() {
    return (
        <div className={styles.container}>
            <h1>user</h1>
            <Link href="/">Index/Home</Link>
            <br />
            <Link href="/services">Services</Link>
        </div>
    );
}
