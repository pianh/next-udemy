import React from 'react';
import { useRouter } from 'next/router';
export default function Index() {
    const router = useRouter();
    return (
        <div>
            <h1>Service details</h1>
            <h1>service id is {router.query.serviceid}</h1>
            <h1>service name is {router.query.sname}</h1>
        </div>
    );
}
