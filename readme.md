**Delegated event handlers**: defers calculating whether a DOM element matches
the event until run time when the event happens

### JQuery:

The ``attr`` method can take a hash as its argument if you'd like to set
multiple different attributes.  Example:

```javascript
$(this).attr( { target: "_blank", title: "Opens in a new window" } );
```

Using HTML5 data:

You can attach a ``data-`` value to any html element.  To then access that
element we can use jquery like so:

```javascript 
<input id="3" data-buildingHeight ... etc>
$("#3").data("buildingHeight");
```

The text() method is a unique getter in the sense that it is not limited to just
the first element of the selection set, but will combine the text of all
elements in the selector set.  All html syntax will be escaped out.



