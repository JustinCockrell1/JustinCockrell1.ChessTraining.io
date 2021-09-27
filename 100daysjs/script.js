const titles = [
    "Counter App",
    "Random Number Generator",
    "Random Hex Color Generator",
    "Modal Popup",
    "Palindrome Checker",
    "Vowel Counter App",
    "Click To Copy",
    "Drive Download",
    "Input Field Char Count",
    "Internet Connection Test",
    "Quiz App",
    "API",
    "HTTP",
    "More HTTP",
    "Weather App",
    "List Search",
    "Date Countdown",
    "Day Countdown",
    "Tip Calculator",
    "Smooth Scroll",
    "Sticky Nav On Scroll",
    "Active Menu Switcher",
    "Scroll To Top",
    "Responsive Mobile Menu",
    "Responsive Mobile Menu Part 2",
    "Responsive Mobile Sub Menu",
    "Page Scroll Indicator",
    "News Letter Form On Scroll",
    "Page Animation",
    "Password Generator",
    "Local Storage",
    "Todo App",
    "Notes App",
    "BMI Calculator",
    "Calculator",
    "Digital Clock"

];

function addListItems() {
    const list = document.querySelector(".day-list");
    for (let i = 0; i<titles.length; i++)
        list.innerHTML += `<a href="projects/Day${i + 1}/index.html"><li>Day ${i + 1} - ${titles[i]}</li></a>`;
}

addListItems();