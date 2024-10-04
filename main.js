/* 

Welcome
             to 
                    J's

    (Very specific)
    
 /$$$$$$$                      /$$                                             /$$              
| $$__  $$                    | $$                                            | $$              
| $$  \ $$  /$$$$$$  /$$$$$$$ | $$   /$$        /$$$$$$  /$$   /$$  /$$$$$$  /$$$$$$    /$$$$$$ 
| $$  | $$ |____  $$| $$__  $$| $$  /$$/       /$$__  $$| $$  | $$ /$$__  $$|_  $$_/   /$$__  $$
| $$  | $$  /$$$$$$$| $$  \ $$| $$$$$$/       | $$  \ $$| $$  | $$| $$  \ $$  | $$    | $$$$$$$$
| $$  | $$ /$$__  $$| $$  | $$| $$_  $$       | $$  | $$| $$  | $$| $$  | $$  | $$ /$$| $$_____/
| $$$$$$$/|  $$$$$$$| $$  | $$| $$ \  $$      |  $$$$$$$|  $$$$$$/|  $$$$$$/  |  $$$$/|  $$$$$$$
|_______/  \_______/|__/  |__/|__/  \__/       \____  $$ \______/  \______/    \___/   \_______/
                                                    | $$                                        
                                                    | $$                                        
                                                    |__/                                       

                       _____                           _             
                      / ____|                         | |            
                     | |  __  ___ _ __   ___ _ __ __ _| |_ ___  _ __ 
                     | | |_ |/ _ \ '_ \ / _ \ '__/ _` | __/ _ \| '__|
                     | |__| |  __/ | | |  __/ | | (_| | || (_) | |   
                      \_____|\___|_| |_|\___|_|  \__,_|\__\___/|_|   

*/
                      
// vvv ------------------  Please scroll to the bottom to view the instructions to use the generator.  -------------------- vvv                   


// Generate a random acceptance message
const randomAcceptanceMessage = () => {
    let am;
    const acceptanceMessages = ['Got it!', 'Good choice!', 'Really?', 'As you wish.', 'Why?', 'Alright.', 'Makes sense.']
    am = acceptanceMessages[Math.floor(Math.random() * 7)]
    return am;
}

// Generate a random dank level
const randomDankLevel = () => {
    let dl;
    const dankLevels = ['dank', 'kinda alright', 'a tiny bit dank', 'the dankest', 'based', 'sigma', 'meh', 'weak', 'cool', 'ANALOG HORROR']
    dl = dankLevels[Math.floor(Math.random() * 10)]
    return dl;
}

// Generate a random Vine quote
const randomVineQuote = () => {
    let vq;
    const vineQuotes = ['I said whoever threw that paper, YA MOMS A HOE!', 'Hurricaine Katrina? More like Hurricaine Tortilllaaa', 'Um, I never went to oovoo javer', 'What\'s 9 + 10? 21. You stupid.', 'Road work ahead? Yeah, I sure hope it does.', 'ADAM!', 'I thought you were bae... turns out you\'re just fam...', 'Look at all those CHICKENS', 'I\'m in me mum\'s car, broom broom', 'FR E SH A VOCA DO', 'WHAT ARE THOOOOSE!!', 'It\'s an avocado... thanksssss']
    vq = vineQuotes[Math.floor(Math.random() * 12)]
    return vq;
}                                      

// Generate a random Spongebob quote
const randomSpongebobQuote = () => {
    let sq;
    const spongebobQuotes = ['Where\'s the leak ma\'am?', 'Liar, Liar, Plants for hire.', 'Goodbye everyone, I\'ll remember you all in therapy.', 'He cries you a sweater of tears, and you kill him...', 'Hey pal, you just blow in from stupid town?', 'Oh these pies? They weren\'t homemade. They were made in a factory. A bomb factory. They\'re bombs.', 'DON\'T TOUCH ME, I\'M STERILE', 'FIRMLY GRASP IT!', 'Big. Meaty. CLAWS!', 'Sweet, sweet chocolate. I always HATED IT.']
    sq = spongebobQuotes[Math.floor(Math.random() * 10)]
    return sq;
}

// Generate a random Other quote
const randomOtherQuote = () => {
    let oq;
    const otherQuotes = ['They asked me how well I understood theoretical physics. I said I had a theoretical degree in physics. They said welcome aboard.', 'Patrolling the Mojave almost makes you wish for a nuclear winter.', 'I used to be an adventurer, like you. Then I took an arrow in the knee.', 'Hey you, you\'re finally awake.', 'Down at the end of the hall is BALL storage. For jocks who like BALLS, like RICHIE MARCUS. Do you hear me, Betsy? RICHIE likes BALLS.', 'YEAHHHHH! WHO WON THE LOTTERY?? I DID!!', 'Pssst, I know who you are... Hail Sithis']
    oq = otherQuotes[Math.floor(Math.random() * 7)]
    return oq;
}

// Generate quote depending on selection of predefined choices
const generateDankQuote = selection => {
    let message = randomAcceptanceMessage()
    let dankness = randomDankLevel()
    let quote
    if (dankness === 'ANALOG HORROR') {
        console.log(`You chose: @#%^$#!!@$#%^#
            THIS IS NOT RANDOM.
            THIS WAS SUPPOSED TO FIND YOU.
            REMOVE THE BUGS.
            PEEL OFF YOUR SKIN. PEEL OFF YOUR SKIN. PEEL OFF YOUR SKIN. PEEL OFF YOUR SKIN. PEEL OFF YOUR SKIN. 
            PEELOFFYOUR SKIN. P#E2.OFF.7U3R.SK/N.P3ELOFF34W2SKIY
            /~~~~~@#$@#!!#$()_(**(_))(*)
            /////////////////////////#<::;:::~~/////`)
    } else if (selection.toLowerCase() === 'vine') {
        quote = randomVineQuote()
        console.log(`You chose: ${selection}

${message}

Dank level: ${dankness}

Result: ${quote}`)
    } else if (selection.toLowerCase() === 'spongebob') {
        quote = randomSpongebobQuote()
        console.log(`You chose: ${selection}

${message}

Dank level: ${dankness}

Result: ${quote}`)
    } else if (selection.toLowerCase() === 'other') {
        quote = randomOtherQuote()
        console.log(`You chose: ${selection}

${message}

Dank level: ${dankness}

Result: ${quote}`)
    } else {
        console.log('Selection not recognized. Please choose one of the available options.')
    }
}

// Setup a feature for users to suggest quotes and record the suggestions
const suggestionList = []
const suggestionBox = suggestion => {
    if (typeof suggestion !== 'string' || suggestion === '') {
        console.log('Invalid entry; Please submit your suggestion using the proper format.')
    } else {
        suggestionList.push(suggestion.toLowerCase())
        console.log('Your suggestion has been recorded and will be reviewed. Thank you for submitting!')
    }
}

// Remove duplicate suggestions and view the suggestion list
const viewSuggestionList = () => {
    let sanitizedList = []
    suggestionList.forEach(suggestion => {
        if (!sanitizedList.includes(suggestion)) {
            sanitizedList.push(suggestion)
        }
    })
    console.log(sanitizedList)
}

// <<< ------------------------------------------------------ Use Below This Line ------------------------------------------------------------->>>

// This program is a random quote generator which generates quotes based on three provided options.
// When used correctly, the program displays an acceptance message, assigns a level of dankness, and outputs the quote to the console!

/* Below are the three options that quotes can be generated for:
    'Vine' - generates a random vine quote
    'Spongebob' - generates a random Spongebob quote
    'Other' - generates a random quote that only cool people can recognize ;)
Note: the generator only accepts strings, so you will need to wrap your desired selection in single ('') or double quotes (""). Feel free to copy your desired selection above and paste it into the generator.
-- There is also a quote for a very special, very specific group of people. You know who you are. :)
*/
// Example of correct use: generateDankQuote('Spongebob') 

generateDankQuote()

// If you have a suggestion for a dank quote, please provide it in the Suggestion Box below
// Similar to the generator, the suggestion box only accepts strings so you will need to wrap your desired suggestion in single ('') or double quotes ("").

suggestionBox()

// If you would like to view the suggestion list, uncomment the line of code below (delete the two back slashes ` // ` at the beginning) and run it.

// viewSuggestionList()