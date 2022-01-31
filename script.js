console.log("connected")

// Select the output div and button below.

var button = document.querySelector("#topButton")
var outputDiv = document.querySelector("#storyContainer")


// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked

button.addEventListener("click", function(){
	sendApiRequest()
	
	
})

// Go to https://developers.nytimes.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
var YOUR_API_KEY_HERE = "AAAmkyE5A5jA1DdPTVUIg9wmubgatxFN";

async function sendApiRequest(){
	var response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${YOUR_API_KEY_HERE}`)
	var data = await response.json()
	for(var i = 0; i < data.results.length; i++){
		outputDiv.innerHTML += `<div class="card col-6" style="width: 18rem;">
		<img src="${data.results[i].multimedia[0].url}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${data.results[i].title}</h5>
			<p class="card-text">${data.results[i].abstract}</p>
			<a href="${data.results[i].url}" class="btn btn-primary">Read Story</a>
		</div>
	</div>`

	}
	console.log(data)
	
}
	
