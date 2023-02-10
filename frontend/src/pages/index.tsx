
import HeroSection from '@/components/sections/hero/HeroSection';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Get more clients for your business using SEO - seobarista.com</title>
        <meta name="description" content="#1 SEO Tool for small businesses and solo enterpreneurs made with simplicity in mind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <HeroSection sampleTextProp='Homepage'/>
    </>
  );
}
