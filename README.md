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


#### JSX
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

#### React Keys (Very Important)

We should always provide a `key` for multiple children under a html element, which will help React with optimizing its render cycles, and helps with minimizing render time and overhead.

React cannot uniquely identify the newly to-be-rendered item in the page, and the rest of the items in the page, if it does not have a unique `key`.

**Very Important: Do NOT use `index` as a key, as it results in it being an antipattern, rather than being helpful. Please use a data specific id as the identifier, without depending on the map `index` or iteration `index`.
Using `index` as a key should always be the last resort.**

The technology that React uses to achieve this is called **Reconciliation**
**Read More on Reconciliation**: https://legacy.reactjs.org/docs/reconciliation.html

**Other Important Subjects**
	React Fiber: https://github.com/acdlite/react-fiber-architecture
	React without ES6: https://legacy.reactjs.org/docs/react-without-es6.html

#### `< React.Fragment ><React.Fragment />` ( now `<Fragment ><Fragment />`) or `<></>`

React.Fragment (Fragment) is a tag which can be used to group a list of children without using tags.


#### React File Structure

We can keep our components in a `components` folder, and our apis in an `api` folder. This is a generic market practice, and React does not force you to follow any specific practice.

It is also a good practice to name the components with the exact name as that of the function inside the file. This facilitates easy readability.

#### Exporting

There are mainly 2 ways of exporting from a file:
1. Default Export: Default way of exporting a component/object/data from a file. Can only be used once per file, as multiple default exports are not allowed.
		`syntax: export default Component;`
			    `import Component from ./Component`
2. Named Export: Used when we have to export multiple object/data/components from a file.
		`syntax: export const Component;`
			    `import { Component } from './Component'`

