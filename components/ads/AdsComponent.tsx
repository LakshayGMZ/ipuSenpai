"use client"
import { useEffect } from 'react';

const AdComponent = () => {
    useEffect(() => {
        // Create the first script tag dynamically
        const atOptionsScript = document.createElement('script');
        atOptionsScript.type = 'text/javascript';
    atOptionsScript.innerHTML = `
    atOptions = {
        'key': '61c36938a040231ad953c72b7752d322',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
    };
    `;

    // Create the second script tag to load the external script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/61c36938a040231ad953c72b7752d322/invoke.js';

    // Append both scripts to the body or specific div
    document.body.appendChild(atOptionsScript);
    document.body.appendChild(invokeScript);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
        document.body.removeChild(atOptionsScript);
        document.body.removeChild(invokeScript);
    };
    }, []);

    return null; // Since it's just an ad script, no need to return JSX
};

export default AdComponent;
