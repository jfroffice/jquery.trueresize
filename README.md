# Goals

The main objective of this project is to demonstrate the relevance of using a script debounce to ensure that resize events are triggered correctly

[Demo](http://jfroffice.github.com/jquery.trueresize/demo/) (Do not forget to resize the browser window for at least 3 seconds)

# Benefits

![logo!](https://github.com/jfroffice/jquery.trueresize/raw/master/img/without.png)

![logo!](https://github.com/jfroffice/jquery.trueresize/raw/master/img/with.png)

# How to bind resize Event ?

- without

```javascript
$(window).on('resize', function() {
    // do your job here
});
```

- with jQuery.trueresize

```javascript
$(window).on('trueresize', function() {
    // do your job here
});
```

# Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jfroffice/jquery.trueresize/master/dist/jquery.trueresize.min.js
[max]: https://raw.github.com/jfroffice/jquery.trueresize/master/dist/jquery.trueresize.js
