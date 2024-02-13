# React Training Learnings

React is a library that works on top of the existing JS, providing more features via pre-defined functions and functionalities

React.createElement helps us to create a HTML Element inside the DOM.

React.createElement syntax is as follows:

#code #react
```
React.createElement("h1", { id: 'heading' }, 'Hello World From React'); 
		React createElement creates an object, which is to be rendered by the ReactDom 'render' function

``` 

React by default is not production-ready
We have to [[Ignite our React App]] 

CDN links are usually not a good method to import react in our project.
Always use npm to add React as a node module. This also ensures that we can keep it as a version controllable react package, and also a dependency in our project

We will add React as a normal dependency to our project with the following command

```
npm install react          \\ installs React
npm install react-dom      \\ installs ReactDom
```


### JSX
Writing React in the default format is extremely tedious and lengthy.
To simplify this, we will use **JSX (JavaScript eXpressions)**
JSX is not HTML, it is rather, a HTML-Like, or XML-Like syntax.

JS Engine within browsers cannot parse JSX by default.
JS Engine understands only ES (ECMAScript).

**Parcel transpiles our JSX before it reaches the JS Engine**
Transpiling refers to the process of modifying our JSX/React code into browser-understandable code.

Parcel does not perform Transpiling on its own! It uses **Babel** to perform transpilation!!

The process is as follows
```
JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
```

React can be written using 2 methods:
1. Class Based Components - OLD Method
2. [[Functional Components]] - NEW Method

### React Keys (Very Important)

We should always provide a `key` for multiple children under a html element, which will help React with optimizing its render cycles, and helps with minimizing render time and overhead.

React cannot uniquely identify the newly to-be-rendered item in the page, and the rest of the items in the page, if it does not have a unique `key`.

**Very Important: Do NOT use `index` as a key, as it results in it being an antipattern, rather than being helpful. Please use a data specific id as the identifier, without depending on the map `index` or iteration `index`.
Using `index` as a key should always be the last resort.**

The technology that React uses to achieve this is called **Reconciliation**
**Read More on Reconciliation**: https://legacy.reactjs.org/docs/reconciliation.html

**Other Important Subjects**
	React Fiber: https://github.com/acdlite/react-fiber-architecture
	React without ES6: https://legacy.reactjs.org/docs/react-without-es6.html

### `< React.Fragment ><React.Fragment />` ( now `<Fragment ><Fragment />`) or `<></>`

React.Fragment (Fragment) is a tag which can be used to group a list of children without using tags.


### React File Structure

We can keep our components in a `components` folder, and our APIs in an `api` folder. This is a generic market practice, and React does not force you to follow any specific practice.

It is also a good practice to name the components with the exact name as that of the function inside the file. This facilitates easy readability.

### Exporting

There are mainly 2 ways of exporting from a file:
1. Default Export: Default way of exporting a component/object/data from a file. Can only be used once per file, as multiple default exports are not allowed.
		`syntax: export default Component;`
			    `import Component from ./Component`
2. Named Export: Used when we have to export multiple object/data/components from a file.
		`syntax: export const Component;`
			    `import { Component } from './Component'`


**Note**:  It is always good to keep components less than 100 lines long, as it maintains the readability of the code,

### React Hooks

They are normal JS Utility functions that are available within React itself.
The most commonly used 2 React Hooks are the following:
	1. `useState()` - Used to create super-powerful State Variables in React
	2. `useEffect()` - 

#### useState ()

React does not keep track of changes made to normal variables, since there are no trackers for React to know from. In order to facilitate dynamic re-rendering of the DOM with changes to the variables, we need to create State variables. 

We will always import useState as how we import named exports, within curly braces.
i.e.: `import { useState } from 'react';`

useState syntax follows the below logic:
	- Create your variable as an array destructure, with the first value within the array, the variable name.
	- The second value in the array will be the name of the setter function for the variable. This function will be what we use to modify the value of the variable. The usual naming convention for this variable is to add the prefix `set` to the variable name. e.g.: `const [variableName, setVariableName] = useState(defaultValue);`
		- This is just an array de-structuring, where useState returns an array with 2 items, and the variable is the first element, with the setter function being the second item.
	- The first parameter to the useState function is the default expected value of the variable you are creating

#### useEffect ()

We will always import useEffect as how we import named exports, within curly braces.
i.e.: `import { useEffect } from 'react';`

useEffect syntax follows the below logic:
	- The first argument is an callback function that will return a value.
	- The callback function is triggered immediately after the component renders. (Similar to componentDidMount function).
	- The second argument is dependencies.
	  **Note**: useEffect triggering behaves differently according to the dependency present:
		  1. If dependency is not provided to the useEffect hook, it will be triggered every instance the component renders. 
		  2. If dependency is empty array, then useEffect hook is only triggered on initial render.
		  3. If dependency is provided, then useEffect is triggered every time the dependency value changes
	  

#### Normal and State Variables

Normal variables, if modified through a function in the component, will not result in a component re-render, as React maintains it as a static variable (in a way). We are not notifying React to "React" to the data modification.

**V. Imp**: **Whenever a state variable changes, React will re-render the component**

React is fast because it does not interact with HTML a lot. Instead it uses a Virtual DOM.
Since React 16, React uses 'React Fiber', which uses a 'Reconciliation Algorithm' (Basically a diffing algo that searches for differences in current Virtual DOM, and new Virtual DOM which has to be rendered, and intelligently re-renders only the required tree nodes that has been changed.)

React Render runs on a 2 cycle process:
1. Reconciliation: This is where the Virtual DOM is processed, and the tree nodes (DOM nodes) that require re-rendering are identified, keeping the rest of the Virtual DOM untouched. React uses a Diffing Algorithm to achieve this. 
   **Note**: Every time the local State Variable is updated, it will trigger the reconciliation cycle (i.e. The current component is re-rendered for every instance that the state variable is rendered)
   
2. Rendering: Once reconciliation is completed, the reconciler sends the list of nodes and their position to the renderer, which will then render the new nodes alone, keeping the rest of the DOM untouched.

`Diffing` is the process carried out by React using React Fiber (A better reconciliation algo), where the previous rendered virtual DOM, and the new virtual DOM to be rendered are compared, whereby React can identify which are the DOM elements that are to be re-rendered, and which are to be kept as-is. 

Diffing is what makes React FAST.

### Routing

Routing basically refers to redirecting to separate paths based on links in a page

In react, we will use **react-router-dom** node module to achieve routing.

To start off, we need to create a routing configuration in our App.js (our base file).
we import `createBrowserRouter` and `RouterProvider` to help set this up
**Syntax:**
```
import {createBrowserRouter, RouterProvider} from react-router-dom
```

createBrowserRouter function accepts an array of objects with the below syntax:
```
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppContainer />
	},
	{
		path: '/about',
		element: <About />
	}
])
```

`RouterProvider` will replace the existing home base component in the root.render, and we will pass the `createBrowserRouter` value as the `router` prop to it.
**Syntax:**
```
root.render (
<RouterProvider router={appRouter} />
)
```

Now our project has routes enabled, with the help of createBrowserRouter and RouterProvider.

We can also provide an Error component for paths that are not documented, by providing a `errorElement` item in the object for the base route.
**Syntax:**
```
{
	path: '/',
	element: <AppContainer />
	errorElement: <Error />
}
```

react-router-dom also provides a hook, called `useRouteError`,  which provides further context on the routing error on the landed page.

In scenarios where we need to keep certain components persist, and redirect only parts of the page,  we will have to use `children` property, which will be the list of paths that will be children of the parent path.
We will then use `Outlet` component provided by react-router-dom in the AppContainer component, which will automatically take the components based on the path in the children

**Syntax:**
```
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

const AppContainer = () => {
return (
	<div className='App'>
		<Header />
		<Outlet />
	</div>
);
}

const appRouter = createBrowserRouter({
	path: '/',
	element: <AppContainer />,
	children: [
		{
			path: '/about',
			element: <About />
		},
		{
			path: '/profile',
			element: <Profile />
		}
	]
	errorElement: <Error />
});
```


#### Note: Very Important!!

Never ever use anchor href tags to redirect inside a React App, as it defeats the purpose of pages loading in a React manner!

Use `Link` component provided by react-router-dom instead, which allows the links to be clicked and redirects without refreshing the page

**Syntax:**
```
//Old a tags
<a href="/about">About</a>

//Link tags
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

This greatly increases efficiency and smoothness of the page, and also has huge performance improvement over using `a` tags

#### Routing in Web Apps

There are 2 types of Routing:
	1. Server Side Routing
	2. Client Side Routing

##### Server Side Routing
Server Side Routing is when the user routes to a a page, and the page details and resources are fetched from the server.
	This is usually meant as a on-demand load that will fetch most, if not all the data that the user will ever see/check for that specific section.

##### Client Side Routing
Client Side Routing is when the Server Side Routing has already completed, and now all the remaining routing is happening at the Client side alone, without fetching routing information from the server.

### Dynamic Routing

We can give dynamic routing using `/:dynamicPath`
We can then extract this dynamic path in our component using the `useParams` hook provided by react-router-dom


### Class Components

Use your Project knowledge

Class Components are invoked every single instance that the component is invoked

Whenever a class Component is loaded, the constructor of that class component is the first thing that is triggered
Then render is triggered.

#### Lifecycle Hooks 
Class Components also have multiple Lifecycle Hooks, including:
	**componentDidMount**: This is called once the render of the current component is completed.
	component. The main purpose is to make API calls, since the page has rendered, and now APIs can be called to fetch the data. This also helps with `lazy loading` of pages.
		Note: **componentDidMount** is an asynchronous call, which means that it will go to the `commit` phase, which is the 2nd stage of the React Lifecycle
	
	