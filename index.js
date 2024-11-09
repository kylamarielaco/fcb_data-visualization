console.log("Hello world!");

const dateElement = document.getElementById('date');
console.log(dateElement);

let currentDate = new Date();

let dateOptions = { year: "numeric", month: "long", day: "numeric" };
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

const url = "https://fakestoreapi.com/products";
const options = {
  method: 'GET', 
};

// Request to get data from URL, submitting also the values from options
fetch(url, options)
  .then(res => res.json())
  .then(data => {
    console.log(data);

    // Collect all the titles from each object and store it in 'titles'
    let titles = data.map(object => {
      console.log(object);
      console.log(object.title);
      return object.title; // Add the title to the titles array
    });

    console.log(titles);

    // Collect all the ratings from each object and store it in 'ratings'
    let ratings = data.map(object => {
      return object.rating.rate; // Add the rating inside the 'rating' property to the 'ratings' array
    });

    console.log(ratings);

    const myChart = document.getElementById("myChart");

    // Chart.js configuration with corrected data and chart options
    let barChart = new Chart(myChart, {
      type: 'bar',
      data: {
        labels: titles, 
        datasets: [{
          label: 'Ratings of Products', 
          data: ratings, 
          borderWidth: 2,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],

          borderColor: [
            'rgb(255, 99, 132)',
	    	'rgb(255, 159, 64)',
	    	'rgb(255, 205, 86)',
	   		'rgb(75, 192, 192)',
	   		'rgb(54, 162, 235)',
	   		'rgb(153, 102, 255)',
	   		'rgb(201, 203, 207)',
          ],

          hoverBackgroundColor: [
            'rgb(255, 99, 132)',
	    	'rgb(255, 159, 64)',
	    	'rgb(255, 205, 86)',
	   		'rgb(75, 192, 192)',
	   		'rgb(54, 162, 235)',
	   		'rgb(153, 102, 255)',
	   		'rgb(201, 203, 207)',
          ]
        }]
      },
      options: {
      	indexAxis: 'x',
        scales: {
        	x: {
        		beginAtZero: true,
        	}
        }
      }
    });
});


