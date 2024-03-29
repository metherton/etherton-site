import { html } from 'lit-html';

export const templateAbout = html`
  <div>
    <h1>About this output</h1>

      <section><img style="display:block;margin: auto;" src="martin.png" alt="martin etherton" height="681" width="500"></section>

    <ul>

      <li>3x web components (app, main page, page one)</li>
      <li>1x external template (about page)</li>
      <li>
        Simple page switcher (for production see
        <a href="https://open-wc.org/developing/routing.html">routing recommendations</a>)
      </li>
      <li>Follows all open-wc recommendations</li>
    </ul>
  </div>
`;
