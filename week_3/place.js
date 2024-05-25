const pattern = /last_modif\s*=\s*([^;]*)/;

if (
    Date.parse(document.lastModified) >
    (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
    document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname
        }`;
    alert("This page has changed!");
}

function windChill(form) {
    const wind = parseFloat(form.wind.value);
    const temp = parseFloat(form.temp.value);
    const chill =
        0.0817 *
        (3.71 * Math.pow(wind, 0.5) + 5.81 - 0.25 * wind) *
        (temp - 91.4) +
        91.4;
    form.windchill.value = chill.toFixed(2);
}
function calculateWindChill(temperature, windSpeed, unit) {
    const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
    const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;


    const tempInFahrenheit = (unit === '°C') ? celsiusToFahrenheit(temperature) : temperature;


    const windchill = 35.74 + 0.6215 * tempInFahrenheit - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempInFahrenheit * Math.pow(windSpeed, 0.16);

    return (unit === '°C') ? fahrenheitToCelsius(windchill) : windchill;
}

