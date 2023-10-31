import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConsentBanner, ConsentProvider } from 'react-hook-consent'
import 'react-hook-consent/dist/styles/style.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConsentProvider
    options={{
        services: [
            {
                id: 'essentials',
                name: 'Essential cookies only',
           
                cookies: [{ pattern: 'cookie-name' }],
                localStorage: ['local-storage-key'], // fallback if cookies is not available
                mandatory: true,
            },
            {
              id: 'optional',
              name: 'Marketing',
         
              cookies: [{ pattern: 'cookie-name' }],
              localStorage: ['local-storage-key'],
              mandatory: false,

            },
        ],
        theme: 'dark',
    }}
>

    <App />
    <ConsentBanner
    settings={{ hidden: false, label: 'More', modal: { title: 'cookies' } }}
    decline={{  label: 'No' }}
    approve={{ label: 'Yes' }}
>
     <>
        Can we use cookies and external services according to our <a href="/policy">privacy policy</a> to
        improve the browsing experience?
    </>
</ConsentBanner>
</ConsentProvider>
  </React.StrictMode>,
)
