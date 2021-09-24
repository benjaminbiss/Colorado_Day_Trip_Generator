//Day Trip Generator for Colorado

// List of modes of transportation
let travelType = ['drive', 'take a taxi', 'ride a bike', 'taking a bus', 'take the Light Rail'];

// List of locations for the vacation
    // Dependant on mode of travel
let destination = ['Denver', 'Vail', 'Colorado Springs', 'Boulder', 'Fort Collins', 'Loveland', 'Winter Park', 'Glenwood Springs'];

// List of restaurants
    // Dependant on location
let denverRestaurants = ['Frasca Food & Wine', 'Blackbelly', 'Dry Storage', 'Kiké’s Red Tacos', 'The Ginger Pig', "The Wolf's Tailor"];
let vailRestaurants = ['Drunken Goat', 'The Craftsman', 'The Rose', 'Village Bagel', 'Wyld', 'Vin 48'];
let coloradoSpringsRestaurants = ['Slice 420', 'Carlos Bistro', 'Marigold Cafe & Bakery', 'Work in Work Out', 'Josh and John Naturally', 'The Rabbit Hole'];
let boulderRestaurants = ['River and Woods', 'Frasca Food and Wine', 'Izakaya Amu', 'The Post Chicken and Beer', 'Avanti F & B', 'Oak at Fourteenth'];
let fortCollinsRestaurants = ['Smokin Fins', 'Bann Thai', "Canino's Itallian Restaurant", 'Snooze', "Lucile's", 'Jax Fish House & Oyster Bar'];
let lovelandRestaurants = ['Arte Pizzaria', "Blocky's Eatery", "Nordy's Bar-B-Que & Grill", 'Betta Bumbo', 'Bent Fork The Grill', 'Wapiti Colorado Pub'];
let winterParkRestaurants = ["Carrie's Winter Park Cafe", 'Viet-Nomz', "Antonella's Pizzeria", 'Bosphorous Turkish Cuisine', 'Winter Park Fish Company', 'The Wine Room on Park Ave'];
let glenwoodSpringsRestaurants = ['Chomps Deli', "Russo's Pizza & Wings", 'Riviera Scratch Kitchen', 'Slope & Hatch', 'Sweet Coloradough', 'The Pullman'];

// List of enertainment activities 
    // Dependant on location
let denverActivities = ['in Larimer Square', 'at a concert at Red Rocks Amphitheatre', 'hiking at Red Rocks Park', 'playing tennis at Washington Park', 'shopping on 16th Street Mall', 'at the Denver Zoo'];
let vailActivities = ['walking around Betty Ford Alpine Gardens', 'hiking at Booth Falls Trail', 'skiing at Vail Ski Resort', 'biking and exploring the Vail Pass Bike Tour area', 'jeeping at Upper Piney Lake', 'horse-back riding at Vail Stables'];
let coloradoSpringsActivities = ['rock climbing at Garden of the Gods', 'on a Jeep Tour through the Garden of the Gods foothills', 'at the observatory on Pikes Peak', 'on a Zipline Tour in Seven Falls', 'at the Cheyenne Mountain Zoo', 'at the National Museum of World War II Aviation'];
let boulderActivities = ['hiking the Boulder Falls Trail', 'on a brewery tour at Upslope Brewing', 'tubing down the Bould Creek', 'shopping on Pearl Street', 'tubing down the Eldora Mounatin Resort', 'at the Musueam of Natural History'];
let fortCollinsActivities = ['boating at Horsetooth Lake' , 'at the Musuem of Arts and Cultures', 'Mountain Whitewater Rafting on the Poudre River', 'on a Trolley Tour around downtown Fort Collins', 'on a Beer & Bike tour to local breweries', 'hiking the Emmaline Lake Trail'];
let lovelandActivities = ['fishing at at Carter Lake Reservoir', 'on a Tour of the New Belgium Brewery', 'walking around the Benson Park Sculpture Garden', "Mountain Biking at Devil's Backbone Trail", 'on an art tour at the Loveland Gallery', 'taking a Wine Tour of Sweet Hart Winery'];
let winterParkActivities = ['skiing at Winter Park Resort', "testing your luck at the Amaze'n Mazes", 'off-roading with Grand Adventures', 'Mountain Biking at the Trestle Bike Park', 'taking a Hot Air-Balloon Tour', 'visiting the Cozens Ranch House Museum'];
let glenwoodSpringsActivities = ['swimming at Glenwood Hot Springs Pool', 'at Glenwood Caverns Adventure Park', 'taking a Caving Tour at Glenwood Caverns', 'relaxing at the Spa of the Rockies', 'ATVing with the Glenwood Adventure Company', 'hiking up to Hanging Lake and going swimming'];

// Function to make a random choice given an array
function chooseAtRandom(anyArray) {
    return anyArray[Math.floor(Math.random() * anyArray.length)];
}

// Function to generate a day-trip in Colorado!
function generateTrip() {

    let pickedTravel;
    let pickedDesitnation;
    let pickedRestaurant;
    let pickedActivity;

    let changeTravel;
    while (changeTravel !== 'YES') {
        pickedTravel = chooseAtRandom(travelType);
        alert(`You will ${pickedTravel} to your destination.`);
        changeTravel = prompt("Type 'YES' to confirm the selection and continue to your destination.");
    }
    let changeDestination;
    while (changeDestination !== "YES") {
        pickedDesitnation = chooseAtRandom(destination);
        alert(`Your destination will be ${pickedDesitnation}!`);
        changeDestination = prompt("Type 'YES' to confirm the selection and continue to your restraunt.")
    }
    
    let changeRestaurant;
    while (changeRestaurant !== "YES") { 
        switch(pickedDesitnation) {
            case "Denver":
                pickedRestaurant = chooseAtRandom(denverRestaurants);
                break;
            case "Vail":
                pickedRestaurant = chooseAtRandom(vailRestaurants);
                break;
            case "Colorado Springs":
                pickedRestaurant = chooseAtRandom(coloradoSpringsRestaurants);
                break;
            case "Boulder":
                pickedRestaurant = chooseAtRandom(boulderRestaurants);
                break;
            case "Fort Collins":
                pickedRestaurant = chooseAtRandom(fortCollinsRestaurants);
                break;
            case "Loveland":
                pickedRestaurant = chooseAtRandom(lovelandRestaurants);
                break;
            case "Winter Park":
                pickedRestaurant = chooseAtRandom(winterParkRestaurants);
                break;
            case "Glenwood Springs":
                pickedRestaurant = chooseAtRandom(glenwoodSpringsRestaurants);
                break;
        }
        alert(`You will eat at ${pickedRestaurant} in ${pickedDesitnation}!`);
        changeRestaurant = prompt("Type 'YES' to confirm your selection and continue to your form of entertainment.")
    }
    
    let changeActivity;
    while (changeActivity !== "YES") {
        switch(pickedDesitnation) {
            case "Denver":
                pickedActivity = chooseAtRandom(denverActivities);
                break;
            case "Vail":
                pickedActivity = chooseAtRandom(vailActivities);
                break;
            case "Colorado Springs":
                pickedActivity = chooseAtRandom(coloradoSpringsActivities);
                break;
            case "Boulder":
                pickedActivity = chooseAtRandom(boulderActivities);
                break;
            case "Fort Collins":
                pickedActivity = chooseAtRandom(fortCollinsActivities);
                break;
            case "Loveland":
                pickedActivity = chooseAtRandom(lovelandActivities);
                break;
            case "Winter Park":
                pickedActivity = chooseAtRandom(winterParkActivities);
                break;
            case "Glenwood Springs":
                pickedActivity = chooseAtRandom(glenwoodSpringsActivities);
                break;
        }
        alert(`You will be spending the day ${pickedActivity}!`);
        changeActivity = prompt("Type 'YES' to confirm your selection and see you results for your planned trip.")
    }
    console.log(`A day trip in Colorado just for you! You should ${pickedTravel} to ${pickedDesitnation} to eat at ${pickedRestaurant} and spending the day ${pickedActivity}!`);
    alert(`A day trip in Colorado just for you! You should ${pickedTravel} to ${pickedDesitnation} to eat at ${pickedRestaurant} and spending the day ${pickedActivity}!`);
}

generateTrip();