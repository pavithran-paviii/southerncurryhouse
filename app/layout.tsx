import type { Metadata } from 'next'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalContextProvider from "../src/context/globalContext";
import "../src/index.css";

export const metadata: Metadata = {
  title: 'Southern Curry House',
  description: 'Southern Curry House a Indian Takeaway Restaurant In Canada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        <GlobalContextProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
          />
        </GlobalContextProvider>
      </body>
    </html>
  )
}