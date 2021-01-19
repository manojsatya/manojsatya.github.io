import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import imgSrc from '../images/portfolioImage.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faXing,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';

const Icons = {
  linkedIn: faLinkedin,
  github: faGithub,
  xing: faXing,
  codepen: faCodepen,
};

const IconLink = ({ icon, href, label }) => (
  <a
    href={href}
    target="__blank"
    style={{ textDecoration: 'none', color: 'inherit' }}
    aria-label={label}
    title={label}
  >
    <FontAwesomeIcon icon={icon} size="3x" />
  </a>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex justify-center items-center m-auto h-screen">
      <div className="grid text-center">
        <img
          src={imgSrc}
          alt="portfolio"
          className="max-w-xs rounded-full mx-auto"
        />
        <h3 className="m-2 text-xl">
          Hi, I am Manoj Satyanarayana from India. I am a software developer in
          Hamburg, Germany
        </h3>
        <div className="flex justify-evenly m-5">
          <IconLink
            icon={Icons.linkedIn}
            href="https://www.linkedin.com/in/manojsatya"
            label="linkedIn"
          />
          <IconLink
            icon={Icons.github}
            href="https://github.com/manojsatya"
            label="github"
          />
          <IconLink
            icon={Icons.xing}
            href="https://www.xing.com/profile/Manoj_Satyanarayana/cv"
            label="xing"
          />
          <IconLink
            icon={Icons.codepen}
            href="https://codepen.io/manu_js"
            label="codepen"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
