/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import bg1 from '../../assets/img/about/about-banner-01.jpg'
import bg2 from '../../assets/img/about/about-banner-02.jpg'
import bg3 from '../../assets/img/about/about-banner-03.jpg'
import bg4 from '../../assets/img/about/video-bg.jpg'
import about from '../../assets/img/svg/about.svg'
import like from '../../assets/img/svg/like.svg'
import hand from '../../assets/img/svg/hand.svg'

import newProd1 from '../../assets/img/new_prods/prod_1.jpg'
import abosaree from '../../assets/img/new_prods/abosaree.jpg'
import newProd2 from '../../assets/img/new_prods/prod_2.jpg'
import newProd3 from '../../assets/img/new_prods/prod_3.jpg'

import PartnerOne from '../../components/partner-one'
import FooterOne from '../../components/footer/footer-one'
import ScrollToTop from '../../components/scroll-to-top'

import OwlCarousel from 'react-owl-carousel'

import { featureOne } from '../../data/data'

import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.css'

import Aos from 'aos'
import NavbarFour from '../../components/navbar/navbar-four'

export default function About() {
    const [isOpen, setOpen] = useState(false)

    const options = {
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        dots: false,
        dotData: true,
    }
    useEffect(() => {
        Aos.init()
    })

    return (
        <>
            <NavbarFour />
           <div
                className="relative flex items-center justify-center gap-4 flex-wrap 
                           w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] 
                           bg-cover bg-center bg-no-repeat 
                           pt-16 sm:pt-20 md:pt-24 lg:pt-32 
                           before:absolute before:inset-0 before:bg-title before:bg-opacity-70"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="relative text-center w-full z-10">
                  <h2 className="text-white text-3xl sm:text-4xl md:text-[40px] font-normal leading-none">
                    About Us
                  </h2>
                  <ul className="flex items-center justify-center gap-[10px] text-sm sm:text-base md:text-lg font-normal text-white mt-3 sm:mt-4 flex-wrap">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>/</li>
                    <li className="text-primary">About</li>
                  </ul>
                </div>
              </div>

              <div className="s-pb-100 pt-12 md:pt-16">
  <div
    className="container-fluid"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
      <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary py-8 sm:py-12 lg:pr-10 2xl:pr-0">
        {/* ✅ Just one image instead of OwlCarousel */}
        <img
          className="object-cover w-full"
          src={abosaree}
          alt="about"
        />
      </div>

      <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
        <div className="lg:max-w-[600px]">
          <div>
            <img
              src={newProd1}
              alt=""
              className="size-16"
            />
          </div>
          <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
            Our Story Journey
          </h3>
          <p className="mt-3 text-base sm:text-lg">
            At Nyra Sarees, our story is woven with tradition, elegance, and a passion for timeless style. Born from a dream to celebrate the beauty of Indian heritage, we set out to create a boutique that brings together grace, culture, and craftsmanship under one roof. We believe every woman deserves to feel confident and radiant in what she wears. That’s why each saree, kurti, and ensemble in our collection is carefully selected and crafted — blending classic designs with modern flair. From everyday elegance to festive glam, every piece at Nyra Sarees tells a story of artistry, detail, and love. At Nyra, fashion isn’t just about clothing — it’s about expressing your identity with pride and poise.
          </p>
          <p className="mt-3 text-base sm:text-lg">
            Over the years, our dedication to quality, style, and customer satisfaction has shaped Nyra Sarees into a name women trust. What began as a small passion project has blossomed into a beloved boutique known for curating elegant ethnic wear that exceeds expectations. Our journey has always been guided by a love for tradition, a flair for design, and a promise to help every woman feel beautiful and confident.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="s-pb-100">
                <div className="container-fluid">
                    <div
                        className="max-w-xl mx-auto mb-8 md:mb-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div>
                            <img
                                src={like}
                                className="mx-auto size-16"
                                alt=""
                            />
                        </div>
                        <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                            Why You Choose Us
                        </h3>
                        <p className="mt-3">
                            Choose us for exceptional quality, We prioritize
                            your satisfaction by offering premium products and a
                            seamless shopping experience.{' '}
                        </p>
                    </div>
                    <div
                        className="max-w-sm sm:max-w-[1720px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:flex lg:justify-between gap-7 flex-wrap lg:flex-nowrap"
                        data-aos="fade-up"
                        data-aos-delay="103"
                    >
                        {featureOne.map((item, index) => {
                            return (
                                <div
                                    className="p-6 pb-0 rounded-[10px] relative"
                                    key={index}
                                >
                                    <div
                                        className={`w-[1px] h-[120px] absolute right-0 top-[30%] ${
                                            index === 4
                                                ? ''
                                                : 'hidden 2xl:block border-l border-dashed border-primary'
                                        }`}
                                    ></div>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="size-12"
                                    />
                                    <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">
                                        {item.title}
                                    </h5>
                                    <p className="mt-2 sm:mt-3">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="s-py-100">
                <div className="container-fluid">
                    <div
                        className="max-w-xl mx-auto mb-8 md:mb-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div>
                            <img
                                src={hand}
                                className="mx-auto size-16"
                                alt=""
                            />
                        </div>
                        <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                            Trusted Partner
                        </h3>
                        <p className="mt-3">
                            Count on our trusted partnerships to deliver
                            excellence. Collaborating with industry leaders
                            ensures top-quality products.{' '}
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <PartnerOne />
                    </div>
                </div>
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    )
}
