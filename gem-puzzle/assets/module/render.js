// import { gameBody } from './elements.js';

const headerContent = `
    <header class="header">
      <h1>Gem Puzzle</h1>
      <section class="info">
        <input class="time" type="text" value="00:00" disabled />
        <output class="step">0</output>
        <div class="controls">
          <button class="control save"></button>
          <button class="control restore"></button>
          <button class="control shuffle"></button>
          <button class="control play"></button>
        </div>
      </section>
    </header>
`;

const mainContent = `
    <main class="main">
      <section class="container">
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
      </section>
    </main>
`;

const footerContent = `
    <footer class="footer">
      <section class="fields">
        <button class="field three">3&times;3</button>
        <button class="field four">4&times;4</button>
        <button class="field five">5&times;5</button>
        <button class="field six">6&times;6</button>
        <button class="field seven">7&times;7</button>
        <button class="field eight">8&times;8</button>
      </section>
    </footer>
`;

const renderGameBody = () => {
  document
    .querySelector('body')
    .insertAdjacentHTML('afterbegin', footerContent);
  document.querySelector('body').insertAdjacentHTML('afterbegin', mainContent);
  document
    .querySelector('body')
    .insertAdjacentHTML('afterbegin', headerContent);

  console.log('Render is done!');

  /* document.write(`${headerContent}${mainContent}${footerContent}`); */
};

export { renderGameBody };
