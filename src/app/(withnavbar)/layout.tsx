import { ReactNode } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';



type WebsiteLayoutProps = {
  children: ReactNode;
};


const WebsiteLayout = ({children}: WebsiteLayoutProps) => {
  return (
    <div>
        <div className='container'>
          <Header />
            {children}
          <Footer/>

        </div>
    </div>
  )
}

export default WebsiteLayout
