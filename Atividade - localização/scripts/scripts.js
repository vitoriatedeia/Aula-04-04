// Fluxo:
// - Evento de submit no formuláriodisparado pelo botão
// - captura do evento pelo search.addEEventListener("submit", processar);
// - o evento captura o valor do input e coloca ele na url de requisição
// - É feita a requisição e a rsposta é capturada por response.json();

//img
// textos temperatura e tempo
// temp mínima, máxima, umidade e ventos

const search = document.getElementById("search");
const cityInput = document.getElementById("cidade");
const nomeCidade = document.getElementById("title");
const img = document.getElementById("img");
const tempp1 = document.getElementById("tempp1");
const tempp2 = document.getElementById("tempp2");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const weather_results = document.getElementById("weather_results");

const processar = async (event) => {
  event.preventDefault();
  const cityName = cityInput.value;
  const key = "189502a7e0b506e1d9cbe9a654b81843";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${key}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    nomeCidade.textContent = data.name;
    tempp1.innerHTML = `${data.main.temp} <sup>C°</sup>`;
    tempp2.textContent = `${data.weather[0].description}`;
    tempmin.innerHTML = `${data.main.temp_min} <sup>C°</sup>`;
    tempmax.innerHTML = `${data.main.temp_max} <sup>C°</sup>`;
    umidade.textContent = `${data.main.humidity}%`;
    vento.textContent = `${data.wind.speed}km/h`;

    weather_results.classList.add("visible");
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

search.addEventListener("submit", processar);
