import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components/macro';
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
    <MainPage>
      <AboutSectionWrapper>
        <ImageWrapper>
          <img src={imgSrc} />
        </ImageWrapper>
        <h3>
          Hi, I am Manoj Satyanarayana from India. I am a software developer in
          Hamburg, Germany
        </h3>
        <IconsWrapper>
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
        </IconsWrapper>
      </AboutSectionWrapper>
    </MainPage>
  </Layout>
);

export default IndexPage;

const ImageWrapper = styled.div`
  img {
    max-width: 200px;
    border-radius: 50%;
  }
`;

const MainPage = styled.div`
  height: 80vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutSectionWrapper = styled.div`
  display: grid;
  text-align: center;
`;

const IconsWrapper = styled.div`
  min-width: 40vw;
  display: flex;
  justify-content: space-evenly;
`;
