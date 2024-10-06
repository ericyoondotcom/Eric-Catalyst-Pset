<!-- VIEW THIS README.MD FILE IN VS CODE -- PRESS THE "PANELS WITH MAGNIFYING GLASS" ICON IN THE TOP RIGHT! -->

# Pset 3: Trumbull Student Directory

## Premise

Head Fahmeed Hyder of Trumbull College is having trouble keeping track of all the unruly frosh in the class of '28. He's asked you to write him a list of all the students in the Trumbull class of '28.

However, you're a computer scientist—you're going to [waste time automating it](https://xkcd.com/1205/) rather than just writing it out by hand.

Make Head Hyder a page that lists all the student names in the class of '28.

## How are we going to do this?

Luckily, a very cool Yale organization called Y/CS has made Yalies.io, "the better student directory." They have an API—a web service that returns machine-readable data—that we can use to get student names.

## Yalies API

1. Sign in to Yalies.io, and go to the [API page](https://yalies.io/apidocs).
2. Generate an API key. An API key is like a password, but for computers instead of humans. It allows us to run Yalies queries on our behalf. Treat API keys just like passwords—don't share them with anyone (except when turning in this assignment).
3. Read the docs! The docs show you exactly what URL you need to use to get the data you want.

## How to make web requests

In order to get data from an external web server, we need to make a web request. We can do this in JavaScript using the `fetch` function.

Example:
```js
fetch("https://worldtimeapi.org/api/timezone/America/New_York").then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});
```

### What is the funny business with `then`?

It takes time to get data from a server—after all, the packets have to travel through the underseas cables. We don't want to wait around for the response and delay execution of everything else on our computer.

So, instead of returning data immediately, the `fetch` function returns a **promise**. A promise is a placeholder for data that will be available in the future. When a promise is done executing, it calls whatever function you supply to `.then`. This is how we can get the data from the server and then do something with it.

Note that there are two `.then` functions in the example above. The first one is called when the server responds with data, and the second one is called when the data is ready to be used.

### Adding a request body

Sometimes, a URL is enough to get the data we want. Other times, we need to send data to the server in order to get the data we want. This is called a request body.

There are four types of HTTP requests: GET, POST, PUT, and DELETE. By default, `fetch` uses GET. But, if we want to send a request body, we need to specify that we want to use POST.

Example:
```js
fetch("gru-headquarters.com/minions/deploy", {
    method: "POST",
    body: JSON.stringify({
        "minionCount": 100,
        "minionCohort": "Cohort A"
    })
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});
```

## Adding headers

All HTTP requests have metadata called Headers. You will need to use the Authorization header to supply your API key and prove you are authorized to view the data.

Example:
```js
fetch("whitehouse.gov/deploy-nukes", {
    headers: {
        "Authorization": "Bearer 123abc456xyz" // replace 123abc456xyz with your API key
    }
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});
```

## Put it together

Find the URL of the API endpoint you should use by reading the Yalies docs. Make a fetch request to this endpoint.

Supply a request body. Again, look at the API docs to learn how to supply the requested filters—only Trumbull students, and only class of '28.

Supply the API key, prepended by `Bearer `.

When you get the data back, parse it from JSON. At this point, console-log it to see what the data is structured like!

Each student is represented as a JSON object with lots of data that we don't need. Use the `map` function that you learned about in the videos to extract just the names of the students.

Finally, display the names on the page. For each student, make a new `li` element and append it to the `students` list.
