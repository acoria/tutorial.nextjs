This is a tutorial for [Next.js](https://nextjs.org/).

## Getting Started

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
- caching: 
	- test your app in production! -> there is some more aggressive caching going on and you might miss "revalidatePath"
	- revalidatePath( ) takes the paths to revalidate
		e.g. "/meals" -> default is revalidatePath("/meals", "page") and will only revalidate the single page
		revalidatePath("/meals", "layout") can be set to reload all siblings as well
		revalidatePath("/*", "layout")? can be used to reload the entire application

- server action functions:
	- async? functions that can be either used in server components or files annotated with "use server"
	- actions that can be as the action property on a form
		- directly
		- or with the use of useFormState
			(a hook provided by react-dom to handle responses returned by the server action function and potentially update the ui depending on this state 
			 e.g. showing an validation error message for a form)
	
- form handling
	- useFormState (see above)
	- useFormStatus: a hook to e.g. get the state of a form submission/pending
	

- metaData:
	- static metadata by adding "metaData" constant
	- dynamic metadata by adding function generateMetaData, which receives all parameters that a page receives too
		-> ensure to check for not-found-errors as well here since the metadata is loaded before the content
			which will cause an error page to be displayed first

- "use client" vs. "use server"

- use AWS