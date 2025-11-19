"use client";

import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const VerticalZigZagSections = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="section-space vertical-zigzag p-relative pt-0" >
      <div className="small-container">
        <div className="vertical-zigzag__wrapper">
          
          {items.map((item, idx) => {
            const imageColClasses = `col-lg-6 ${
              idx % 2 === 0 ? "order-lg-2 order-1" : "order-lg-1 order-1"
            }`;
            const contentColClasses = `col-lg-6 ${
              idx % 2 === 0 ? "order-lg-1 order-2" : "order-lg-2 order-2"
            }`;

            return (
              <div
                key={item.label}
                className="vertical-zigzag__item p-relative mb-70"
                data-anim="fade-up"
                data-anim-delay={`${0.1 * idx}s`}
              >
                <div className="row align-items-center g-5">
                  <div className={imageColClasses}>
                    <div className="vertical-zigzag__image shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={760}
                        height={480}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className={contentColClasses}>
                    <div className="vertical-zigzag__content">
                      <span className="section-sub-title text-uppercase">
                        {item.label}
                      </span>
                      <h3 className="section-title mt-10">{item.label}</h3>
                      <p className="mb-25">{item.shortDescription}</p>
                      <ul className="vertical-zigzag__list">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>
                            <span className="indicator"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <Link className="primary-btn-1 btn-hover mt-30" href={item.ctaLink}>
                        {item.ctaLabel} &nbsp; | <i className="icon-right-arrow"></i>
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <span className="vertical-zigzag__marker d-none d-lg-flex"></span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .vertical-zigzag__wrapper {
          position: relative;
        }
        .vertical-zigzag__line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: #dd361c;
          transform: translateX(-50%);
        }
        .vertical-zigzag__item:last-child {
          margin-bottom: 0;
        }
        .vertical-zigzag__item {
          position: relative;
        }
        .vertical-zigzag__marker {
          position: absolute;
          top: calc(50% - 8px);
          left: 50%;
          transform: translate(-50%, -50%);
          width: 18px;
          height: 18px;
          border: 5px solid #fff;
          background: #dd361c;
          box-shadow: 0 6px 15px rgba(221, 54, 28, 0.3);
        }
        .vertical-zigzag__image {

          overflow: hidden;
          background: #fff;
        }
        .vertical-zigzag__content {
          padding: 30px;
          border: 1px solid #e5e9f2;

          background: #fff;
          box-shadow: 0 20px 60px rgba(10, 33, 65, 0.08);
        }
        .vertical-zigzag__content p {
          color: #4a5666;
          line-height: 1.7;
        }
        .vertical-zigzag__list {
          list-style: none;
          padding: 0;
          margin: 0 0 25px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .vertical-zigzag__list li {
          display: flex;
          gap: 12px;
          color: #4a5666;
          line-height: 1.6;
        }
        .vertical-zigzag__list .indicator {
          width: 10px;
          height: 10px;
          margin-top: 8px;
          background: #dd361c;
          flex-shrink: 0;
        }
        @media (max-width: 991px) {
          .vertical-zigzag__item {
            margin-bottom: 40px;
          }
          .vertical-zigzag__content {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

VerticalZigZagSections.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
      ctaLabel: PropTypes.string.isRequired,
      ctaLink: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default VerticalZigZagSections;


