import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import { Slide } from "react-awesome-reveal";
import YouTube from 'react-youtube';
import Footer from '../components/Footer';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../utils/faq.json';
import AnimatedSticked from '../components/AnimatedSticked';
import { AnimationIntegration } from '../components/Lotties';
import FEATURES from '../utils/features.json';
import PriceCard from '../components/PriceCard';
import Nagivaton from '../components/Nagivaton';


export default function Home() {
  return (
    <div >
      <Head>
        <title>iMustSign</title>
        <meta name="description" content="All your links, All at once, All in one place!" />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook */}
        <meta property="og:title" content="iMustSign" />
        <meta property="og:description" content="All your links, All at once, All in one place!" />
        <meta property="og:image" content="/logoText.png" />
        <meta property="og:url" content="https://iMustSign.m2kdevelopments.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="iMustSign" />
        <meta name="twitter:description" content="All your links, All at once, All in one place!" />
        <meta name="twitter:image" content="/logoText.png" />
        <meta name="twitter:card" content="/bannerText.png" />

        {/* pinterest */}
        <meta name="pinterest-rich-pin" content="true" />
      </Head>

      {/* Navigation */}
      <Nagivaton />

      <main className='max-w-6xl justify-end self-center mx-auto px-6'>

        {/* <AnimatedSticked /> */}

        {/* Title Section */}
        <section className='mx-auto my-14'>
          <Image src="/logo.png" alt="iMustSign" width={350} height={350} className='my-10 mx-auto text-center' />
          <h1 className='hidden'>iMustSign</h1>
          <div className='flex justify-center text-center'>
            <TypeAnimation
              sequence={[
                'All your links',
                1000,
                'All at once',
                1000,
                'All in one place!',
                1000,
              ]}
              speed={50}
              style={{ fontSize: '3rem', textAlign: "center" }}
              repeat={Infinity}
            />
          </div>

          <Slide>
            <div className='mx-auto w-[80%] my-14'>
              <Link id="iMustSign-extension" className='flex justify-center p-6 mobile:text-2xl tablet:text-5xl drop-shadow bg-green-700 text-white hover:bg-slate-400 rounded-sm duration-500' href="https://chrome.google.com/webstore/detail/igkkojjaikfmiibedalhgmfnjohlhmaj" target='_blank'>
                <Image src="/chrome.png" alt="iMustSign" width={60} height={30} />
                <span className='px-3'>Try Our Extension</span>
              </Link>
            </div>
          </Slide>
          <br />
          <p className='text-xl'>iMustSign is your ultimate solution for managing and organizing your web links with ease. This versatile Chrome extension empowers you to save, categorize, and access your online resources like never before. Say goodbye to the chaos of scattered bookmarks and hello to streamlined productivity.</p>
        </section>


        <section className='mx-auto w-full text-center my-[70px]'>
          <div className='mobile:hidden tablet:block my-16 drop-shadow-2xl p-2 bg-[#FFFFFF66] w-[80%] h-fit'>
            <YouTube videoId="0vAi1V-_r6I"
              title="iMustSign"
              opts={{
                height: '440',
                width: '100%',
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                  origin: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://iMustSign.m2kdevelopments.com'
                },
              }}
              onReady={(event) => event.target.pauseVideo()} />
          </div>
        </section>


        {/* Features */}
        <section className='mx-auto my-8 grid mobile:grid-cols-1 tablet:grid-cols-2'>
          <div className='w-fit h-96 drop-shadow-md rounded-xl'>
          </div>
          <div>
            <h2 className='text-6xl my-4'>Features</h2>
            {/* Styles in the css file */}
            <ol className='tick'>
              <li>
                <h3>Effortless Link Saving</h3>
                <p>Save links from the web with a single click, and watch as they&apos;re neatly organized in one central hub.</p>
              </li>
              <li>
                <h3>Intelligent Auto-Sorting</h3>
                <p>iMustSign automatically categorizes your saved links based on their source, whether it&apos;s from social media platforms like Facebook, Instagram, LinkedIn, or other websites.</p>
              </li>
              <li>
                <h3>Seamless Integration with URL Shorteners</h3>
                <p>Enjoy the convenience of integrated Bitly and other popular URL shorteners to keep your links clean and concise.</p>
              </li>
              <li>
                <h3>Intuitive Search Functionality</h3>
                <p>Easily find any link you&apos;ve saved by using our powerful search feature. No more endless scrolling or digging through folders.</p>
              </li>
              <li>
                <h3>Folder Organization</h3>
                <p>Create custom folders to sort and manage your links. Keep everything neatly tucked away for quick access.</p>
              </li>
              <li>
                <h3>Access from Messenger Platforms</h3>
                <p>Our extension embeds directly into Facebook Messenger, Instagram, and LinkedIn. You can access your saved links right from these platforms whenever you need them.</p>
              </li>
              <li>
                <h3>Share with Ease</h3>
                <p>Share links with colleagues, friends, and family without leaving your preferred messenger platform.</p>
              </li>
              <li>
                <h3>Cross-Device Sync</h3>
                <p>Enjoy a seamless experience across multiple devices. Your links are always within reach, whether you&apos;re on your desktop or mobile.</p>
              </li>
              <li>
                <h3>Clean, User-Friendly Interface</h3>
                <p>The extension is designed for simplicity and ease of use, making link management a breeze.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Extra Download Section */}
        <section className='mx-auto my-72'>
          <Slide>
            <div className='mx-auto w-[80%]'>
              <Link className='flex p-6 mobile:text-2xl tablet:text-5xl drop-shadow-md bg-yellow-300 hover:bg-slate-400 rounded-md' href="https://chrome.google.com/webstore/detail/igkkojjaikfmiibedalhgmfnjohlhmaj" target='_blank'>
                Start Using iMustSign TODAY!
              </Link>
            </div>
          </Slide>
        </section>


        {/* Integrations */}
        <section className='mx-auto my-10 grid mobile:grid-cols-1 tablet:grid-cols-2'>
          <div>
            <h2 className='text-6xl my-4'>Integrations</h2>
            {/* Styles in the css file */}
            <ol className='tick'>
              <li>Bitly</li>
              <li>Google Drive</li>
              <li>Google Sheets</li>
            </ol>
          </div>
          <AnimationIntegration />
        </section>

        {/* Pricing */}
        <section className="my-56">
          <h2 className='text-6xl my-4'>Pricing</h2>
          <div className='mx-auto my-10 grid mobile:grid-cols-1 tablet:grid-cols-2 tablet-xl:grid-cols-2 laptop:grid-cols-3'>
            <PriceCard
              title="Free Forever"
              description=""
              url="https://chrome.google.com/webstore/detail/igkkojjaikfmiibedalhgmfnjohlhmaj"
              price={0}
              discount={0}
              features={[...FEATURES,
              { title: "40 Free Link Slots", enabled: true },
              { title: "Sync with Mobile App", enabled: true },
              { title: "API Integrations", enabled: false },

              ]}
            />
            <PriceCard
              title="Basic Plan"
              description=""
              popular={true}
              url="/checkout/buy?id=0"
              price={8}
              discount={25}
              features={[...FEATURES,
              { title: "400 More Link Slots", enabled: true },
              { title: "Sync with Mobile App", enabled: true },
              { title: "API Integrations", enabled: true }

              ]}
            />
            <PriceCard
              title="Premium Plan"
              description=""
              url="/checkout/buy?id=1"
              price={15}
              discount={25}
              features={[...FEATURES,
              { title: "2000 More Link Slots", enabled: true },
              { title: "Sync with Mobile App", enabled: true },
              { title: "API Integrations", enabled: true },

              ]}
            />
          </div>

        </section>

        {/* FAQ */}
        <section className='my-14'>

          <h2 className='font-bold mobile:text-3xl tablet:text-6xl text-purple-800 my-12'>Frequently Asked Questions</h2>

          <Accordion>
            {
              FAQ.map((faq, index) =>
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {faq.question}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      {faq.answer}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            }
          </Accordion>
        </section>


      </main>

      <Footer />
    </div >
  )
}
