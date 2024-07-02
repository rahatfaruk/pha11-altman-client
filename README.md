# AltProduct
Alternative Product Information System website. User can add a product and ask (query) others for alternative products; user can create account and suggest others to find alternative products. User can manage his suggested products, add product, remove product, update product. 

## About Project
This is my assignment 11 (category 9) of programming hero. Focused on express-jwt security. I have designed many custom components in this project. I have kept these design as simple and user friendly as possible. CRUD operation implemented.
-- Rahat Faruk

FullStack website :-
- Frontend: react, tailwind, firebase (auth). Package: swiper, axios, react-bootstrap-icons, react-toastify, sweetalert
- Backend: expressJS, jwt security, mongodb 

## Features:
  - light/dark mode 
  - search queries in all queries page (frontend func)
  - list view/grid view toggler in all queries page
  - some routes are proteced. only logged user can access (security)
  - cookies (jwt token) are used for user varification (security) 

## Links:
  - my frontend repo: [pha11-altman-client](https://github.com/rahatfaruk/pha11-altman-client) , [phero-private-repo](https://github.com/Porgramming-Hero-web-course/b9a11-client-side-rahatfaruk) 
  - my backend repo: [pha11-altman-server](https://github.com/rahatfaruk/pha11-altman-server) , [phero-server-repo](https://github.com/Porgramming-Hero-web-course/b9a11-server-side-rahatfaruk) 
  - my live link: https://pha11-altproduct.web.app 
  - requirement repo: https://github.com/ProgrammingHero1/B9-CRUD-and-JWT-battlefield  

## How can you run frontend locally:
  - clone this repo
  - create `.env.local` file inside root folder. Here, keys are: firebase config info (create a firebase project if needed) - ` VITE_apiKey, VITE_authDomain, VITE_projectId, VITE_storageBucket, VITE_messagingSenderId, VITE_appId `
  - update server link into a local link (if needed)
  - start frontend server `npm run dev`
