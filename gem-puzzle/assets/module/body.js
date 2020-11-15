const headerContent = `
    <header class="header">
      <h1>Gem Puzzle</h1>
      <section class="info">
        <input class="time" type="text" value="00:00" disabled />
        <output class="step">0</output>
        <div class="controls">
          <button class="control save" alt="save"></button>
          <button class="control restore"></button>
          <button class="control shuffle" disabled></button>
          <button class="control play" disabled></button>
        </div>
      </section>
    </header>
`;

const mainContent = `
    <main class="main">
      <section class="container"></section>
      <section class="pop-up"><div>Choose field to play, please!</div><div>Postpone the check at a later date or let me know what you will check now, please...</div></section>
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
  document.querySelector('body').insertAdjacentHTML('afterbegin', footerContent);
  document.querySelector('body').insertAdjacentHTML('afterbegin', mainContent);
  document.querySelector('body').insertAdjacentHTML('afterbegin', headerContent);

  console.log('Render is done!');

  /* document.write(`${headerContent}${mainContent}${footerContent}`); */
};

renderGameBody();
