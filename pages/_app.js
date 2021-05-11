import '../styles/globals.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function MyApp({ Component, pageProps }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
        >
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>
    )
}

export default MyApp