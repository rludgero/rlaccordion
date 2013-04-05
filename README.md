RLAccordion
=========

A jQuery accordion plugin responsive, flexible & adaptative with plus & minus signs unicode characters.

<h2>About</h2>
<p>A jQuery accordion plugin responsive, flexible & adaptative with plus & minus signs unicode characters, tested even IE7.</p>

<h2>Usage</h2>

<h3>HTML</h3>

  <!-- you can use with a lists or divs, like this example below -->

      <div id="first" class="accordion-container">
        <div>
          <h3>
            <span>Accordion One
              <a href="#" class="plus">&#x2b;</a>
              <a href="#" class="minus">&#x2212;</a>
            </span>
          </h3>
          <div class="info">

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo velit temporibus aliquam eius dolorem dolor laudantium quidem porro obcaecati nesciunt ducimus doloribus molestiae ad praesentium reiciendis enim eligendi fugit!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quis delectus ducimus quibusdam ex totam natus sint nemo nam possimus explicabo labore architecto magnam accusantium veritatis tenetur repudiandae ab laboriosam?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis molestiae molestias atque asperiores illum nisi saepe placeat deleniti commodi dolore cupiditate quas. Ipsum odio quibusdam nemo est ducimus ea nesciunt?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eligendi ex aperiam facilis alias! Quaerat asperiores quia molestias laboriosam commodi aspernatur dolorum nostrum impedit perspiciatis cupiditate quas distinctio earum dignissimos.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi laboriosam voluptates eum vero iste enim quas a nulla consequuntur quasi. Dolorum minima corporis molestias blanditiis ducimus obcaecati necessitatibus excepturi magnam?</p>

          </div>
        </div>
        <div>
          <h3>
            <span>Accordion Two
              <a href="#" class="plus">&#x2b;</a>
              <a href="#" class="minus">&#x2212;</a>
            </span>
          </h3>
          <div class="info">

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum soluta rerum quis consectetur ab. Aliquam odio veniam accusantium qui obcaecati omnis assumenda quo facere similique fugiat aspernatur nihil vero suscipit.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolores repellendus placeat facere magni dolorum vel ab sequi laudantium quo obcaecati officiis nam minima laboriosam impedit saepe dolore expedita quibusdam?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum dolore ex dicta sint eligendi minima quasi repellendus unde vero nam neque provident dignissimos voluptatibus molestias. Voluptas esse perspiciatis reprehenderit.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatem quos saepe corporis esse adipisci earum vel voluptatum nam cumque et autem labore neque at numquam ullam provident doloremque exercitationem?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nisi totam quod modi dolore voluptatem accusamus odio laudantium veritatis aliquam beatae eos autem. Ab aliquam quos cupiditate debitis sed maxime.</p>

          </div>
        </div>
      </div>

  <!-- or with lists -->

      <ul id="second" class="accordion-container">
        <li>
          <h3>
            <span>Accordion One
              <a href="#" class="plusTwo">&#x2b;</a>
              <a href="#" class="minusTwo">&#x2212;</a>
            </span>
          </h3>
          <div class="info">

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo velit temporibus aliquam eius dolorem dolor laudantium quidem porro obcaecati nesciunt ducimus doloribus molestiae ad praesentium reiciendis enim eligendi fugit!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quis delectus ducimus quibusdam ex totam natus sint nemo nam possimus explicabo labore architecto magnam accusantium veritatis tenetur repudiandae ab laboriosam?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis molestiae molestias atque asperiores illum nisi saepe placeat deleniti commodi dolore cupiditate quas. Ipsum odio quibusdam nemo est ducimus ea nesciunt?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eligendi ex aperiam facilis alias! Quaerat asperiores quia molestias laboriosam commodi aspernatur dolorum nostrum impedit perspiciatis cupiditate quas distinctio earum dignissimos.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi laboriosam voluptates eum vero iste enim quas a nulla consequuntur quasi. Dolorum minima corporis molestias blanditiis ducimus obcaecati necessitatibus excepturi magnam?</p>

          </div>
        </li>
        <li>
          <h3>
            <span>Accordion Two
              <a href="#" class="plusTwo">&#x2b;</a>
              <a href="#" class="minusTwo">&#x2212;</a>
            </span>
          </h3>
          <div class="info">

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum soluta rerum quis consectetur ab. Aliquam odio veniam accusantium qui obcaecati omnis assumenda quo facere similique fugiat aspernatur nihil vero suscipit.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolores repellendus placeat facere magni dolorum vel ab sequi laudantium quo obcaecati officiis nam minima laboriosam impedit saepe dolore expedita quibusdam?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum dolore ex dicta sint eligendi minima quasi repellendus unde vero nam neque provident dignissimos voluptatibus molestias. Voluptas esse perspiciatis reprehenderit.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptatem quos saepe corporis esse adipisci earum vel voluptatum nam cumque et autem labore neque at numquam ullam provident doloremque exercitationem?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nisi totam quod modi dolore voluptatem accusamus odio laudantium veritatis aliquam beatae eos autem. Ab aliquam quos cupiditate debitis sed maxime.</p>

          </div>
        </li>
      </ul>

<h3>JS</h3>


<p>How to implement:</p>

    <script>

      $(function() {

        jQuery("#first").rlAccordion();

        // if you want have 2 or more accordions in the same page, you will have change the options minus and plus per other classes
          jQuery("#second").rlAccordion({
            minus: ".minusTwo",
            plus: ".plusTwo"
          });

        // or with options
          jQuery("#second").rlAccordion('single',{

             minus: ".minus", // minus sign class
              plus: ".plus", // plus sign class
            titles: "h3", // html tag parent for minus and plus, this may replaced also for a class
             infos: ".info" // titles sibling container

          });

      });

    </script>

    // All options are variables that can be adapted by replacing the classes & || html element of your code.


<h2>Demo:</h2>

<p>http://rodrigoludgero.com/rlaccordion/rlaccordion.html</p>


<h2>License</h2>
<p>Copyright (c) 2013 Rodrigo Ludgero Licensed under the MIT license</p>

<pre>
<code>

The MIT License

Copyright (c) 2013 Rodrigo Ludgero, http://rodrigoludgero.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

</code>
</pre>
