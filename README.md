# pizza-app
## Final project

__Introduction:__ Welcome Ryan, you will be using jQuery, Angular and Rails extensively. This project will be split into 2 phases:

- Constructing a UI with just jQuery and Sinatra
- Moving the backend into Rails and integrating UI into views 

Before you start, it is suggested that you should have completed the following:

- [Try jQuery](http://try.jquery.com/) or [Intro to jQuery](https://www.udacity.com/course/intro-to-jquery--ud245)
- [Responsive design fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
- [Intro to algorithms](khanacademy.org/computing/computer-science/algorithms)
- [Steps 0-5 of Angular tutorial](https://docs.angularjs.org/tutorial/step_00)


### Phase 1
----
The big goals for this phase are as follows:

1. Build a responsive UI using HTML / CSS for Mobile, Tablet & Desktop
2. Use jQuery and AJAX to manage the entire state of the UI
3. Understanding HTTP responses & status codes 

You will be building out an app to allow different people to request a person to split a pizza with in a given location. Here are your user stories:

"An anonymous user should be able to register with a name & valid email"

"An anonymous user should not be able to register without a valid email"

"A registered user should be able to set a location using HTML5 [Geolocation API](http://www.w3schools.com/html/html5_geolocation.asp)"

"When a registered user is building their pizza - it should literally be a pizza on the screen with topping options"

"A registered user should be able to request a pizza with certain toppings based on location"

- If there is no location set for user, ask them for their location using  [Geolocation API](http://www.w3schools.com/html/html5_geolocation.asp) before the request for pizza is sent to the server
	
- If there is a location set then send the request

"A registered user should be [short-polling](http://codereview.stackexchange.com/questions/62593/is-it-long-polling-or-short-polling#answer-87878) the server for nearby pizza requests"

"A registered user should be able to accept or agree to a nearby request" 

	Note: All requests for pizza can only be split by 2 for the context of this app.

Required work:

1. Create an ERD for your models (you will use this to decide what you return from your Sinatra server)
2. Create mock ups for mobile, tablet & desktop using [Balsamiq](https://balsamiq.com/products/mockups/) based on user stories
3. Create a Sinatra server that responds with JSON (make sure your content-type is correct)
4. Create HTML / CSS / jQuery for based on mockups and user stories (there should not be any full page refreshes in your app)
5. Use RESTful principals to design endpoints / paths on your Sinatra server




### Phase 2
----

The big goals for this phase are as follows:

1. Refreshing your rails skills
2. Integrating responsive CSS into a Rails app
3. Using Angular in a rails app

The user stories here are the same as above.

Required work:

1. Generate models for everything in your ERD
2. Integrate your CSS code into your rails app
3. Rewrite all jQuery / js code in Angular
4. Generate controllers for all endpoints from the Sinatra app

__Note:__ If you get stuck, shoot me a message or ask someone for a little help.
