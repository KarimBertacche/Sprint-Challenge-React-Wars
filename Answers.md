# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a User Interface library that by being unopinionated gives us the freedom to be used together with other libraries and frameworks, React revolves around states and components, what it does best is to give a virtual DOM create by React itself that gets continuosly compared to the real DOM before re-rendering surgically only what changes, the page gets rendered only when the React app launches and call the render() method, and from then on other renders are only the result of state changes and props.
Other than that another great feauter of this UI library is how by using components (both functional & class) we can separate into small snippets of code the logic (composed of JS, CSS, and HTML) and make those components reusable across the project and others.  

1.  What does it mean to _think_ in react?
To think in React is to think in terms of components and that all parts of the UI can be separate into small pieces of logic that can contain a standalone feature that can be reused avoiding tedious repetitions and increasing productivity.  

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class component is usually the main root component that contains the state for the application, is where we usually contain the pieces of data that mutate or are used across the project, this states are then passed down to functional component which are considered stateless and are only function that returns some JSX, now thanks to hooks we can also use state with 'useState' hook within functional components which used to contain no state, although is still considered best to keep all the main logic within a top class component and then pass it down dynamically to other components where those are needed through props so those state can be access from any component.

1.  Describe state.
State is where the data gets stored, this data can be used and is subject to changes overtime that cause the re-render of the DOM, state used to be only part of class component using 'this.state' and 'this.setState' to alter it, but now using hooks state are also available in functional components.

1.  Describe props.
Props stand for properties, is an object that is used to pass state and event handlers down to other components which are usually stateless functional components,is the connection between components, props are basically all the attributes that gets assigned to a component and passed to other components that needs to use them internally, props when used they re-render the content displayed.
