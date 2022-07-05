import next from 'next';
import React, { useState } from 'react';
import AboutPage from '../components/aboutPage/aboutPage';
import Layout from '../components/layout/layout';

export default function About() {
  return (
    <Layout>
      <AboutPage/>
    </Layout>
  );
}
