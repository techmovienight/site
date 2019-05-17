import React from "react";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import {
  AnchorHeader,
  AnchorProvider,
  Contacts,
  Footer,
  Header,
  Meta,
  Sponsor,
  connect,
} from "../components";

import "normalize.css/normalize.css";
import "../styles/style.scss";

const siteName = "Tech Movie Night";

const SiteBody = (
  {
    children,
    location: { pathname },
    page: {
      file: { title, description, keywords },
    },
    conference: { partners } = { partners: [] },
  },
  { router }
) => (
  <HelmetProvider
    context={
      router && router.staticContext && router.staticContext.helmetContext
    }
  >
    <AnchorProvider>
      <Meta
        siteName={siteName}
        title={title}
        description={description}
        keywords={keywords}
      />
      <main>
        <Header pathname={pathname} title={title} />
        <div className="main-container container">
          <section className="grid grid_6col">
            {children}
            <div className="grid--full">
              <div className="sponsors sponsors_partners">
                <AnchorHeader
                  className="sponsors--heading visually-hidden"
                  level={2}
                >
                  Partners
                </AnchorHeader>
                <section className="sponsors--list">
                  <Contacts items={partners} render={Sponsor} />
                </section>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </AnchorProvider>
  </HelmetProvider>
);
SiteBody.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  page: PropTypes.object,
  conference: PropTypes.shape({
    partners: PropTypes.array,
    goldSponsors: PropTypes.array,
    silverSponsors: PropTypes.array,
    bronzeSponsors: PropTypes.array,
  }),
};

export default connect(`
  query SponsorQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      partners {
        ...SponsorFragment
      }
    }
  }

  fragment SponsorFragment on Contact {
    name
    social {
      homepage
    }
    about
    image {
      url
    }
  }

`)(SiteBody);
