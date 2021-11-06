<!-- omit in toc -->
# Project: Around The U.S.
- [About the Project](#about-the-project)
- [Technologies and Standards Used](#technologies-and-standards-used)
- [Product Specification Document](#product-specification-document)
- [Future Improvements](#future-improvements)
- [Live Demo](#live-demo)

## About the Project

![around-the-us](https://raw.githubusercontent.com/5hraddha/misc/master/images/around-the-us.png)

**Around the U.S.** is a responsive website where a user can have a collection of the pictures of his journey around the US. The webpage interacts with the API endpoints using REST API calls. As of now, the functionalities available on the webpage are:
1. When the page loads, all the existing image cards from the server loads.
2. When the page loads, the current user's name and about info are loaded from the server.
3. User can view the number of likes on an image card.
4. User can also have a closer look of the images by clicking on them.
5.  Users can close the popup by clicking on the overlay, i.e. anywhere outside the popup's borders.

## Technologies and Standards Used
**The technologies that have been used are:**
1. HTML (Hyper Text Markup Language)
2. CSS (Cascading Style Sheets)
3. React.js

**There are various tools that have been used throughout the project design and development:**
| Tools                                             | Usage                                             |
|---------------------------------------------------|---------------------------------------------------|
| Figma                                             | For referring to the product design specification |
| [TinyPng](https://tinypng.com/)                   | For JPEG/PNG Image Compression                    |
| [SVGOMG](https://jakearchibald.github.io/svgomg/) | For refining and compressing SVGs                 |
| [Webpack](https://webpack.js.org/)                | For bundling all the ES modules                   |
| [Babel](https://babeljs.io/)                      | For transpiling JS code                           |

**The main concepts that have been emphasized are:**
1. **Responsive Web Design**
    - The webpage has been developed following the *desktop first approach*.
    - The webpage has been designed and developed for:  
        - Maximum Width: `1280px`
        - Minimum Width: `320px`

2. [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
3. [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
4. **BEM Specification**  
  The website is using [BEM — Block Element Modifier](https://en.bem.info/methodology/quick-start/) methodology to create reusable and understandable components in CSS. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast and it allows reuse of existing code without copying and pasting. We are also using [Nested BEM File structure organization](https://en.bem.info/methodology/filestructure/#nested) for CSS.  

5. **Git Conventional Commits Specification**  
  We are using [Git Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). It provides an easy set of rules for creating an explicit commit history making it easier for people to contribute to our projects by communicating the nature of changes clearly.

6. **API (Application Programming Interface)**  
   An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response).

## Product Specification Document
You can view the product specification document [here](https://www.figma.com/file/xQVeb8gprjukPVKXiLXS5T/Sprint-9:-Applied-JavaScript?node-id=1%3A266)

## Future Improvements
1. The data on the webpage should persist between page reloads - Done
2. The user should have ability to add pictures.

## Live Demo
[Enjoy the live project](https://5hraddha.github.io/around-react/)