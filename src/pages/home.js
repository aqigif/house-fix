
import React from 'react';
import Content from '../components/content/content';
import Header from '../components/header/header';
import { AppWrap } from '../appStyles';



export default function Home() {
  return (
    <AppWrap>
      <Header />
      <Content name="home"/>
    </AppWrap>

  );
}
