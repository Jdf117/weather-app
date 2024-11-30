Instructions:

- in terminal run: npm run dev
- go to: localhost:5173 in browser
- By default it will show Vancouver weather forecast
- search bar can be used to search for weather for different cities

Notes:
For this project, I needed quite a bit of time to complete the requirements for the assignment.

I'm still very rusty when trying to write code that is able to pull data from an API. Alot of mistakes and just unfamiliarity when it comes to the code. I have to admit, I needed some use ChatGPT to suppliment my learning and problem solving with the code.

I started off by visualizing the code structure of the app by writing it down.

Originally, I wanted to separate the app into a 3 components mostly for code organization and readability.

1. Forecast - which would show the 5 day forecast
2. the search Bar - search bar function that would show the weather of the city
3. the current weather display - could show the current weather.

I used the api to pull the current weather info and display it onto my app and mistaking thought i needed to pull another set of info for the forecast using another endpoint.

After a few attempts and confusing myself, I realized the API's 5 day forecast will include the current day's weather as well. By hitting up the end point directly on the browser, i was able to see the type of info i was getting. I eventually was able to acquire all the data i needed by hitting up the 5 day forecast endpoint. This helped simplify code down to just two components, searchBar and weatherDisplay.

I had some trouble figuring out the how to pull the desired data from the API forecast.

For the most part, I definitely struggled with this assignment, and I foresee more struggles in future assignments for myself as my work has definitely taken up alot of my time. I will definitely need to go back and review the fundamentals more to get a more solid grasp on the material. The struggle bus is real.
