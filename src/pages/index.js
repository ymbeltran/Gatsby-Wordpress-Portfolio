import React from 'react';

import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Helmet } from 'react-helmet';
import { useHeadDataQuery } from '../hooks/useHeadDataQuery';

const Portfolio = () => {
  const { generalSettings } = useHeadDataQuery();
  const { title, language:lang, description } = generalSettings;
  
  return (
    <>
      <Helmet title = {title}
          htmlAttributes={{ lang: "en" }}
          meta={[
        {
          name: `description`,
          content: description,
        } 
      ]}
   />
      <App />
    </>
  );
};
export default Portfolio;