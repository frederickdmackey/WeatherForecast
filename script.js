<script>
fetch('https://weather.caps.ua.edu/v2.0/Forecasts/Daily', { mode: 'no-cors' })
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log('ERROR'))
</script>
