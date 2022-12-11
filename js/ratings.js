

const collect_ratings = () => {
const ratings = { count: 0, sum: 0, average: 0 };

let rating = 0;
const elements = document.querySelectorAll('.rating');
//Cycle through the elements array
    elements.forEach(element => {
    rating = parseInt(element.id.replace('star', ''));
    ratings.count += parseInt(element.value);
});


};

 



