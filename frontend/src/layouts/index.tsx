import React, { ReactNode } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

type Props = {
  children: ReactNode
}

const PageLayout: React.FunctionComponent<Props> = (props) => {
  return (
    <div className='layout-page'>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default PageLayout;