This is a tutorial for [Next.js](https://nextjs.org/).

## Getting Started

Create a next.js project
`npx create-next-app@latest`

Start the server with
`npm run dev`

#app
The app folder is (in a well structured application) reserved for routes only.

#Favicon
Add a file named icon.png to your app folder. It is automatically interpreted as favicon.

#Different to react
- Images: for images, when importing a file, an object is created. Therefore you need to call .src on the object for an <img> tag. Better use <Image>.
  <Image> automatically generates a srcset: Ensures differently sized images are loaded depending on the device and viewport.
  Use "fill" property on it if you do not know the size of it (because it is loaded later for example)

#Best practices
Add a "components" folder on root level and only keep the routes in the "app" folder

###To add
	
- "use client" vs. "use server"

- use AWS (lecture 130)