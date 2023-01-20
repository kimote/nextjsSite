import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import Industry from '../components/Industry';
import Peak from '../components/Peak';
import Learnmore from '../components/Learnmore';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='Peak Institute Of Technology' message='We Make It Haen Where It Simz To Be Imposible ' />
      <Industry/>
      <Instagram />
      <Peak />
      <Learnmore />
      <Herosection />
      
    </div>
  );
}

//<Slider slides={SliderData} />