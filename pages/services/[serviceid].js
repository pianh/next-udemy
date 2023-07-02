import React from 'react';
import { useRouter } from 'next/router';
export default function Index() {
    const router = useRouter();
    return (
        <div>
            <h1>Service id is {router.query.serviceid}</h1>
        </div>
    );
}
