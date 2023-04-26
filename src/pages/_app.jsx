import 'focus-visible'
import '@/styles/tailwind.css'
import { Provider } from 'react-redux'
import store, { persistor } from "@/store/"
import { PersistGate } from "redux-persist/integration/react";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { LeadModal } from "@/components/LeadModal"
import { ChatwootWidget } from "@/components/ChatwootWidget.jsx"
import { SessionProvider } from "next-auth/react"
import "@/components/Header.css"
export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <GoogleReCaptchaProvider
          reCaptchaKey='6LdUu48lAAAAAArT7OBzolTuoqaNRiSJMvWLeQoY'
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined
          }}
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
              <LeadModal />
              <ChatwootWidget />
            </PersistGate>
          </Provider>
        </GoogleReCaptchaProvider>
      </SessionProvider>

    </>
  )
}
