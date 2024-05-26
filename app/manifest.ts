import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'IPU Senpai',
        short_name: "IPU Senpai",
        description: "The modern and better IPU ranklist.",
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}