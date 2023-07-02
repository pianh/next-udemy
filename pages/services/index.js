import React from 'react';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
export default function services() {
    return (
        <div className={styles.container}>
            <h1>services</h1>
            <Link href="/">Index/Home</Link>
            <br />
            <Link href="/users">users</Link>
        </div>
    );
}
