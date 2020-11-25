-- Please check the master branch -- <br />
## What is it about?
<br />
This project is a representation of a New's Page based on the top stories on The New York Times API. <br />
You can use the search bar to look for keywords on the titles, try to search for (sub) sections and navigate between pages.<br />
Hopw you enjoy it! <br />

**Overview**
<br />
The project was created in Vue JS and the Vue JS Material framework was used to build the components.
Vue Js Material can be found at: https://vuematerial.io/ <br />

The API used can be found at https://api.nytimes.com/svc/topstories/v2/home.json

**How to run the project**
1. Make a copy of the project using the command. You should have git (https://git-scm.com/) already installed 
```
git clone https://github.com/NessVsm/vueJs-news.git
```

2. Install all the dependencies. You should have npm (https://www.npmjs.com/) already installed in your computer
```
npm i
```
3. Run the project 
```
npm run serve
``` 
You can check the project using the default url http://localhost:8080/. If you want to use another port, you should specify it by adding --port _number_ when you are running the project. <br />
```
npm run serve --port 4500
``` 

**What comes next?** <br />

This project is just an initial version, which means there are many improvements that can be made. Some of the following would be a good starting line:
- Implement more filters
- Include 'on loading' on the page
- Try the other APIs available at the New York Times Website
- Create test
