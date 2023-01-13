import React from 'react';
import error404 from '../images/undraw_Page_not_found.png';
const PageError = () => {
  return (
    <main className="main_404">
      <img
        className="page_not_found"
        src={error404}
        alt="undraw_page_not_found"
      />
      <h4>Opps! there were something wrong</h4>
      <p>
        {' '}
        Please check the url or back to <a href="/"> Landing</a>
      </p>
    </main>
  );
};

export default PageError;
