import React from 'react';
import ReactDOM from 'react-dom/client';

// Old way of writing React
// const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React!');

// Writing React with JSX
const jsxHeading = <h1 id="heading">Hello World from React!</h1>

// React Functional Component
const TitleComponent = () => { return (<h1 id="heading">This is the heading Title Component</h1>) }
// The below 3 ways are all valid ways to call the TitleComponent component
const HeadingComponent = () => {
    return (
        <div id='container'>
            <TitleComponent />
            <TitleComponent></TitleComponent>
            {TitleComponent()}
            <h2 id="subheading">This is the subheading</h2>
        </div>
    );
}

// Another way for writing arrow functions
const HeadingComponent2 = () => (<h1 id="heading">Hello World from React Functional Component</h1>)

const root = ReactDOM.createRoot(document.getElementById('root'));

// When rendering a functional component, we need to use the tags <> to denote that this is a component
root.render(<HeadingComponent />);