import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import Wave from "@layouts/components/Wave";
import { is, tr } from "date-fns/locale";
import Marquee from "components/magicui/marquee";
import { cn } from "lib/utils/utils";

const ReviewCard = ({ name, position, body, icon }) => {
  return (
    <figure className="relative mx-4 flex max-w-md flex-col rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center">
        <div>
          <figcaption className="text-lg font-semibold text-gray-800">
            {name}
          </figcaption>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
      <blockquote className="mt-4 italic text-gray-800">{body}</blockquote>
    </figure>
  );
};

const Home = ({ frontmatter }) => {
  const { banner, feature, services, testimonial, call_to_action } =
    frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>

      <section className="section pb-[50px] bg-theme-light" >
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Link
                className="btn btn-primary z-0 py-[14px] my-5"
                href={"/yuvamanthan"}
                rel=""
              >
                Find Your Career Path Today!
              </Link>
              <Image
                className="mx-auto mt-12"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave />

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        const isEven = (index + 1) % 2 === 0;
        return (
          <>
            {isEven && <Wave rotate={false} />}
            <section
              key={`service-${index}`}
              className={`section ${isOdd && "bg-theme-light"}`}
            >
              <div className="container">
                <div className="items-center gap-8 md:grid md:grid-cols-2">
                  {/* Carousel */}
                  <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      pagination={
                        service.images.length > 1 ? { clickable: true } : false
                      }
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      init={service?.images > 1 ? false : true}
                    >
                      {/* Slides */}
                      {service?.images.map((slide, index) => (
                        <SwiperSlide key={index}>
                          <Image src={slide} alt="" width={400} height={300} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Content */}
                  <div
                    className={`service-content mt-5 md:mt-0 ${
                      !isOdd && "md:order-1"
                    }`}
                  >
                    <h2 className="font-bold md:text-5xl leading-[40px]">
                      {service?.title}
                    </h2>
                    <p className="mt-4 mb-2">{service?.content}</p>
                    {service.button.enable && (
                      <Link
                        href={service?.button.link}
                        className="cta-link inline-flex items-center text-primary"
                      >
                        {service?.button.label}
                        <Image
                          className="ml-1"
                          src="/images/arrow-right.svg"
                          width={18}
                          height={14}
                          alt="arrow"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
            {isOdd && <Wave rotate={true} />}
          </>
        );
      })}

      {/* workflow */}
      <section className="section">
 {/* Testimonial */}
 <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {markdownify(testimonial.title)}
          </h2>
        </div>
        <div>
          <Marquee pauseOnHover className="[--duration:30s]">
            {testimonial.people.map((item, i) => (
              <ReviewCard
                key={`testimonial-${i}`}
                name={item.name}
                position={item.position}
                body={item.content}
              />
            ))}
          </Marquee>
        </div>
      </div>
      </section>
      {/* Cta */}
      {/* <Cta cta={call_to_action} /> */}
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
