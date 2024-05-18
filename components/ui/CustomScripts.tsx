import Script from "next/script";

const CustomScripts = () => {
    return (
        <>
            {/*===========GOOGLE ANALYTICS==============*/}
            <Script
                strategy='afterInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=G-503VYT6TSX`}
            />
            <Script
                id='gtag-init'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-503VYT6TSX', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />

            {/*===========ADSENSE=============*/}
            <meta name="google-adsense-account" content="ca-pub-3003249944965153"/>

        </>
    );
};


export default CustomScripts;