#UC Berkeley Thai Student Association

### Thoughts on Development

I think we should start with the main page and get a feel on what the theme of the site should be. From there we can move onto more complex pages like the events page. We should aim to complete a single page every 1-1.5 weeks. For now, I'm just experimenting with different designs and layouts, while making sure the final product is conforming to responsive design.

### Important Information


__Staging Server__: `wwww.thaisa.herokuapp.com`

Even though the ThaiSA site will be a static website, it currently lives in a Ruby file structure to facilitate deploying on to our staging server, and also let it run a server locally. To do so, set up Ruby and run `rackup` in the top-level directory. This allows you to test the site on other devices on the local network (ie. iPhone) to ensure the responsive design is correct via `<ip_address>:9292`. 

You can also test the site directly via opening `index.html` in `\public`. I really recommend installing Ruby as it will allow you to be more rigorous in your responsive design.

### Development Information 


All style files are located in `\css`. We are using [LESS](http://lesscss.org/), to write our styles rather than directly using CSS. LESS directly compiles to CSS but allows for variables and functions. It makes the styles more maintainable in the long run, and is also easier to code in. 

Install LESS via `npm install -g less`. I've included a script in `\css` which compiles LESS without `lessc styles.less styles.css`. Simply run `python lessc.py styles`, and it compiles a `styles.less` file to an equivalently named `styles.css` file. 

To aid our responsive design, we are using [Twitter Bootstrap](http://twitter.github.io/bootstrap/). Bootstrap has a really bad reputation of messing up styles, so I've downloaded the bare minimum CSS necessary, namely everything in the scaffolding and responsive under Customize.

__Please do not embed styles or scripts (apart from analytics) directly in-line or write in the CSS files as they will be overwritten during LESS compliation.__


### Design Information 

Golf wants the following (but not limited to) content for the ThaiSA website: Welcome Page, History, Upcoming Events, Past Events, Officers, Past Officers, Thai Mentor Program (?), Contact Page, Donation (?), Photos. It's up to us to decide which content should be on the same page. For instance, I think Past Events and Upcoming Events should be on the same page. He also wants us to keep "Thai"-themes in mind while designing the site (ie. "beaches, temples, and red"). 

### Timeline

__End of June__: Minimal Viable Product (all pages completed to some degree)

__Middle of July__: 2nd Iteration of the Site (pages should be close to final version)

__End of July__: 3rd Iteration of the Site (pages should be essentially)

__Early August__: Launch!
