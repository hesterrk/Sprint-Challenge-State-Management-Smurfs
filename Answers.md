1. What problem does the context API help solve?
-It avoids prop drilling: which is where you need to pass props down component by component until you get to the component you want to pass it down too. 
-Instead it enables us to store state data on our context object, which can then be consumed in the necessary components where it is needed. It is great when theres a lot of components that depend on a single piece of state but are nested within that component tree.

2.In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-Action creators are functions that create and dispatch actions. This dispatching behaviour is all under redux hood. They dispatch these actions to our reducer. We pass in our action creators to our desired component in the first connect() function call along with mapStateToProps. We do this so it invokes the dispatcher and thus passes the action to the reducer.
-These dispatched actions are objects with a type property and a payload property, the latter only being used if we want to pass in extra data to the reducer. These object’s type property tells the reducer in what way to change the state. They represent everything a user can do inside of our app

-Reducer functions respond to action objects and update the state. It handles actions it receives from the action creator and handles the actions depending on the type the action object has, and thus replaces the store accordingly. If we have multiple reducers we import them into one file and then pass in the giant reducer into our createStore function which will then call our reducer. All reducer functions are pure. This reducer function represents our global state. We create as many reducers as there are slices of state.

-The store is known as single piece of truth because all our state in the redux store is immutable, when it changes we simply clone that state object, modify changes and replace the original state with the new copy, we do not mutate the original object and never write it to our single state store object. There are no changes to the state directly and our reducer functions act as guards to the source of truth. 


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-Component state is state that is local to that component, where only that component needs that state. It can only be updated within that component and passed down to its children components by props or context api

-App state is global state, in redux it is held in the redux store, which we can use on all our components in our app. The way it access it from the store is through <Provider> component and the connect function’s second invocation which we wrap directly around the desired component we want to use that store in.


4.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
 What is your favourite state management system you've learned and this sprint? Please explain why!

-Because reducers are synchronous by nature, redux-thunk allows us to carry out async operations. Which means these operations happen before the actions flow to the reducers.
-Thunk is an example of a middleware, its a function that is returned from a function which we write in our action creator functions. In our action creator, it dispatches a function, rather than an object, to our thunk middleware, preventing it from going to our reducer. Thunk intercepts it. Here our action function (which our action creator function created) gets called, and gets passed in a dispatch function as an argument under the hood, which our action creator function has, thus it now has access to it. Thus, we can now run our api calls as outlined in the dispatch function (in action creator function) and then dispatch the action after the api call has been made, either if it has worked or not worked.

-My favourite state management system is context API. I think its great syntax-wise, its short and very intuitive. 
