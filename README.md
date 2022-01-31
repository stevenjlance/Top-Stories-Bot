# APIs CODE ALONG

APIs are powerful tools that we can incorporate into our programs in order to get quickly get information into our applications from exteneral sources.

A fairly comprehensive list of public APIs can be found [here](https://github.com/public-apis/public-apis). **NOTE**: It is recommended that you avoid OAUTH APIs as they can involve a fair amount of work outside of 

1. Go to https://developer.nytimes.com/apis
2. Create a developer account. 
3. Click "Apps" and then "+New App"
4. Select the databases you wish to use and copy your key into the `script.js` file here.
5. Create your API call in `script.js`. Don't forget to add `async` in front of the function and `await` for the variables that need to wait for the response from the API call.
6. Render each headline and image in their own card.