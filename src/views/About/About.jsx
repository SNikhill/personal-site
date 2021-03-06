import React from "react";
import { StructuredText } from "react-datocms";
import Page from "../../components/Layout/Page/Page";

import "./About.scss";

const AboutPage = ({ content }) => (
  <Page
    heroTitle={content.node.articleTitle}
    heroPhrase={content.node.articleSubtitle}
    mainClassName="about parallax"
    heroClassName="parallax__background"
  >
    <div className="about__description parallax__foreground">
      <StructuredText data={content.node.articleBody} />
    </div>
  </Page>
);
export default AboutPage;
