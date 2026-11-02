# quizQubes
Currently running live at https://quizqubes.netlify.app

Database code [work in progess](https://github.com/onitwin/quizqubesExpress)

## Purpose
Simple tile matching quiz app. Each tile hides a question or an answer - Choose two tiles to flip and see if they are a question/answer pairing. If they match, the tiles 'lock' and you can choose another two. If they do not match, they flip back face down. Tiles are randomly placed, and refreshing the page re-shuffles so you can try and beat your score.

## Approach
I wanted to build this as a bit of fun, while also envisioning a single application that I could feature as many programming elements as possible where it made sense. Currently it is composed of JavaScript, React and CSS. The intent is to add a database and API support to obtain and update each quiz. Longer term I would like to build an interface for interacting with the API/database, with validation and tests also.

## How to Run
Clone app from respository
Run the following commands

```
git clone git@github.com:onitwin/quizQubes.git
npm install
npm run dev
```
## Images
Landing Page | Initial Screen | Game in Progress
:---: | :---: | :---:
<img src="https://github.com/onitwin/imagehost/blob/main/quizLand.png" alt="quiz landing page" width="200" height="200" border="10" /></img>| <img src="https://github.com/onitwin/imagehost/blob/main/freshQuiz.jpg" alt="unstarted quiz" width="200" height="200" border="10" /></img> | <img src="https://github.com/onitwin/imagehost/blob/main/quizLand.png" alt="IMAGE ALT TEXT HERE" width="200" height="200" border="10" /></img>

