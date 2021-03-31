import counter from "../../img/counter.png";
import counter2 from "../../img/counter2.png";
import kaching from "../../img/kaching.png";
import kaching2 from "../../img/kaching2.png";
import starwars from "../../img/starwars.png";
import starwars2 from "../../img/starwars2.png";
import tictactoe from "../../img/tictactoe.png";
import tictactoe2 from "../../img/tictactoe2.png";
import todo from "../../img/todo.png";
import todo2 from "../../img/todo2.png";
import selectsort from "../../img/selectsort.png";
import selectsort2 from "../../img/selectsort2.png";
import bubblesort from "../../img/bubblesort.png";
import bubblesort2 from "../../img/bubblesort2.png";
import form from "../../img/form.png";
import form2 from "../../img/form2.png";

export const data = [
	{
		titulo: "kaChing!",
		foto: `${kaching}`,
		foto2: `${kaching2}`,
		contenido:
			"kaChing! is a budget tracker that lets users keep track of their income and expenses on a monthly and weekly basis. You can categorize your expenses and then compare them visually with charts and graphs.",
		github: "https://github.com/lucydoja/kaChing",
		browser: "https://kachingcr.herokuapp.com/",
		technologies: [
			"React",
			"Flux",
			"Context API",
			"Rest API",
			"React Router DOM",
			"Chart.js",
			"CSS",
			"Bootstrap",
			"Python",
			"Flask",
			"SQLAlchemy",
			"PostgreSQL"
		],
		features: [
			"OAuth User Authentication",
			"REST API with CRUD operations",
			"Currency Converter using third-party API",
			"Password Reset functionality",
			"Compare expenses on a monthly and weekly basis by category with data visualization"
		]
	},

	{
		titulo: "Star Wars Blog",
		foto: `${starwars}`,
		foto2: `${starwars2}`,
		contenido:
			"This is a simple Star Wars blog where you will be able to add, delete and review your favorite planets and characters from the Star Wars world.",
		github: "https://github.com/lucydoja/Star_Wars-Lucia_Dominguez",
		browser: "https://lucydoja.github.io/Star_Wars-Lucia_Dominguez/",
		technologies: [
			"JavaScript",
			"React",
			"Flux",
			"Context API",
			"Rest API",
			"React Router DOM",
			"CSS",
			"Bootstrap"
		],
		features: [
			"Add and delete favorites",
			"Review character and planet information",
			"View a list of your selected favorites"
		]
	},

	{
		titulo: "Tic Tac Toe",
		foto: `${tictactoe}`,
		foto2: `${tictactoe2}`,
		contenido:
			"Who didn't play Tic Tac Toe as a kid? Tic Tac Toe is a two player game (X and O) that consists in filling the grid until one player is able to win by filling three continues rows (vertically, horizontally or diagonally).",
		github: "https://github.com/lucydoja/Tictactoe-Gato",
		browser: "https://lucydoja.github.io/Tictactoe-Gato/",
		technologies: ["JavaScript", "React", "CSS", "Bootstrap"],
		features: [
			"Choose the name of the players",
			"Play tic tac toe until the game ends",
			"Restart the game",
			"Reset players' names",
			"Written description of whose turn is it and who is the winner"
		]
	},

	{
		titulo: "Chronometer and Timer",
		foto: `${counter}`,
		foto2: `${counter2}`,
		contenido:
			"Here you can find a chronometer (that counts time up second by second) and a timer (set the time you need and it will count down for you). With a pretty visualization, you can see each second, minute and hour going up or down.",
		github: "https://github.com/lucydoja/Counter",
		browser: "https://lucydoja.github.io/Counter/",
		technologies: ["JavaScript", "React", "CSS", "Bootstrap"],
		features: [
			"Count time up with the chronometer",
			"Set a timer for your specific needs",
			"Alert once the time runs out",
			"Easy to use"
		]
	},

	{
		titulo: "To do list",
		foto: `${todo}`,
		foto2: `${todo2}`,
		contenido:
			"This project is a To do list, where you can add and delete your chores. With a post-it like interface it's a pretty way to remember what you need to do during the day.",
		github: "https://github.com/lucydoja/To-Do-List",
		browser: "https://lucydoja.github.io/To-Do-List/",
		technologies: ["JavaScript", "React", "CSS", "Bootstrap"],
		features: [
			"Add tasks with an automatic display",
			"Delete task by hovering over it and presing the trash bin icon",
			"Delete all the tasks",
			"Counter of missing tasks"
		]
	},

	{
		titulo: "Card dealer with Bubble sorting",
		foto: `${bubblesort}`,
		foto2: `${bubblesort2}`,
		contenido:
			"This is a random card generator. Just input how many cards you want to get and the program will show you a random set of cards. If you press the order button, the cards will be sorted using the Bubble sorting algorithm. ",
		github: "https://github.com/lucydoja/Bubble-Sorting",
		browser: "https://lucydoja.github.io/Bubble-Sorting/",
		technologies: ["HTML", "JavaScript", "CSS", "Bootstrap"],
		features: [
			"Select the number of cards you need",
			"Generate a random set of cards",
			"Order them ascendently in just a click",
			"Select sorting algorithm"
		]
	},

	{
		titulo: "Card dealer with Select sorting",
		foto: `${selectsort}`,
		foto2: `${selectsort2}`,
		contenido:
			"This is a random card generator. Just input how many cards you want to get and the program will show you a random set of cards. If you press the order button, the cards will be sorted using the Select sorting algorithm. ",
		github: "https://github.com/lucydoja/Select-Sorting",
		browser: "https://lucydoja.github.io/Select-Sorting/",
		technologies: ["HTML", "JavaScript", "CSS", "Bootstrap"],
		features: [
			"Select the number of cards you need",
			"Generate a random set of cards",
			"Order them ascendently in just a click",
			"Bubble sorting algorithm"
		]
	},

	{
		titulo: "Form Validation",
		foto: `${form}`,
		foto2: `${form2}`,
		contenido:
			"Example of a form validation. It incorporates different types of input (text, radio, select and text area), and restrictions towards the characters accepted (text or numerical only).",
		github: "https://github.com/lucydoja/Form-Validation",
		browser: "https://lucydoja.github.io/Form-Validation/",
		technologies: ["HTML", "JavaScript", "Bootstrap"],
		features: [
			"Form validation",
			"Character restrictions",
			"Different types of input",
			"`pop-up` alert"
		]
	}
];
