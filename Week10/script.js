    async function getWeather() {
      const city = document.getElementById('city').value.trim();
      if (!city) {
        alert('Please enter a city name');
        return;
      }
      try {
        // Step 1: Get coordinates of the city using Nominatim (OpenStreetMap)
        const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
        const geoData = await geoRes.json();
        if (geoData.length === 0) {
          document.getElementById('result').innerHTML = '<p>City not found!</p>';
          return;
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        // Step 2: Fetch weather from Open-Meteo
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const weatherData = await weatherRes.json();

        const temp = weatherData.current_weather.temperature;
        const wind = weatherData.current_weather.windspeed;
        const code = weatherData.current_weather.weathercode;

        document.getElementById('result').innerHTML = `
          <h3>${city}</h3>
          <p>🌡 Temperature: ${temp}°C</p>
          <p>💨 Wind Speed: ${wind} km/h</p>
          <p>📌 Weather Code: ${code}</p>
          <small>(Use <a href="https://open-meteo.com/en/docs#weathercode" target="_blank" style="color:#fff;">Open-Meteo Weather Codes</a> for description)</small>
        `;
      } catch (error) {
        document.getElementById('result').innerHTML = '<p>Error fetching weather data</p>';
      }
    }
