const quizData = [
  // A. Cartoon Network
  {
    category: "Ben 10",
    question: "What is the name of Ben Tennyson's alien-transforming device?",
    options: ["Ultimatrix", "Proto-Tool", "Omnitrix", "Power Watch"],
    correctAnswer: "Omnitrix"
  },
  {
    category: "Ben 10: Alien Force",
    question: "What is the name of Ben's cousin?",
    options: ["Julie", "Gwen", "Kai", "Charmcaster"],
    correctAnswer: "Gwen"
  },
  {
    category: "Dexter's Laboratory",
    question: "What does Dexter secretly have inside his house?",
    options: ["A spaceship", "A robot factory", "A time machine", "A laboratory"],
    correctAnswer: "A laboratory"
  },
  {
    category: "Courage the Cowardly Dog",
    question: "Where does Courage live with Muriel and Eustace?",
    options: ["Nowhere", "Townsville", "Elmore", "Bedrock"],
    correctAnswer: "Nowhere"
  },
  {
    category: "The Powerpuff Girls",
    question: "Who created the Powerpuff Girls?",
    options: ["Dexter", "Mojo Jojo", "Professor Utonium", "Professor Membrane"],
    correctAnswer: "Professor Utonium"
  },
  {
    category: "Ed, Edd n Eddy",
    question: "What do the three Eds frequently try to collect?",
    options: ["Chocolate bars", "Jawbreakers", "Coins", "Comic books"],
    correctAnswer: "Jawbreakers"
  },
  {
    category: "Johnny Bravo",
    question: "What is Johnny Bravo famous for?",
    options: ["His inventions", "His magic powers", "His cooking", "His muscular build and hairstyle"],
    correctAnswer: "His muscular build and hairstyle"
  },
  {
    category: "Codename: Kids Next Door",
    question: "What is the secret organization in the show called?",
    options: ["Junior Force", "Kids Next Door", "Secret Squad", "Kid Commandos"],
    correctAnswer: "Kids Next Door"
  },
  {
    category: "Foster's Home for Imaginary Friends",
    question: "Who is Mac's imaginary friend?",
    options: ["Wilt", "Eduardo", "Coco", "Bloo"],
    correctAnswer: "Bloo"
  },
  {
    category: "The Grim Adventures of Billy & Mandy",
    question: "Who is forced to become Billy and Mandy's friend?",
    options: ["Grim", "Hoss Delgado", "Irwin", "Dracula"],
    correctAnswer: "Grim"
  },
  {
    category: "Camp Lazlo",
    question: "What kind of animal is Lazlo?",
    options: ["Elephant", "Bear", "Monkey", "Penguin"],
    correctAnswer: "Monkey"
  },
  {
    category: "Chowder",
    question: "What is Chowder's profession goal?",
    options: ["Doctor", "Chef", "Pilot", "Detective"],
    correctAnswer: "Chef"
  },
  {
    category: "Adventure Time",
    question: "What is the name of Finn's best friend?",
    options: ["BMO", "Marceline", "Ice King", "Jake"],
    correctAnswer: "Jake"
  },
  {
    category: "Regular Show",
    question: "What are the two main characters who work at the park?",
    options: ["Finn and Jake", "Mordecai and Rigby", "Billy and Mandy", "Gumball and Darwin"],
    correctAnswer: "Mordecai and Rigby"
  },
  {
    category: "Generator Rex",
    question: "What is Rex's special ability?",
    options: ["Controlling fire", "Reading minds", "Creating machines from his body", "Time travel"],
    correctAnswer: "Creating machines from his body"
  },
  {
    category: "The Amazing World of Gumball",
    question: "What kind of animal is Gumball?",
    options: ["Cat", "Dog", "Rabbit", "Mouse"],
    correctAnswer: "Cat"
  },
  {
    category: "Samurai Jack",
    question: "Who sends Jack into the future?",
    options: ["Ogre", "The Guardian", "Scaramouche", "Aku"],
    correctAnswer: "Aku"
  },
  {
    category: "Dragon Ball Z",
    question: "What is Goku's Saiyan birth name?",
    options: ["Vegeta", "Kakarot", "Broly", "Raditz"],
    correctAnswer: "Kakarot"
  },
  {
    category: "Pokémon",
    question: "Which Pokémon is Ash's first partner?",
    options: ["Charizard", "Bulbasaur", "Pikachu", "Squirtle"],
    correctAnswer: "Pikachu"
  },
  {
    category: "Beyblade",
    question: "What is the name of Tyson's famous Beyblade?",
    options: ["Dranzer", "Draciel", "Driger", "Dragoon"],
    correctAnswer: "Dragoon"
  },
  {
    category: "Transformers: Animated",
    question: "What type of vehicle does Optimus Prime transform into?",
    options: ["Sports car", "Fire truck", "Helicopter", "Motorcycle"],
    correctAnswer: "Fire truck"
  },
  {
    category: "Scooby-Doo",
    question: "What is the name of Scooby-Doo's best human friend?",
    options: ["Fred", "Velma", "Shaggy", "Daphne"],
    correctAnswer: "Shaggy"
  },
  {
    category: "Tom and Jerry",
    question: "Which character is the mouse?",
    options: ["Jerry", "Tom", "Spike", "Tyke"],
    correctAnswer: "Jerry"
  },
  {
    category: "Looney Tunes",
    question: "Which character is famous for saying 'What's up, Doc?'",
    options: ["Daffy Duck", "Tweety", "Sylvester", "Bugs Bunny"],
    correctAnswer: "Bugs Bunny"
  },
  {
    category: "The Flintstones",
    question: "Where does the Flintstones family live?",
    options: ["Elmore", "Bedrock", "Townsville", "Springfield"],
    correctAnswer: "Bedrock"
  },
  {
    category: "The Jetsons",
    question: "What is the name of George Jetson's wife?",
    options: ["Judy", "Rosie", "Jane", "Lucy"],
    correctAnswer: "Jane"
  },

  // B. Nickelodeon
  {
    category: "SpongeBob SquarePants",
    question: "Where does SpongeBob work?",
    options: ["Chum Bucket", "Salty Spitoon", "Weenie Hut", "Krusty Krab"],
    correctAnswer: "Krusty Krab"
  },
  {
    category: "The Fairly OddParents",
    question: "What are the names of Timmy Turner's fairy godparents?",
    options: ["Cosmo and Wanda", "Tom and Jerry", "Chip and Dale", "Mickey and Minnie"],
    correctAnswer: "Cosmo and Wanda"
  },
  {
    category: "Jimmy Neutron",
    question: "What is Jimmy Neutron known for?",
    options: ["His singing", "His intelligence and inventions", "His magic", "His athletic skills"],
    correctAnswer: "His intelligence and inventions"
  },
  {
    category: "Danny Phantom",
    question: "How does Danny gain ghost powers?",
    options: ["A magic spell", "A mysterious potion", "A ghost portal accident", "An alien machine"],
    correctAnswer: "A ghost portal accident"
  },
  {
    category: "Avatar: The Last Airbender",
    question: "Which element is Aang originally born to bend?",
    options: ["Water", "Fire", "Earth", "Air"],
    correctAnswer: "Air"
  },
  {
    category: "The Legend of Korra",
    question: "Who is the Avatar at the beginning of the series?",
    options: ["Aang", "Korra", "Roku", "Kyoshi"],
    correctAnswer: "Korra"
  },
  {
    category: "CatDog",
    question: "What makes CatDog unusual?",
    options: ["They can fly", "They are invisible", "They are one body with two heads", "They can talk to humans"],
    correctAnswer: "They are one body with two heads"
  },
  {
    category: "The Angry Beavers",
    question: "What are the names of the two beaver brothers?",
    options: ["Norbert and Daggett", "Tom and Jerry", "Ed and Eddy", "Chip and Dale"],
    correctAnswer: "Norbert and Daggett"
  },
  {
    category: "Rugrats",
    question: "What is the name of the adventurous baby in Rugrats?",
    options: ["Chuckie Finster", "Phil DeVille", "Dil Pickles", "Tommy Pickles"],
    correctAnswer: "Tommy Pickles"
  },
  {
    category: "Hey Arnold!",
    question: "What is Arnold's most recognizable physical feature?",
    options: ["Pointed ears", "Football-shaped head", "Green hair", "Large nose"],
    correctAnswer: "Football-shaped head"
  },
  {
    category: "The Penguins of Madagascar",
    question: "What is the name of the penguin leader?",
    options: ["Kowalski", "Rico", "Skipper", "Private"],
    correctAnswer: "Skipper"
  },
  {
    category: "Kung Fu Panda: Legends of Awesomeness",
    question: "What is Po's title?",
    options: ["Jade Warrior", "Golden Master", "Kung Fu King", "Dragon Warrior"],
    correctAnswer: "Dragon Warrior"
  },
  {
    category: "The Mighty B!",
    question: "What is the real name of the Mighty B?",
    options: ["Bessie Higgenbottom", "Molly McGee", "Jenny Wakeman", "Sandy Cheeks"],
    correctAnswer: "Bessie Higgenbottom"
  },
  {
    category: "Tak and the Power of Juju",
    question: "What is Tak's special connection?",
    options: ["Alien technology", "Juju magic", "Super strength", "Time travel"],
    correctAnswer: "Juju magic"
  },
  {
    category: "Fanboy & Chum Chum",
    question: "What do Fanboy and Chum Chum love wearing?",
    options: ["School uniforms", "Pirate outfits", "Superhero costumes", "Space suits"],
    correctAnswer: "Superhero costumes"
  },
  {
    category: "Back at the Barnyard",
    question: "What is the name of the main cow?",
    options: ["Ben", "Bessie", "Daisy", "Otis"],
    correctAnswer: "Otis"
  },
  {
    category: "Planet Sheen",
    question: "Who is the main character of Planet Sheen?",
    options: ["Jimmy Neutron", "Sheen Estevez", "Carl Wheezer", "Cindy Vortex"],
    correctAnswer: "Sheen Estevez"
  },
  {
    category: "T.U.F.F. Puppy",
    question: "What kind of animal is Dudley Puppy?",
    options: ["Cat", "Rabbit", "Dog", "Fox"],
    correctAnswer: "Dog"
  },
  {
    category: "Teenage Mutant Ninja Turtles",
    question: "Which turtle uses two katana swords?",
    options: ["Leonardo", "Raphael", "Donatello", "Michelangelo"],
    correctAnswer: "Leonardo"
  },

  // C. Jetix
  {
    category: "Power Rangers",
    question: "What color is the original Mighty Morphin Red Ranger?",
    options: ["Blue", "Black", "Green", "Red"],
    correctAnswer: "Red"
  },
  {
    category: "Digimon",
    question: "What is the name of Tai's Digimon partner?",
    options: ["Gabumon", "Agumon", "Patamon", "Tentomon"],
    correctAnswer: "Agumon"
  },
  {
    category: "Yin Yang Yo!",
    question: "What are Yin and Yang?",
    options: ["Cat siblings", "Twin dragons", "Rabbit siblings", "Robot friends"],
    correctAnswer: "Rabbit siblings"
  },
  {
    category: "W.I.T.C.H.",
    question: "How many main Guardians of the Veil are there?",
    options: ["Three", "Four", "Six", "Five"],
    correctAnswer: "Five"
  },
  {
    category: "Pucca",
    question: "Who does Pucca have a crush on?",
    options: ["Garu", "Tobe", "Abyo", "Ching"],
    correctAnswer: "Garu"
  },
  {
    category: "Oban Star-Racers",
    question: "What kind of competition is central to the series?",
    options: ["Martial arts", "Intergalactic racing", "Cooking", "Football"],
    correctAnswer: "Intergalactic racing"
  },
  {
    category: "Martin Mystery",
    question: "What kind of cases does Martin investigate?",
    options: ["Bank robberies", "Sports events", "Paranormal mysteries", "Cooking mysteries"],
    correctAnswer: "Paranormal mysteries"
  },
  {
    category: "Totally Spies!",
    question: "What is the name of the spy organization?",
    options: ["S.H.I.E.L.D.", "KND", "T.U.F.F.", "WOOHP"],
    correctAnswer: "WOOHP"
  },
  {
    category: "Kid vs. Kat",
    question: "What is Kat secretly?",
    options: ["A robot cat", "An alien cat", "A magical cat", "A normal house cat"],
    correctAnswer: "An alien cat"
  },
  {
    category: "Super Robot Monkey Team Hyperforce Go!",
    question: "Who leads the Hyperforce team?",
    options: ["Antauri", "Sprx", "Chiro", "Gibson"],
    correctAnswer: "Chiro"
  },
  {
    category: "A.T.O.M.",
    question: "What does A.T.O.M. stand for?",
    options: ["Alpha Teens on Machines", "Advanced Team of Mutants", "Action Team of Monsters", "Alpha Team of Missions"],
    correctAnswer: "Alpha Teens on Machines"
  },
  {
    category: "Get Ed",
    question: "What is Ed's main occupation?",
    options: ["Doctor", "Teacher", "Detective", "Courier"],
    correctAnswer: "Courier"
  },
  {
    category: "Shinzo",
    question: "What is the main character's name?",
    options: ["Sago", "Mushra", "Kutal", "Yakumo"],
    correctAnswer: "Mushra"
  },
  {
    category: "Medabots",
    question: "What are Medabots?",
    options: ["Magical creatures", "Space ships", "Robotic battle companions", "Talking animals"],
    correctAnswer: "Robotic battle companions"
  },
  {
    category: "Sonic X",
    question: "What animal is Sonic?",
    options: ["Fox", "Wolf", "Rabbit", "Hedgehog"],
    correctAnswer: "Hedgehog"
  },
  {
    category: "Jackie Chan Adventures",
    question: "What does Jackie often search for?",
    options: ["Magical talismans", "Dragon eggs", "Lost planets", "Ancient coins"],
    correctAnswer: "Magical talismans"
  },
  {
    category: "Spider-Man",
    question: "What is Spider-Man's real name?",
    options: ["Bruce Wayne", "Peter Parker", "Tony Stark", "Clark Kent"],
    correctAnswer: "Peter Parker"
  },
  {
    category: "The Tick",
    question: "What is the Tick?",
    options: ["A villain", "A robot", "A superhero", "An alien scientist"],
    correctAnswer: "A superhero"
  },

  // D. Disney Channel
  {
    category: "Phineas and Ferb",
    question: "What is the name of Phineas and Ferb's pet platypus?",
    options: ["Bucky", "Baljeet", "Norm", "Perry"],
    correctAnswer: "Perry"
  },
  {
    category: "Kim Possible",
    question: "What is Kim Possible's usual catchphrase?",
    options: ["Cowabunga!", "What's the sitch?", "To infinity!", "Let's roll!"],
    correctAnswer: "What's the sitch?"
  },
  {
    category: "American Dragon: Jake Long",
    question: "What can Jake transform into?",
    options: ["A wolf", "A phoenix", "A dragon", "A tiger"],
    correctAnswer: "A dragon"
  },
  {
    category: "Lilo & Stitch: The Series",
    question: "What number experiment is Stitch?",
    options: ["626", "625", "627", "101"],
    correctAnswer: "626"
  },
  {
    category: "The Replacements",
    question: "What do Riley and Todd use to replace people?",
    options: ["A magic wand", "A computer game", "A time machine", "A special phone"],
    correctAnswer: "A special phone"
  },
  {
    category: "The Emperor's New School",
    question: "What is the name of the young emperor?",
    options: ["Pacha", "Kuzco", "Kronk", "Yzma"],
    correctAnswer: "Kuzco"
  },
  {
    category: "Brandy & Mr. Whiskers",
    question: "What kind of animal is Mr. Whiskers?",
    options: ["Dog", "Cat", "Rabbit", "Monkey"],
    correctAnswer: "Rabbit"
  },
  {
    category: "Dave the Barbarian",
    question: "What is Dave's role?",
    options: ["A wizard", "A knight", "A pirate", "A barbarian prince"],
    correctAnswer: "A barbarian prince"
  },
  {
    category: "The Buzz on Maggie",
    question: "What kind of insect is Maggie?",
    options: ["Fly", "Bee", "Butterfly", "Ant"],
    correctAnswer: "Fly"
  },
  {
    category: "Mickey Mouse Clubhouse",
    question: "What is the name of Mickey's dog?",
    options: ["Goofy", "Pluto", "Max", "Figaro"],
    correctAnswer: "Pluto"
  },
  {
    category: "Handy Manny",
    question: "What is Manny's profession?",
    options: ["Doctor", "Chef", "Handyman", "Pilot"],
    correctAnswer: "Handyman"
  },
  {
    category: "Special Agent Oso",
    question: "What kind of animal is Oso?",
    options: ["Polar bear", "Koala", "Dog", "Panda bear"],
    correctAnswer: "Panda bear"
  },
  {
    category: "Art Attack",
    question: "What is the show mainly about?",
    options: ["Science experiments", "Arts and crafts", "Sports", "Cooking"],
    correctAnswer: "Arts and crafts"
  },
  {
    category: "The Suite Life of Zack & Cody",
    question: "Where do Zack and Cody live?",
    options: ["A school", "A farm", "A hotel", "A castle"],
    correctAnswer: "A hotel"
  },
  {
    category: "Hannah Montana",
    question: "What is Hannah Montana's real name?",
    options: ["Miley Stewart", "Lilly Truscott", "Oliver Oken", "Robby Ray"],
    correctAnswer: "Miley Stewart"
  },
  {
    category: "Wizards of Waverly Place",
    question: "What magical ability does the Russo family have?",
    options: ["They can fly", "They can become invisible", "They control animals", "They are wizards"],
    correctAnswer: "They are wizards"
  },
  {
    category: "Kick Buttowski",
    question: "What is Clarence 'Kick' Buttowski passionate about?",
    options: ["Magic tricks", "Extreme sports and stunts", "Cooking", "Music"],
    correctAnswer: "Extreme sports and stunts"
  },
  {
    category: "Fish Hooks",
    question: "Where do the main characters live?",
    options: ["A river", "A swimming pool", "An aquarium", "The ocean"],
    correctAnswer: "An aquarium"
  },
  {
    category: "Gravity Falls",
    question: "Who are the twin main characters?",
    options: ["Stan and Ford", "Soos and Wendy", "Bill and Gideon", "Dipper and Mabel"],
    correctAnswer: "Dipper and Mabel"
  },
  {
    category: "Randy Cunningham: 9th Grade Ninja",
    question: "What is Randy's secret role?",
    options: ["Ninth Grade Ninja", "School principal", "Secret agent", "Alien hunter"],
    correctAnswer: "Ninth Grade Ninja"
  },

  // E. Boomerang
  {
    category: "The Tom and Jerry Show",
    question: "Which animal is usually chasing Jerry?",
    options: ["Spike", "Tom", "Tyke", "Butch"],
    correctAnswer: "Tom"
  },
  {
    category: "What's New, Scooby-Doo?",
    question: "What is the name of the group's van?",
    options: ["Scooby Mobile", "Ghost Chaser", "Mystery Machine", "Mystery Express"],
    correctAnswer: "Mystery Machine"
  },
  {
    category: "Popeye",
    question: "Which food gives Popeye extra strength?",
    options: ["Carrots", "Apples", "Bananas", "Spinach"],
    correctAnswer: "Spinach"
  },
  {
    category: "Baby Looney Tunes",
    question: "Which baby character is a small yellow bird?",
    options: ["Tweety", "Daffy", "Bugs", "Sylvester"],
    correctAnswer: "Tweety"
  },
  {
    category: "The Sylvester & Tweety Mysteries",
    question: "Who frequently tries to catch Tweety?",
    options: ["Bugs Bunny", "Sylvester", "Daffy Duck", "Yosemite Sam"],
    correctAnswer: "Sylvester"
  },
  {
    category: "The Pink Panther",
    question: "What color is the Pink Panther?",
    options: ["Blue", "Purple", "Pink", "Orange"],
    correctAnswer: "Pink"
  },
  {
    category: "The Garfield Show",
    question: "What food does Garfield love most?",
    options: ["Pizza", "Burgers", "Pasta", "Lasagna"],
    correctAnswer: "Lasagna"
  },
  {
    category: "The Yogi Bear Show",
    question: "What does Yogi Bear love stealing from visitors?",
    options: ["Hats", "Picnic baskets", "Shoes", "Bicycles"],
    correctAnswer: "Picnic baskets"
  },
  {
    category: "Top Cat",
    question: "What is Top Cat commonly called?",
    options: ["T.J.", "T.K.", "T.C.", "T.B."],
    correctAnswer: "T.C."
  },
  {
    category: "Mr. Bean: The Animated Series",
    question: "What is the name of Mr. Bean's teddy bear?",
    options: ["Teddy", "Bobby", "Charlie", "Benny"],
    correctAnswer: "Teddy"
  },
  {
    category: "The Addams Family",
    question: "What is the name of the family's disembodied hand?",
    options: ["It", "Handy", "Fingers", "Thing"],
    correctAnswer: "Thing"
  },
  {
    category: "Wacky Races",
    question: "Who is the famous villainous racer?",
    options: ["Muttley", "Dick Dastardly", "Yogi Bear", "Top Cat"],
    correctAnswer: "Dick Dastardly"
  },

  // F. Pogo
  {
    category: "Chhota Bheem",
    question: "Where does Chhota Bheem live?",
    options: ["Panchmari", "Gokuldham", "Dholakpur", "Vijaynagar"],
    correctAnswer: "Dholakpur"
  },
  {
    category: "Mighty Raju",
    question: "What is Raju's special ability?",
    options: ["Invisibility", "Magic spells", "Time travel", "Superpowers"],
    correctAnswer: "Superpowers"
  },
  {
    category: "Roll No. 21",
    question: "Which mythological character inspires Krishna in the series?",
    options: ["Lord Krishna", "Lord Rama", "Lord Hanuman", "Lord Shiva"],
    correctAnswer: "Lord Krishna"
  },
  {
    category: "Takeshi's Castle",
    question: "What type of show is Takeshi's Castle?",
    options: ["Cooking show", "Game show", "Cartoon", "Drama series"],
    correctAnswer: "Game show"
  },
  {
    category: "MAD",
    question: "What is MAD mainly known for?",
    options: ["Wildlife documentaries", "Cooking lessons", "Art, comedy and creative segments", "Sports news"],
    correctAnswer: "Art, comedy and creative segments"
  },
  {
    category: "Little Singham",
    question: "What is Little Singham's profession?",
    options: ["Doctor", "Pilot", "Teacher", "Police officer"],
    correctAnswer: "Police officer"
  },
  {
    category: "Krishna Balram",
    question: "Who is Krishna's brother?",
    options: ["Arjun", "Balram", "Karna", "Abhimanyu"],
    correctAnswer: "Balram"
  },
  {
    category: "Bandbudh Aur Budbak",
    question: "What are Bandbudh and Budbak?",
    options: ["Superheroes", "Detectives", "School friends", "Robots"],
    correctAnswer: "School friends"
  },
  {
    category: "Chorr Police",
    question: "What are the two opposing roles in the show?",
    options: ["Thief and police", "Teacher and student", "King and soldier", "Doctor and patient"],
    correctAnswer: "Thief and police"
  },
  {
    category: "Titoo",
    question: "What is Titoo known for?",
    options: ["His magical powers", "His flying skills", "His cooking", "His clever and mischievous nature"],
    correctAnswer: "His clever and mischievous nature"
  },
  {
    category: "Keymon Ache",
    question: "What is Keymon?",
    options: ["A robot dog", "A magical school bag", "An alien watch", "A talking bicycle"],
    correctAnswer: "A magical school bag"
  },
  {
    category: "Gattu Battu",
    question: "What are Gattu and Battu known for?",
    options: ["Their space missions", "Their magic school", "Their detective adventures", "Their racing team"],
    correctAnswer: "Their detective adventures"
  },
  {
    category: "Super Bheem",
    question: "Who is Super Bheem?",
    options: ["Bheem's brother", "A robot", "A new villain", "A superhero version of Bheem"],
    correctAnswer: "A superhero version of Bheem"
  },
  {
    category: "Haddi Mera Buddy",
    question: "What kind of character is Haddi?",
    options: ["A skeleton", "A ghost", "A robot", "A monkey"],
    correctAnswer: "A skeleton"
  },

  // G. Hungama TV
  {
    category: "Shinchan",
    question: "What is Shinchan's full name?",
    options: ["Shinichi Kudo", "Shinnosuke Nohara", "Nobita Nobi", "Hiroshi Nohara"],
    correctAnswer: "Shinnosuke Nohara"
  },
  {
    category: "Doraemon",
    question: "Where does Doraemon keep his gadgets?",
    options: ["School bag", "Secret cupboard", "Four-dimensional pocket", "Time machine"],
    correctAnswer: "Four-dimensional pocket"
  },
  {
    category: "Ninja Hattori",
    question: "What is Hattori's full name?",
    options: ["Shinzo Hattori", "Kenichi Mitsuba", "Kemumaki", "Kanzo Hattori"],
    correctAnswer: "Kanzo Hattori"
  },
  {
    category: "Kiteretsu",
    question: "What is Kiteretsu famous for creating?",
    options: ["Inventions", "Magic spells", "Paintings", "Musical instruments"],
    correctAnswer: "Inventions"
  },
  {
    category: "Perman",
    question: "What does Perman use to transform into a superhero?",
    options: ["A magic ring", "A special mask and cape", "A watch", "A pair of glasses"],
    correctAnswer: "A special mask and cape"
  },
  {
    category: "Kochikame",
    question: "What is the main character's name?",
    options: ["Nobita Nobi", "Shinchan Nohara", "Kankichi Ryotsu", "Kenichi Mitsuba"],
    correctAnswer: "Kankichi Ryotsu"
  },
  {
    category: "Hagemaru",
    question: "What is Hagemaru particularly known for?",
    options: ["Being a great singer", "Being a superhero", "Being a scientist", "Being extremely frugal"],
    correctAnswer: "Being extremely frugal"
  },
  {
    category: "Lucky Man",
    question: "What gives Lucky Man his extraordinary luck?",
    options: ["Magic Ring", "Lucky Star", "Power Stone", "Golden Watch"],
    correctAnswer: "Lucky Star"
  },
  {
    category: "Chimpui",
    question: "Where does Chimpui come from?",
    options: ["The Moon", "Mars", "The planet Mal", "The future Earth"],
    correctAnswer: "The planet Mal"
  },
  {
    category: "Atashin'chi",
    question: "What is the series mainly about?",
    options: ["Everyday family life", "Space adventures", "Superheroes", "Detective mysteries"],
    correctAnswer: "Everyday family life"
  },
  {
    category: "Obocchama-kun",
    question: "What is Obocchama-kun known for?",
    options: ["Being a ninja", "Being a detective", "Being a robot", "Being a wealthy and eccentric child"],
    correctAnswer: "Being a wealthy and eccentric child"
  },

  // H. Disney XD
  {
    category: "I'm in the Band",
    question: "What is the name of the fictional band?",
    options: ["The Rockers", "Iron Weasel", "Power Beats", "Electric Five"],
    correctAnswer: "Iron Weasel"
  },
  {
    category: "Pair of Kings",
    question: "Who are the two main royal brothers?",
    options: ["Zack and Cody", "Phineas and Ferb", "Brady and Boomer", "Riley and Todd"],
    correctAnswer: "Brady and Boomer"
  },
  {
    category: "Zeke and Luther",
    question: "What sport are Zeke and Luther passionate about?",
    options: ["Football", "Basketball", "Surfing", "Skateboarding"],
    correctAnswer: "Skateboarding"
  },
  {
    category: "Slugterra",
    question: "What are Slugs used for?",
    options: ["Transforming into powerful creatures", "Building houses", "Healing people", "Travelling through time"],
    correctAnswer: "Transforming into powerful creatures"
  },
  {
    category: "Tron: Uprising",
    question: "Where does the story take place?",
    options: ["The planet Mars", "The digital world of the Grid", "A medieval kingdom", "An underwater city"],
    correctAnswer: "The digital world of the Grid"
  },
  {
    category: "Ultimate Spider-Man",
    question: "Who trains Spider-Man in the series?",
    options: ["Tony Stark", "Doctor Strange", "Nick Fury", "Captain America"],
    correctAnswer: "Nick Fury"
  },
  {
    category: "Avengers Assemble",
    question: "Which superhero leads the Avengers in the series?",
    options: ["Hulk", "Thor", "Hawkeye", "Iron Man"],
    correctAnswer: "Iron Man"
  },
  {
    category: "Lab Rats",
    question: "What special abilities do the main characters have?",
    options: ["Magical powers", "Bionic abilities", "Alien powers", "Animal transformations"],
    correctAnswer: "Bionic abilities"
  },

  // I. Other Popular Cartoons and Anime
  {
    category: "Oswald",
    question: "What kind of animal is Oswald?",
    options: ["Penguin", "Rabbit", "Octopus", "Elephant"],
    correctAnswer: "Octopus"
  },
  {
    category: "Noddy",
    question: "What is Noddy's vehicle?",
    options: ["A blue bus", "A bicycle", "A train", "A little red and yellow car"],
    correctAnswer: "A little red and yellow car"
  },
  {
    category: "Bob the Builder",
    question: "What is Bob's famous catchphrase?",
    options: ["Can we fix it?", "Let's do this!", "To the rescue!", "Ready for action!"],
    correctAnswer: "Can we fix it?"
  },
  {
    category: "Thomas & Friends",
    question: "What number is Thomas the Tank Engine?",
    options: ["2", "1", "3", "4"],
    correctAnswer: "1"
  },
  {
    category: "The Backyardigans",
    question: "What do the characters often use their imagination for?",
    options: ["Solving crimes", "Building robots", "Pretend adventures", "Cooking competitions"],
    correctAnswer: "Pretend adventures"
  },
  {
    category: "LazyTown",
    question: "Who encourages the children to be active?",
    options: ["Robbie Rotten", "Pixel", "Stingy", "Sportacus"],
    correctAnswer: "Sportacus"
  },
  {
    category: "Pingu",
    question: "What type of animal is Pingu?",
    options: ["Seal", "Penguin", "Polar bear", "Puffin"],
    correctAnswer: "Penguin"
  },
  {
    category: "Oggy and the Cockroaches",
    question: "How many main cockroaches trouble Oggy?",
    options: ["Two", "Four", "Three", "Five"],
    correctAnswer: "Three"
  },
  {
    category: "The Jungle Book",
    question: "What is the name of the human boy raised by wolves?",
    options: ["Mowgli", "Tarzan", "Baloo", "Bagheera"],
    correctAnswer: "Mowgli"
  },
  {
    category: "Little Krishna",
    question: "Which demon does young Krishna defeat in one famous story?",
    options: ["Ravana", "Kansa's elephant Kuvalayapida", "Mahishasura", "Putana"],
    correctAnswer: "Putana"
  },
  {
    category: "Motu Patlu",
    question: "Which food does Motu love?",
    options: ["Pizza", "Samosas", "Noodles", "Burgers"],
    correctAnswer: "Samosas"
  },
  {
    category: "Horrid Henry",
    question: "What is Henry's personality usually like?",
    options: ["Shy and quiet", "Very serious", "Mischievous", "Always sleepy"],
    correctAnswer: "Mischievous"
  },
  {
    category: "Shaun the Sheep",
    question: "What kind of animal is Shaun?",
    options: ["Goat", "Dog", "Cow", "Sheep"],
    correctAnswer: "Sheep"
  },
  {
    category: "The Magic School Bus",
    question: "Who is the teacher who takes students on adventures?",
    options: ["Ms. Frizzle", "Ms. Honey", "Miss Trunchbull", "Mrs. Puff"],
    correctAnswer: "Ms. Frizzle"
  },

  // Additional Cartoon Network Questions
  {
    category: "Ben 10: Ultimate Alien",
    question: "Which device allows Ben to evolve his aliens into their 'Ultimate' forms?",
    options: ["Omnitrix", "Ultimatrix", "Nemetrix", "Biomnitrix"],
    correctAnswer: "Ultimatrix"
  },
  {
    category: "Ben 10: Omniverse",
    question: "Who becomes Ben's new Plumber partner after Gwen and Kevin leave for college?",
    options: ["Max Tennyson", "Argit", "Rook Blonko", "Cooper"],
    correctAnswer: "Rook Blonko"
  },
  {
    category: "My Gym Partner's a Monkey",
    question: "Why was human student Adam Lyon transferred to Charles Darwin Middle School?",
    options: ["He wanted to study zookeeping", "He could talk to animals", "His parents worked at the zoo", "A spelling mistake changed his surname to 'Lion'"],
    correctAnswer: "A spelling mistake changed his surname to 'Lion'"
  },
  {
    category: "The Marvelous Misadventures of Flapjack",
    question: "What is the name of the talking whale who raised Flapjack?",
    options: ["Bubbie", "K'nuckles", "Peppermint Larry", "Pearl"],
    correctAnswer: "Bubbie"
  },
  {
    category: "Dexter's Laboratory",
    question: "What is the name of Dexter's older sister who constantly ruins his experiments?",
    options: ["Mandark", "Dee Dee", "Blossom", "Sarah"],
    correctAnswer: "Dee Dee"
  },
  {
    category: "The Powerpuff Girls",
    question: "Which special ingredient accidentally gave the Powerpuff Girls their superpowers?",
    options: ["Sugar", "Spice", "Chemical X", "Plutonium"],
    correctAnswer: "Chemical X"
  },
  {
    category: "Courage the Cowardly Dog",
    question: "What does Eustace Bagge frequently say while trying to scare Courage?",
    options: ["Get out of my chair!", "Where's my dinner?", "Bad dog!", "Stupid dog! You made me look bad!"],
    correctAnswer: "Stupid dog! You made me look bad!"
  },
  {
    category: "Dragon Ball Z",
    question: "How many Dragon Balls must be collected to summon the Eternal Dragon Shenron?",
    options: ["Five", "Seven", "Nine", "Ten"],
    correctAnswer: "Seven"
  },
  {
    category: "Pokémon",
    question: "Which criminal duo is constantly trying to steal Ash's Pikachu alongside Meowth?",
    options: ["Butch and Cassidy", "Brock and Misty", "Jessie and James", "Maxie and Archie"],
    correctAnswer: "Jessie and James"
  },
  {
    category: "Beyblade",
    question: "What is the name of Kai Hiwatari's Bit-Beast and Beyblade?",
    options: ["Dranzer", "Dragoon", "Driger", "Draciel"],
    correctAnswer: "Dranzer"
  },

  // Additional Nickelodeon Questions
  {
    category: "The Adventures of Jimmy Neutron",
    question: "What is the name of Jimmy Neutron's robotic dog?",
    options: ["Sparky", "Bolt", "Rex", "Goddard"],
    correctAnswer: "Goddard"
  },
  {
    category: "SpongeBob SquarePants",
    question: "Who is SpongeBob's best friend who lives under a rock?",
    options: ["Squidward Tentacles", "Patrick Star", "Mr. Krabs", "Plankton"],
    correctAnswer: "Patrick Star"
  },
  {
    category: "Avatar: The Last Airbender",
    question: "What is the name of Aang's flying bison?",
    options: ["Momo", "Naga", "Appa", "Pabu"],
    correctAnswer: "Appa"
  },
  {
    category: "Danny Phantom",
    question: "Who are Danny Fenton's two best friends?",
    options: ["Dash and Paulina", "Jazz and Vlad", "Cosmo and Wanda", "Sam and Tucker"],
    correctAnswer: "Sam and Tucker"
  },

  // Additional Jetix Questions
  {
    category: "Power Rangers",
    question: "In Power Rangers S.P.D., what is the name of the alien dog commander of the B-Squad?",
    options: ["Anubis 'Doggie' Cruger", "Zordon", "Tommy Oliver", "Alpha 5"],
    correctAnswer: "Anubis 'Doggie' Cruger"
  },
  {
    category: "Totally Spies!",
    question: "What are the names of the three main teenage spies?",
    options: ["Blossom, Bubbles, and Buttercup", "Sam, Clover, and Alex", "Will, Irma, and Taranee", "Mandy, Caitlin, and Dominique"],
    correctAnswer: "Sam, Clover, and Alex"
  },
  {
    category: "Jackie Chan Adventures",
    question: "What is Uncle's famous catchphrase when he has more to say?",
    options: ["Listen to me!", "Magic must defeat magic!", "One more thing!", "Watch out, Jackie!"],
    correctAnswer: "One more thing!"
  },
  {
    category: "Kid vs. Kat",
    question: "What is the name of the boy who knows Mr. Kat is actually an evil alien?",
    options: ["Dennis", "Millie", "Brad", "Coop Burtonburger"],
    correctAnswer: "Coop Burtonburger"
  },
  {
    category: "Phineas and Ferb",
    question: "Who is Perry the Platypus's nemesis?",
    options: ["Major Monogram", "Dr. Heinz Doofenshmirtz", "Candace Flynn", "Carl"],
    correctAnswer: "Dr. Heinz Doofenshmirtz"
  },
  {
    category: "Gravity Falls",
    question: "What is the name of Great Uncle Stan's tourist trap?",
    options: ["The Weirdness Museum", "Gravity Cabin", "The Mystery Shack", "Shack of Secrets"],
    correctAnswer: "The Mystery Shack"
  },
  {
    category: "Kick Buttowski",
    question: "Who is Kick Buttowski's best friend and wingman?",
    options: ["Gunther Magnuson", "Brad Buttowski", "Wade", "Kendall Perkins"],
    correctAnswer: "Gunther Magnuson"
  },
  {
    category: "Slugterra",
    question: "What is the name of Eli Shane's famous orange Infurnus slug?",
    options: ["Joules", "Chiller", "Banger", "Burpy"],
    correctAnswer: "Burpy"
  },
  {
    category: "Kim Possible",
    question: "What kind of naked rodent is Ron Stoppable's pet Rufus?",
    options: ["Hamster", "Naked mole-rat", "Guinea pig", "Ferret"],
    correctAnswer: "Naked mole-rat"
  },
  {
    category: "The Scooby-Doo Show",
    question: "Who is Scooby-Doo's feisty little nephew?",
    options: ["Scooby-Dum", "Yabba-Doo", "Scrappy-Doo", "Astro"],
    correctAnswer: "Scrappy-Doo"
  },
  {
    category: "Tom and Jerry",
    question: "What is the name of the tough bulldog who often protects Jerry?",
    options: ["Tyke", "Butch", "Nibbles", "Spike"],
    correctAnswer: "Spike"
  },
  {
    category: "Chhota Bheem",
    question: "Which sweet gives Chhota Bheem an instant boost of strength?",
    options: ["Tun Tun Mausi's Laddoos", "Jalebi", "Gulab Jamun", "Kheer"],
    correctAnswer: "Tun Tun Mausi's Laddoos"
  },
  {
    category: "Chhota Bheem",
    question: "Who is the main rival of Bheem in Dholakpur who has two sidekicks named Dholu and Bholu?",
    options: ["Jaggu", "Kalia", "Raju", "Chutki"],
    correctAnswer: "Kalia"
  },
  {
    category: "M.A.D.",
    question: "Who was the famous host of the Indian arts and crafts show M.A.D. on Pogo?",
    options: ["Neil Buchanan", "Gaurav", "Rob", "Javed"],
    correctAnswer: "Rob"
  },
  {
    category: "Takeshi's Castle",
    question: "Which famous Indian actor provided the hilarious Hindi commentary for Takeshi's Castle?",
    options: ["Boman Irani", "Arshad Warsi", "Johnny Lever", "Javed Jaffrey"],
    correctAnswer: "Javed Jaffrey"
  },
  {
    category: "Shinchan",
    question: "What is the name of Shinchan's fluffy white pet dog?",
    options: ["Buru Buru", "Shiro", "Hachi", "Pochi"],
    correctAnswer: "Shiro"
  },
  {
    category: "Doraemon",
    question: "What is Doraemon's absolute favorite food?",
    options: ["Ramen", "Mochi", "Doracakes (Dorayaki)", "Onigiri"],
    correctAnswer: "Doracakes (Dorayaki)"
  },
  {
    category: "Ninja Hattori",
    question: "Who is Hattori's rival from the Koga Ninja clan?",
    options: ["Kemumaki (Amara)", "Shishimaru", "Shinzo", "Kiyo"],
    correctAnswer: "Kemumaki (Amara)"
  },
  {
    category: "Kiteretsu",
    question: "What is the name of the small samurai robot built by Kiteretsu?",
    options: ["Tongari", "Butagorilla", "Miyoko", "Korosuke"],
    correctAnswer: "Korosuke"
  },
  {
    category: "Make Way for Noddy",
    question: "Who is Noddy's wise, long-bearded friend who lives in a toadstool house?",
    options: ["Mr. Plod", "Big Ears", "Bumpy Dog", "Tessy Bear"],
    correctAnswer: "Big Ears"
  },
  {
    category: "Oggy and the Cockroaches",
    question: "What are the names of the three cockroaches who torment Oggy?",
    options: ["Ed, Edd, and Eddy", "Alvin, Simon, and Theodore", "Joey, Dee Dee, and Marky", "Huey, Dewey, and Louie"],
    correctAnswer: "Joey, Dee Dee, and Marky"
  },
  {
    category: "Richie Rich",
    question: "What is the name of Richie Rich's robotic maid?",
    options: ["Rosie", "Robotina", "Irona", "Maidbot"],
    correctAnswer: "Irona"
  },
  {
    category: "Richie Rich",
    question: "What is the name of Richie's pet dog with dollar signs on his fur?",
    options: ["Buck", "Cent", "Cash", "Dollar"],
    correctAnswer: "Dollar"
  },
  {
    category: "Richie Rich",
    question: "Who is Richie's loyal and highly skilled butler?",
    options: ["Jeeves", "Cadbury", "Alfred", "Benson"],
    correctAnswer: "Cadbury"
  },
  {
    category: "Richie Rich",
    question: "Who is Richie Rich's mean, spoiled cousin?",
    options: ["Reggie Van Dough", "Cecil", "Sterling", "Preston"],
    correctAnswer: "Reggie Van Dough"
  },
  {
    category: "Richie Rich",
    question: "Who is Richie's closest female friend?",
    options: ["Veronica", "Gloria Glad", "Betty", "Little Dot"],
    correctAnswer: "Gloria Glad"
  }
];