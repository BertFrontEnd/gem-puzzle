import { gameFields, gameContainer } from './elements.js';

let field = ``;
let allChip = ``;

const renderGameField = (e) => {
  switch (true) {
    case e.target.classList.contains('three'):
      gameContainer.textContent = '';

      field = `
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
      `;

      gameContainer.insertAdjacentHTML('afterbegin', field);

      allChip = document.querySelectorAll('.chip');
      for (let chip of allChip) {
        chip.style.width = `${90}px`;
        chip.style.height = `${90}px`;
        chip.style.fontSize = `${3}rem`;
      }

      break;
    case e.target.classList.contains('four'):
      gameContainer.textContent = '';

      field = `
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
        <div class="chip">10</div>
        <div class="chip">11</div>
        <div class="chip">12</div>
        <div class="chip">13</div>
        <div class="chip">14</div>
        <div class="chip">15</div>
        <div class="chip">16</div>
      `;

      gameContainer.insertAdjacentHTML('afterbegin', field);

      allChip = document.querySelectorAll('.chip');
      for (let chip of allChip) {
        chip.style.width = `${67}px`;
        chip.style.height = `${67}px`;
        chip.style.fontSize = `${2.75}rem`;
      }

      break;
    case e.target.classList.contains('five'):
      gameContainer.textContent = '';

      field = `
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
        <div class="chip">10</div>
        <div class="chip">11</div>
        <div class="chip">12</div>
        <div class="chip">13</div>
        <div class="chip">14</div>
        <div class="chip">15</div>
        <div class="chip">16</div>
        <div class="chip">17</div>
        <div class="chip">18</div>
        <div class="chip">19</div>
        <div class="chip">20</div>
        <div class="chip">21</div>
        <div class="chip">22</div>
        <div class="chip">23</div>
        <div class="chip">24</div>
        <div class="chip">25</div>
      `;

      gameContainer.insertAdjacentHTML('afterbegin', field);

      allChip = document.querySelectorAll('.chip');
      for (let chip of allChip) {
        chip.style.width = `${53.2}px`;
        chip.style.height = `${53.2}px`;
        chip.style.fontSize = `${2.5}rem`;
      }

      break;
    case e.target.classList.contains('six'):
      gameContainer.textContent = '';

      field = `
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
        <div class="chip">10</div>
        <div class="chip">11</div>
        <div class="chip">12</div>
        <div class="chip">13</div>
        <div class="chip">14</div>
        <div class="chip">15</div>
        <div class="chip">16</div>
        <div class="chip">17</div>
        <div class="chip">18</div>
        <div class="chip">19</div>
        <div class="chip">20</div>
        <div class="chip">21</div>
        <div class="chip">22</div>
        <div class="chip">23</div>
        <div class="chip">24</div>
        <div class="chip">25</div>
        <div class="chip">26</div>
        <div class="chip">27</div>
        <div class="chip">28</div>
        <div class="chip">29</div>
        <div class="chip">30</div>
        <div class="chip">31</div>
        <div class="chip">32</div>
        <div class="chip">33</div>
        <div class="chip">34</div>
        <div class="chip">35</div>
        <div class="chip">36</div>
      `;

      gameContainer.insertAdjacentHTML('afterbegin', field);

      allChip = document.querySelectorAll('.chip');
      for (let chip of allChip) {
        chip.style.width = `${44}px`;
        chip.style.height = `${44}px`;
        chip.style.fontSize = `${2}rem`;
      }

      break;
    case e.target.classList.contains('seven'):
      gameContainer.textContent = '';

      field = `
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
        <div class="chip">10</div>
        <div class="chip">11</div>
        <div class="chip">12</div>
        <div class="chip">13</div>
        <div class="chip">14</div>
        <div class="chip">15</div>
        <div class="chip">16</div>
        <div class="chip">17</div>
        <div class="chip">18</div>
        <div class="chip">19</div>
        <div class="chip">20</div>
        <div class="chip">21</div>
        <div class="chip">22</div>
        <div class="chip">23</div>
        <div class="chip">24</div>
        <div class="chip">25</div>
        <div class="chip">26</div>
        <div class="chip">27</div>
        <div class="chip">28</div>
        <div class="chip">29</div>
        <div class="chip">30</div>
        <div class="chip">31</div>
        <div class="chip">32</div>
        <div class="chip">33</div>
        <div class="chip">34</div>
        <div class="chip">35</div>
        <div class="chip">36</div>
        <div class="chip">37</div>
        <div class="chip">38</div>
        <div class="chip">39</div>
        <div class="chip">40</div>
        <div class="chip">41</div>
        <div class="chip">42</div>
        <div class="chip">43</div>
        <div class="chip">44</div>
        <div class="chip">45</div>
        <div class="chip">46</div>
        <div class="chip">47</div>
        <div class="chip">48</div>
        <div class="chip">49</div>
      `;

      gameContainer.insertAdjacentHTML('afterbegin', field);

      allChip = document.querySelectorAll('.chip');
      for (let chip of allChip) {
        chip.style.width = `${37.4}px`;
        chip.style.height = `${37.4}px`;
        chip.style.fontSize = `${1.75}rem`;
      }

      break;
    case e.target.classList.contains('eight'):
      gameContainer.textContent = '';

      field = `
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
        <div class="chip">10</div>
        <div class="chip">11</div>
        <div class="chip">12</div>
        <div class="chip">13</div>
        <div class="chip">14</div>
        <div class="chip">15</div>
        <div class="chip">16</div>
        <div class="chip">17</div>
        <div class="chip">18</div>
        <div class="chip">19</div>
        <div class="chip">20</div>
        <div class="chip">21</div>
        <div class="chip">22</div>
        <div class="chip">23</div>
        <div class="chip">24</div>
        <div class="chip">25</div>
        <div class="chip">26</div>
        <div class="chip">27</div>
        <div class="chip">28</div>
        <div class="chip">29</div>
        <div class="chip">30</div>
        <div class="chip">31</div>
        <div class="chip">32</div>
        <div class="chip">33</div>
        <div class="chip">34</div>
        <div class="chip">35</div>
        <div class="chip">36</div>
        <div class="chip">37</div>
        <div class="chip">38</div>
        <div class="chip">39</div>
        <div class="chip">40</div>
        <div class="chip">41</div>
        <div class="chip">42</div>
        <div class="chip">43</div>
        <div class="chip">44</div>
        <div class="chip">45</div>
        <div class="chip">46</div>
        <div class="chip">47</div>
        <div class="chip">48</div>
        <div class="chip">49</div>
        <div class="chip">50</div>
        <div class="chip">51</div>
        <div class="chip">52</div>
        <div class="chip">53</div>
        <div class="chip">54</div>
        <div class="chip">55</div>
        <div class="chip">56</div>
        <div class="chip">57</div>
        <div class="chip">58</div>
        <div class="chip">59</div>
        <div class="chip">60</div>
        <div class="chip">61</div>
        <div class="chip">62</div>
        <div class="chip">63</div>
        <div class="chip">64</div>
      `;

      gameContainer.insertAdjacentHTML('afterbegin', field);

      allChip = document.querySelectorAll('.chip');
      for (let chip of allChip) {
        chip.style.width = `${32.5}px`;
        chip.style.height = `${32.5}px`;
        chip.style.fontSize = `${1.5}rem`;
      }

      break;
  }

  return;
};

export { renderGameField };

/*     if (gameField.classList.contains('three')) {
      gameContainer.textContent = '';
      field = `
        <div class="chip">1</div>
        <div class="chip">2</div>
        <div class="chip">3</div>
        <div class="chip">4</div>
        <div class="chip">5</div>
        <div class="chip">6</div>
        <div class="chip">7</div>
        <div class="chip">8</div>
        <div class="chip">9</div>
      `;
      gameContainer.insertAdjacentHTML('afterbegin', field);
    } */
