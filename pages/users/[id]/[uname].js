import React from 'react';
import { useRouter } from 'next/router';
export default function Index() {
    const router = useRouter();
    return (
        <div>
            <h1>User details</h1>
            <h1>user id is {router.query.id}</h1>
            <h1>User name is {router.query.uname}</h1>
        </div>
    );
}
