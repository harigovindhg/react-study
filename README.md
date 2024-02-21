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

### Ignite our React App
We can create our package.json, which is a configuration file for the node packages we will use in our React App.

We initiate the configuration using the below command:
```
npm init
```
which generates the package.json file for us.

The most important package for our React project is a 'bundler', like Parcel, Webpack, Wheat etc.
Install Parcel with this command

```
npm install -D parcel
```

There are 2 types of depencies we can have for our app:
	1. Dev Dependencies
		 dependencies we use during development
	2. Normal Dependencies
		dependencies we will have in production

**The `-D` we are using during npm install means that Parcel (any package that we are adding) will be added as a Dev dependency**

**Note**: In the package.json we can see sometimes `^ (caret)` and `~ (tilde)` next to the version of the package.
The difference between the 2 is that **`^` will automatically upgrade the package to the next available MINOR version, whereas `~` automatically upgrades the package to the next available MAJOR version**

package.json will have only the version of the node module, with the `^` next to it.
package-lock.json will have the exact version locked in for use in the project, and its details, including integrity hashes, sub-dependencies of the package we are using, etc.

#### Transitive Dependencies
A node module can have its own dependencies, and the sub dependencies can have its own dependencies, and so on and so forth. This tree of dependencies is called transitive dependencies.

Node modules can get quite chunky (large in size), and we absolutely do not want it to go to production, or to the git. 
To omit this file during our packaging, and pushing to github, we will create a `.gitignore` file.

```
.gitignore

	/node_modules
```

#### Packaging our React App

`npx parcel <core_fileName>` lets parcel to bundle our project, and runs it on the localhost for us

`npx` means `node package execute`.

`npx parcel core_fileName` executes parcel and asks parcel to use our `core_filename` file as the root file.

Parcel packages our files in a production ready package, and hosts it on a local server, which basically makes our code production ready.

##### Features of Parcel
1. Creating Dev build of codebase
2. Hosting to Local Server
3. **HMR** - Hot Module Replacement - As soon as changes are made to the code, parcel repackages the code and reruns the server.
4. Parcel achieves this using a File Watching Algorithm which is written in C++
5. Caching
6. Image Optimization
7. Minification
8. Compress
9. Content Hashing - **need to study about this**
10. Code Splitting - **need to study about this**
11. Differential Bundling - Browser specific bundling, creates a nomodule when `<script type="module">` is given
12. Diagnostics
13. Error Handling and Error Suggestions
14. HTTPS hosting
15. Tree Shaking - removes unused code
16. Transpiling

##### Running parcel to create a production build

`npx parcel build corefile_name`
**Note:** remove App.js as the main file from package.json, to allow the build to be successful


##### Browserslist

This is a node module which the user can use to specify the browsers which can run our code/webpage.

we will use it in our package.json

Sample Syntax:
```
"browserslist": [
"Last 2 Chrome versions",
"Last 2 Firefox versions"
]
```

This list specified means that our code will 100% work on the mentioned list, for rest of the browsers, there is no 100% guarantee from our end, that the webpage will load without any issues.

### Installing React in our project.

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

**Parcel transpiles our JSX before it reaches the JS Engine**.
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

The technology that React uses to achieve this is called **Reconciliation**.
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
	2. `useEffect()` - Used to trigger functions once the component has rendered.

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
	- If you want to trigger any function/cleanup task once the component unmounts, use a return function within the useEffect itself

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

React rendering of components works in 3 stages,
	Mounting
	Updating
	Unmounting
#### Lifecycle Hooks 
Class Components also have multiple Lifecycle Hooks, including:
	**componentDidMount**: This is called once the render of the current component is completed.
	component. The main purpose is to make API calls, since the page has rendered, and now APIs can be called to fetch the data. This also helps with `lazy loading` of pages.
		Note: **componentDidMount** is an asynchronous call, which means that it will go to the `commit` phase, which is the 2nd stage of the React Lifecycle


The Usual Lifecycle Methods can be seen here:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

NEVER COMPARE CLASS COMPONENT LIFECYCLE METHODS TO FUNCTIONAL COMPONENT USEEFFECT

### Optimizing a Web App

#### Single Responsibility Principle

Always make sure that each component that you create handles only a single task, i.e:  has a **single responsibility**

This also utilizes modularity of components, and helps with testing and issue detection

#### Custom Hooks
We can create custom hooks to abstract certain functions which might be used on more than one component, and may/may not be too large to be in a single component.

#### 'Chunking' aka 'Code Splitting' aka 'Dynamic Bundling' aka 'Lazy Loading' aka 'On-Demand Loading' aka 'Dynamic Import'

Refers to breaking down an App into smaller chunks, bundling the code in smaller chunks.

When the webpage loads initially, we dont want the codebase of the entire website to be loaded in immediately, since it can lead to JS files of massive sizes (even if they are minified!).

To make it so that only the necessary components are loaded, we will utilize `Lazy Loading`

Syntax: 
```
const Container = lazy(() => import(<component_path>));
```

But just using the above syntax is not enough.

We will run into the issue of synchronous inputs if we stop at this step. The issue is that when we click/ trigger the component render, React will fetch the lazy loaded codebase of the component into the code.
But this takes time (miniscule, but still not instantaneous). Which means that this fetching is asynchronous.
Our click, redirection, and render calls however, is synchronous, which will cause React to suspend the render, and throw an error, since the codebase for the component wasn't fetched synchronously.

##### Suspense
To fix the synchronous render call for asynchronously fetched codebase, we have to use `Suspense` component.
We will use this component as a wrapper on top of the component we are lazy loading.

Syntax:
```
import { lazy, Suspense } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const LazyLoadingComponent = lazy(() => import('./LazyLoadingComponent_path'));

const appRoutes = createBrowserRouter({
{
	path: '/',
	element: <Application />
	children: [
		{
			path: '/lazyloadpath',
			element: <Suspense fallback={<LoaderJSXComponent />}><LazyLoadingComponent></ Suspense>
		}
	]
}
})

```

The `fallback` property is to tell React to render the JSX passed to `fallback` till lazy loading is completed

### Higher Order Components

A Higher Order Component is a component that takes a component as an input, and returns another component.

A Higher Order Component will always be a pure function, meaning: it will never modify the component itself, only enhance by adding to it

### Lifting of States

Lifting of states refer to moving state variables from a child component to a parent component. This is usually done to make uncontrolled child components into controlled child components

Read More: https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
### Controlled Components and Uncontrolled Components

 A Controlled Component is a component which is controlled by its parent component.
 An Uncontrolled Component is a component which is not controlled by its parent.

E.g.: A Component which has a property to show/hide some of its contents, but the control for that feature is provided from its own parent component - This is a Controlled Component.

### Prop Drilling

Prop Drilling refers to passing props from a parent to a child component, and to its child component, which is used within that innerchild component.

This is something that should be avoided, as this can become overly verbose, and extremely inconvenient, as it can span multiple layers deep.

To avoid excessive prop drilling, we can use **useContext** hook to maintain a global level database of all the props required.

Read More: https://react.dev/learn/passing-data-deeply-with-context#the-problem-with-passing-props

### useContext

useContext is a react hook used to create `contexts` which contains data that can be accessed anywhere in the app.
Popular use cases for such a context is Login state, to track the login state, and login user data.

We can create a context using `createContext` , which is a named export from `react`

Syntax:
```
import { createContext } from 'react';

const UserContext = createContext({
	loggedInUser: 'initData'
});

export default UserContext;
```

#### Consumers

We can then access this created context in any component that we need using the `useContext` react hook.

Syntax:
```
import {useContext} from 'react';
import UserContext from '../utils/UserContext'

const data = useContext(UserContext);

console.log(data.loggedInUser);
```

**Note**: Hooks are not available in class Based components.
		We will use `<UserContext.Consumer>` component, which is provided by `createContext`.
		We have to write a callback function within this tags to get access to the data within `UserContext` context
	Syntax:
```
		<UserContext.Consumer>
			{(data) => {<h1>{data.loggedInUser}</h1>}}
		</ UserContext.Consumer>
```

`useContext` and `<ContextValue.Consumer>` are 2 methods by which contexts can be consumed.

#### Providers

We also will need to update the context values at some point ( In the case of a login page, once the user successfully logs in, we will have to update the context ).

We can wrap the component where we want the updated data to be present, in a `UserContext.Provider` tag.

We can also pass the set functions of the `useState` to the Provider to be made available throughout the wrapped child component.

Syntax:
```
import UserContext from '../utils/UserContext'
const [loginUserName, setLoginUserName] = useState('Hari Govind');
return (
	<UserContext.Provider value={{loggedInUser: loginUserName, setLoginUserName}}>
		<App>
	</UserContext>
);
```

**We can set contexts to the whole App, a section of the App**
**We can create multiple contexts, override anywhere we want, and only for specific sections**

`UserContext.Providers` can be nested, and is perfectly fine.


### Redux

Redux is a global state store that works on the Data Layer of the React App.

Redux is not a mandatory tool, and for many small-medium scale projects, we can achieve data stores using `contexts` itself!

Use it wisely, and only when needed!

Note: Redux is not the only data store library available for JS Apps. Another example is `Zustand`.

The main advantage of Redux is that it makes it very easy to debug the data. Mainly using the Redux Developer Tools Chrome Extension

Earlier, Redux was extremely complicated to set-up, and required many packages to be functional. To fix this, now Redux offers **Redux Toolkit (RTK)**

#### Architecture of Redux Toolkit

Redux Store can be considered as a large JS Object with multiple data, and is present in a global memory

In order to avoid obscenely large JS Object files, the Redux Store stores data in `Slices`.
`Slices` are basically small chunks of data which are logically separated, and stored in the Redux Store.

Let us understand the architecture and functioning better with the help of an example:
Consider we are adding the feature of a Cart, where user can add food items from a restaurant, and then review in the cart page. We will use Redux to develop this.

When a User clicks on the `ADD +`  button on a food item, We will expect the item data to be immediately pushed to the Redux Store. **But this is not possible**

Instead, on click of the `ADD +` button, we will `dispatch` an `action`, which in turn calls a `Reducer function`.
This `Reducer Function` will be the one that will update the `Slice` of our `Redux Store`.

##### Subscribing to the Store 

In order to retrieve the data from the Redux Store and use in the UI, we will use a `selector`
A `selector` will read the data from the slice of the Redux Store and return to component.

This process where we use a `selector` to keep our component in sync with slice in the Redux Store is called **Subscribing to the store.**

![[Redux Architecture.png]]