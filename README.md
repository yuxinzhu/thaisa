#UC Berkeley Thai Student Association

### Important Information


__Staging Server__: `www.thaisa.herokuapp.com` [LINK](http://www.thaisa.herokuapp.com)

__Note On Staging Server__: I will periodically push our latest code to the staging server to show Golf what we've been up to.



Even though the ThaiSA site will be a static website, it currently lives in a Ruby file structure to facilitate deploying on to our staging server (Heroku does not allow random static files), and also let it run a server locally. To do so, set up Ruby and run `rackup` in the top-level directory. This allows you to test the site on other devices on the local network (ie. iPhone) to ensure the responsive design is correct via `<ip_address>:9292`. 

You can also test the site directly via opening `index.html` in `\public`. I really recommend installing Ruby as it will allow you to be more rigorous in your responsive design.

__Note to Emily__: Let me know if you would like staging permissions on Heroku. You just need to make an account and I can add you onto the Heroku project. 

### Development Information 


All style files are located in `\css`. We are using [LESS](http://lesscss.org/), to write our styles rather than directly using CSS. LESS directly compiles to CSS but allows for variables and functions. It makes the styles more maintainable in the long run, and is also easier to code in. 

Install LESS via `npm install -g less`. I've included a script in `\css` which compiles LESS without `lessc styles.less styles.css`. Simply run `python lessc.py styles`, and it compiles a `styles.less` file to an equivalently named `styles.css` file. 

__Please do not embed styles or scripts (apart from analytics) directly in-line or write in the CSS files as they will be overwritten during LESS compliation.__


### Design Information 

Golf wants the following (but not limited to) content for the ThaiSA website: Welcome Page, History, Upcoming Events, Past Events, Officers, Past Officers, Thai Mentor Program (?), Contact Page, Donation (?), Photos. It's up to us to decide which content should be on the same page. For instance, I think Past Events and Upcoming Events should be on the same page. He also wants us to keep "Thai"-themes in mind while designing the site (ie. "beaches, temples, and red"). 

### Timeline

__End of June__: Minimal Viable Product (all pages completed to some degree)

__Middle of July__: 2nd Iteration of the Site (pages should be close to final version)

__End of July__: 3rd Iteration of the Site (pages should be essentially)

__Early August__: Launch!
