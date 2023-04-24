import 'focus-visible'
import '@/styles/tailwind.css'
import { Provider } from 'react-redux'
import store, { persistor } from "@/store/"
import { PersistGate } from "redux-persist/integration/react";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { LeadModal } from "@/components/LeadModal"
import { ChatwootWidget } from "@/components/ChatwootWidget.jsx"
import { UserProvider } from "@auth0/nextjs-auth0/client"
export default function App({ Component, pageProps }) {
  const { user } = pageProps

  return (
    <>
      <UserProvider>
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
      </UserProvider>
    </>
  )
}
