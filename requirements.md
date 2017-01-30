# Front End Assignment - Progress Bars

**Primary task:**
Using React.js **(no jQuery)** implement the following (you can make it look however you like):

[Example here](/progress-bars-demo.ogv)

[Endpoint here](/bars)

### Requirements

* Must read data from the endpoint.
* Multiple bars.
* One set of controls that can control each bar on the fly.
* Can't go under 0.
* Can go over 100%, but limit the bar itself and change its colour.
* Display usage amount as a percentage, centered on each bar.
* Write tests for your code (hint: TDD strongly preferred).
* Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely.
* Animate the bar change, make sure it works well when you tap buttons quickly.
* Version control.
* Setting it up as a project.
* Setting up some automated tools.
* Linting, code quality, etc.
* Comment code.

### Deliverables 

* Link to GitHub pages of the final product.
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
