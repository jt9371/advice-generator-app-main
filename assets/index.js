async function getResponse() {
	const response = await fetch(
		'https://api.adviceslip.com/advice',
		{
			method: 'GET',
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);

	}
	const data = await response.json();

    const number = document.getElementById('number');
    const description = document.getElementById('description');
    number.innerText = "Advice #" + data.slip.id;
    description.innerText = "“" + data.slip.advice + "”" ;
}

getResponse();

const botoncito = document.getElementById('myBtn').addEventListener("click", getResponse);