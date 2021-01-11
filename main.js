//"https://api.lyrics.ovh/v1/{artist}/{song}" some lyrics api

let api = "https://api.lyrics.ovh/v1/";

//declaring varibles
const loadingDiv = document.createElement("div");
const sectionDiv = document.createElement("div");
loadingDiv.setAttribute("id", "loadingDiv");
sectionDiv.setAttribute("id", "sectionDiv");
mainDiv.appendChild(loadingDiv);
mainDiv.appendChild(sectionDiv);

// creating variables for loading gif (displayed on loadingDiv)
const loadingEle = document.createElement("div");
loadingEle.setAttribute("id", "loadingGif");
loadingDiv.appendChild(loadingEle);

//fetching function
function getSongsLyrics(artist, songName) {
	return fetch(`${api}${artist}/${songName}`)
		.then(res => res.json())
		.catch(rej => console.log(rej));
}

//async function for accept & send api (execute loading)
let showsRes;
async function searchForLyrics(artist, songName) {
	try {
		loadingEle.innerHTML =
			'<img  src="./img/loadingGif2.gif" alt="loader" id="gifImg">';
		showsRes = await getSongsLyrics(artist, songName);
		createAndShowLyrics(showsRes.lyrics, artist, songName);
	} catch (error) {
		console.log(error);
	} finally {
		loadingEle.innerHTML = "";
	}
}

// declaring variabels for some text and showing api on site (displayed on sectionDiv)
const secDivEl = document.getElementById("sectionDiv");
const titlesDiv = document.createElement("div");
const mainTitle = document.createElement("h1");
const secundTitle = document.createElement("h2");
const showLyrDiv = document.createElement("div");

//function for creating & showing api stuff (getting api + 2 params)
function createAndShowLyrics(lyricsApi, artist, songName) {
	titlesDiv.setAttribute("id", "resultDiv");
	mainTitle.innerText = "Nice to have you here.";
	secundTitle.innerText = `${artist} - "${songName}"`;

	showLyrDiv.setAttribute("id", "lyricsRes");
	showLyrDiv.innerText = lyricsApi;

	titlesDiv.appendChild(mainTitle);
	titlesDiv.appendChild(secundTitle);
	titlesDiv.appendChild(showLyrDiv);

	secDivEl.appendChild(titlesDiv);
}
