const searchBtn = document.querySelector('.form__button--submit');
searchBtn.addEventListener('click', handleSearchClick);

function handleSearchClick(e) {
	e.preventDefault();
	const searchStr = document.querySelector('.form__input--search').value;
	const gifsBox = document.querySelector('.main__gifs');
	gifsBox.innerHTML = '';
	fetch(`https://api.giphy.com/v1/gifs/search?api_key=hbQHYqjDaRuN9oqpBU90el9uOeUrxuhH&q=${searchStr}&limit=5&offset=0&rating=g&lang=en`)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			for (const i of response.data) {
				const gif = `<div class="gifs__gif">
					<img src=${i.images.fixed_height.url} alt="">
				</div>`
				// console.log(i.images.fixed_height.url);
				gifsBox.innerHTML += gif;
			};
		})
		.catch(error => console.log(error));
	document.querySelector('.form__input--search').value = '';
}