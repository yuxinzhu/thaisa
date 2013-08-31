#UC Berkeley Thai Student Association

All style files are located in `\css`. We are using [LESS](http://lesscss.org/), to write our styles rather than directly using CSS. LESS directly compiles to CSS but allows for variables and "functions". It makes the styles more maintainable in the long run, and is also easier to code in.

Install LESS via `npm install -g less`. I've included a script in `\css` which compiles LESS without `lessc styles.less styles.css`. Simply run `python lessc.py styles`, and it compiles a `styles.less` file to an equivalently named `styles.css` file. Recall that you must run the compilation everytime you edit any part of the LESS file.

__Please do not embed styles or scripts (apart from analytics) directly in-line or write in the CSS files as they will be overwritten during LESS compliation.__


To deploy to production, push your changes onto the `gh-pages` branch.

