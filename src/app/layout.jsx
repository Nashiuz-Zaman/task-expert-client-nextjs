// font
import { Inter } from 'next/font/google';

// components
import Backdrop from '@/components/shared/Backdrop/Backdrop';
import AuthComponent from '@/components/shared/AuthComponent/AuthComponent';

// redux
import Providers from '@/lib/redux/Providers';

// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';

// styles
import './globals.css';

// init font
const inter = Inter({ subsets: ['latin'] });

// meta data
export const metadata = {
   title: 'Task Expert | Streamlining Your Productivity',
   description:
      "Task Expert is all you'll ever need for seamless workflow management of your everyday responsibilities",
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={`${inter.className} text-textPrimary`}>
            <Providers>
               {/* react toastify */}
               <ToastContainer
                  position='top-center'
                  autoClose={2000}
                  transition={Slide}
                  hideProgressBar
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
               />

               {/* auth Component */}
               <AuthComponent />

               {/* backdrop component */}
               <Backdrop />
               {children}
            </Providers>
         </body>
      </html>
   );
}
