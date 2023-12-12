import React, { ReactNode } from 'react'
import { Footer, Navbar } from '.'
import TopNav from './TopNav';

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
        <header>
            <TopNav />
            <Navbar />
        </header>
        <main className='main-container'>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout