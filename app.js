var btnTranslation = document.querySelector("#trans-button");
var translationText = document.querySelector("#input-translation");
var outputBox = document.querySelector("#output-box");
var url = "https://api.funtranslations.com/translate/pirate.json";

function newUrl(text) {
  return url + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error has occured", error);
  alert("some thing went wrong");
}

function clickHandler() {
  var text = translationText.value;
  fetch(newUrl(text))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputBox.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslation.addEventListener("click", clickHandler);
