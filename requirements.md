# Front End Assignment - Progress Bars

**Primary task:**
Using React.js implement progress bars:

[Design here](/design.png)

[Endpoint here](/bars)

### Requirements

* Use create-react-app to create your app.
* Using component state is fine, you don’t need to use Redux.
* Implement the provided design.
* Must read data from the endpoint.
* Multiple bars.
* One set of controls that can control each bar on the fly.
* Can't go under 0.
* Can go over 100%, but limit the bar itself and change its colour.
* Display usage amount as a percentage, centered on each bar.
* Implement a responsive solution.
* Animate the bar change, make sure it works well when you tap buttons quickly.
* Unit tests are not required.

### Deliverables 

* Link to a hosted version of the final product (there are several free hosting options such as Firebase, Heroku, GitHub Pages).
* Link to the source on GitHub.
* How long the exercise took.
* Rationale around tech choices.
* Next steps / features missing.

It's up to you to decide how far you want to go.

Example structure from the endpoint:
```js
{  
    "buttons": [ 
        // The amount of buttons to display and what value they increment or 
        // decrement the selected bar. Randomly generates between 4 and 6 buttons.
        10,
        38,
        -13,
        -18
    ],
    "bars": [
        // The number of progress bars to display and their default values. 
        // Randomly generates between 2 and 5 progress bars.
        62,
        45,
        62
    ]
}
```

Have fun!
