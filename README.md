# Axios Front End Excerise

Below is a React/CSS/JS excerise that involves building out a single page app to navigate through a series of Axios' stories.
- Use HTML5 semantic markup elements.
- Use create-react-app, Next.js or another perferred React framework to stand up the project.
- Write your own CSS using a preprocessor (preferably [Sass](https://sass-lang.com), [styled-components](https://styled-components.com), or [Tailwind](https://tailwindcss.com)).
- Use React 17 hooks vs classes.
- Use a data fetching library (ex. [Fetch](https://github.com/matthew-andrews/isomorphic-fetch), [Axios](https://github.com/axios/axios) or [SWR](https://github.com/vercel/swr)).
- Don't spend than more than 4 hours. If you don't finish every asepect of it, create a `TODO` doc and explain how you would complete the tasks.
- Add one or more unit tests using Jest or React Testing Library.
- Bonus: Use TypeScript and define the types for the project.

## Figma Design
https://www.figma.com/file/UpnImtkeDJSr21eFjxAoLN/Exercise---Horizontal-Scroll?node-id=0%3A1

## Public Endpoints
- https://api.axios.com/api/render/stream/content (Stream endpoint)
- https://api.axios.com/api/render/content/c13dbda5-893d-46ba-ae6a-87ff8e34c74e (Content endpoint)

## Excerise
1. Fork this repo to begin the excerise and provide a readme to instruct how to run it locally.
2. In index.html, rebuild the mocks in the Figma design in semantic HTML, CSS and JS.
3. First make a call to the `stream endpoint` to retrieve an array of the 10 lastest story ids for Axios.com.
4. For each story id, make another call to the `content endpoint` to retrieve the data for each story.
5. Based on the mocks provided, build a carousel that displays up to 10 stories that includes the following:
- The `headline` of the story.
- The 16x9 cropped `cover image`.
- The `display name` for the author.
- The `published date` of the story.
- Link out the cover image and `Go Deeper` using the `permalink` returned by the API.
6. The designs represent layouts in a smaller screen and a larger screen. It is not 2 pages. 
7. Feel free to diverge from the designs and apply your own creativity. The goal is to build a simple UI that allows users to navigate between various stories while displaying the corresponding meta data for each.

## Specs
- There are 10 stories that are returned from the stream endpoint.
- Load the data using a chosen data fetching library.
- For each of the 10 stories, use the content endpoint to retreive the stories data.
- When landing on the page initally, the first story should be visible.
- When clicking through the carousel, the headline, cover image, display name, and published date, and url should update.
- The `Visit axios.com` button should link out to [https://www.axios.com](https://www.axios.com).
- The minimum width of the screen is 375px. The horizontal breakpoint is at 980px. Build with a mobile first approach.
