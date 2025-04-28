// 1) Fast Money question pool (pick 5 of these)
const fastMoneyPool = [
  {
    prompt: "Name a popular Indian breakfast item",
    answers: [
      { text: "Paratha", points: 40 },
      { text: "Poha", points: 30 },
      { text: "Idli", points: 20 },
      { text: "Dosa", points: 10 },
      { text: "Parotha with curd", points: 5 }
    ]
  },
  {
  prompt: "Name a popular Indian street food",
  answers: [
    { text: "Pani Puri", points: 40 },
    { text: "Chaat", points: 30 },
    { text: "Samosa", points: 20 },
    { text: "Vada Pav", points: 10 },
    { text: "Dhokla", points: 5 }
  ]
},
{
  prompt: "Name a famous Indian movie",
  answers: [
    { text: "Dilwale Dulhania Le Jayenge", points: 40 },
    { text: "3 Idiots", points: 30 },
    { text: "Sholay", points: 20 },
    { text: "Kabhi Khushi Kabhi Gham", points: 10 },
    { text: "Lagaan", points: 5 }
  ]
},
{
  prompt: "Name a famous Indian festival",
  answers: [
    { text: "Diwali", points: 40 },
    { text: "Holi", points: 30 },
    { text: "Durga Puja", points: 20 },
    { text: "Eid", points: 10 },
    { text: "Navratri", points: 5 }
  ]
},
{
  prompt: "Name a popular Indian sport",
  answers: [
    { text: "Cricket", points: 40 },
    { text: "Football", points: 30 },
    { text: "Kabaddi", points: 20 },
    { text: "Hockey", points: 10 },
    { text: "Badminton", points: 5 }
  ]
},
{
  prompt: "Name an Indian city known for its food",
  answers: [
    { text: "Mumbai", points: 40 },
    { text: "Delhi", points: 30 },
    { text: "Kolkata", points: 20 },
    { text: "Chennai", points: 10 },
    { text: "Hyderabad", points: 5 }
  ]
},
{
  prompt: "Name a popular Indian TV show",
  answers: [
    { text: "Kaun Banega Crorepati", points: 40 },
    { text: "Bigg Boss", points: 30 },
    { text: "Kyunki Saas Bhi Kabhi Bahu Thi", points: 20 },
    { text: "Mahabharat", points: 10 },
    { text: "Taarak Mehta Ka Ooltah Chashma", points: 5 }
  ]
},
{
  prompt: "Name an Indian actor/actress",
  answers: [
    { text: "Shah Rukh Khan", points: 40 },
    { text: "Amitabh Bachchan", points: 30 },
    { text: "Deepika Padukone", points: 20 },
    { text: "Salman Khan", points: 10 },
    { text: "Priyanka Chopra", points: 5 }
  ]
},
{
  prompt: "Name a common Indian greeting",
  answers: [
    { text: "Namaste", points: 40 },
    { text: "Hello", points: 30 },
    { text: "Sat Sri Akal", points: 20 },
    { text: "Salaam", points: 10 },
    { text: "Jai Hind", points: 5 }
  ]
},
{
  prompt: "Name an Indian dish you’d eat at a wedding",
  answers: [
    { text: "Biryani", points: 40 },
    { text: "Paneer Butter Masala", points: 30 },
    { text: "Chole Bhature", points: 20 },
    { text: "Samosa", points: 10 },
    { text: "Gulab Jamun", points: 5 }
  ]
},
{
  prompt: "Name something you can’t live without in an Indian household",
  answers: [
    { text: "Chai", points: 50 },
    { text: "Television", points: 30 },
    { text: "Wi-Fi", points: 15 },
    { text: "A phone charger", points: 4 },
    { text: "Fridge", points: 1 }
  ]
},
{
  prompt: "Name a popular Indian breakfast item",
  answers: [
    { text: "Paratha", points: 40 },
    { text: "Idli", points: 30 },
    { text: "Poha", points: 15 },
    { text: "Upma", points: 10 },
    { text: "Chole Bhature", points: 5 }
  ]
},
{
  prompt: "Name a traditional Indian sweet",
  answers: [
    { text: "Laddoo", points: 50 },
    { text: "Jalebi", points: 30 },
    { text: "Rasgulla", points: 15 },
    { text: "Barfi", points: 4 },
    { text: "Gulab Jamun", points: 1 }
  ]
},
{
  prompt: "Name something you’ll find in every Indian wedding",
  answers: [
    { text: "Sweets", points: 40 },
    { text: "Chuda (bangles)", points: 30 },
    { text: "Henna (Mehendi)", points: 15 },
    { text: "DJ music", points: 10 },
    { text: "Heavy decorations", points: 5 }
  ]
},
{
  prompt: "Name something that Indians do in a temple",
  answers: [
    { text: "Pray", points: 50 },
    { text: "Offer prasad", points: 30 },
    { text: "Ring the bell", points: 15 },
    { text: "Sit in silence", points: 4 },
    { text: "Touch the feet of idols", points: 1 }
  ]
},
{
  prompt: "Name something you should never do in front of your elders in India",
  answers: [
    { text: "Argue", points: 50 },
    { text: "Use your phone", points: 30 },
    { text: "Raise your voice", points: 15 },
    { text: "Wear shorts", points: 4 },
    { text: "Eat with your hands", points: 1 }
  ]
},
{
  prompt: "Name something an Indian parent says when you get low marks",
  answers: [
    { text: "What will Sharma Ji’s son think?", points: 40 },
    { text: "You should study more!", points: 30 },
    { text: "I used to walk 5 kilometers to school!", points: 15 },
    { text: "Why can’t you be like the other kids?", points: 4 },
    { text: "Go to your room", points: 1 }
  ]
},
{
  prompt: "Name a popular Indian TV show",
  answers: [
    { text: "Kyunki Saas Bhi Kabhi Bahu Thi", points: 40 },
    { text: "Bigg Boss", points: 30 },
    { text: "Ramayan", points: 15 },
    { text: "Shaktimaan", points: 4 },
    { text: "CID", points: 1 }
  ]
},
{
  prompt: "Name an item you’ll find at every Indian railway station",
  answers: [
    { text: "Tea", points: 50 },
    { text: "Samosa", points: 30 },
    { text: "Newspaper", points: 15 },
    { text: "Cold drinks", points: 4 },
    { text: "Chana Jor Garam", points: 1 }
  ]
},
{
  prompt: "Name a popular mode of transportation in India",
  answers: [
    { text: "Auto rickshaw", points: 40 },
    { text: "Train", points: 30 },
    { text: "Bus", points: 15 },
    { text: "Motorbike", points: 4 },
    { text: "Cycle", points: 1 }
  ]
},
{
  prompt: "Name a popular Indian festival",
  answers: [
    { text: "Diwali", points: 50 },
    { text: "Holi", points: 30 },
    { text: "Navratri", points: 15 },
    { text: "Durga Puja", points: 4 },
    { text: "Eid", points: 1 }
  ]
},
{
  prompt: "Name something you would find in a typical Indian kitchen",
  answers: [
    { text: "Pressure cooker", points: 50 },
    { text: "Spices", points: 30 },
    { text: "Tawa", points: 15 },
    { text: "Mixie (blender)", points: 4 },
    { text: "Rolling pin", points: 1 }
  ]
},
{
  prompt: "Name something an Indian mother will always say before you leave the house",
  answers: [
    { text: "Wear your sweater", points: 50 },
    { text: "Don't forget to eat", points: 30 },
    { text: "Call me when you reach", points: 15 },
    { text: "Take your umbrella", points: 4 },
    { text: "Don’t hang out with bad company", points: 1 }
  ]
},
{
  prompt: "Name something an Indian family would argue about during dinner",
  answers: [
    { text: "Who gets the last roti", points: 40 },
    { text: "What to watch on TV", points: 30 },
    { text: "The spice level of food", points: 15 },
    { text: "The food temperature", points: 4 },
    { text: "Who finishes their food first", points: 1 }
  ]
},
{
  prompt: "Name something you can’t leave home without in India",
  answers: [
    { text: "Phone", points: 50 },
    { text: "Wallet", points: 30 },
    { text: "Keys", points: 15 },
    { text: "Chappals", points: 4 },
    { text: "Face mask", points: 1 }
  ]
},
{
  prompt: "Name something an Indian father says when you come home late",
  answers: [
    { text: "Where were you?", points: 50 },
    { text: "Did you eat?", points: 30 },
    { text: "Why are you late?", points: 15 },
    { text: "Go to your room", points: 4 },
    { text: "I’ll tell your mother", points: 1 }
  ]
},
{
  prompt: "Name something that you’ll find in every Indian wedding meal",
  answers: [
    { text: "Rice", points: 40 },
    { text: "Sweets", points: 30 },
    { text: "Chapati", points: 15 },
    { text: "Paneer", points: 4 },
    { text: "Biryani", points: 1 }
  ]
},
{
  prompt: "Name something that an Indian family does on a Sunday",
  answers: [
    { text: "Visit relatives", points: 50 },
    { text: "Have a big lunch", points: 30 },
    { text: "Watch cricket", points: 15 },
    { text: "Go for a walk", points: 4 },
    { text: "Take a nap", points: 1 }
  ]
},
{
  prompt: "Name something you’d do if you lost your phone in India",
  answers: [
    { text: "Call it from another number", points: 50 },
    { text: "Go to the police station", points: 30 },
    { text: "Track it using an app", points: 15 },
    { text: "Ask friends to call it", points: 4 },
    { text: "Cry", points: 1 }
  ]
},
{
  prompt: "Name a famous Indian dish you might order at a restaurant",
  answers: [
    { text: "Butter chicken", points: 50 },
    { text: "Paneer tikka", points: 30 },
    { text: "Biryani", points: 15 },
    { text: "Dosa", points: 4 },
    { text: "Chole Bhature", points: 1 }
  ]
},
{
  prompt: "Name something you might say during a cricket match",
  answers: [
    { text: "Come on, hit a six!", points: 50 },
    { text: "Umpire, you’re blind!", points: 30 },
    { text: "That’s a no-ball", points: 15 },
    { text: "Where’s the third umpire?", points: 4 },
    { text: "We’re going to win!", points: 1 }
  ]
},
{
  prompt: "Name something Indians do when a guest arrives",
  answers: [
    { text: "Offer tea or coffee", points: 50 },
    { text: "Ask them to sit", points: 30 },
    { text: "Give them snacks", points: 15 },
    { text: "Call the whole family to greet them", points: 4 },
    { text: "Offer sweets", points: 1 }
  ]
},
{
  prompt: "Name a type of Indian street food",
  answers: [
    { text: "Pani puri", points: 50 },
    { text: "Samosa", points: 30 },
    { text: "Vada pav", points: 15 },
    { text: "Chaat", points: 4 },
    { text: "Dhokla", points: 1 }
  ]
},
{
  prompt: "Name something you should not do in an Indian temple",
  answers: [
    { text: "Take photos", points: 50 },
    { text: "Wear shoes", points: 30 },
    { text: "Disrespect idols", points: 15 },
    { text: "Talk loudly", points: 4 },
    { text: "Eat or drink", points: 1 }
  ]
},
{
  prompt: "Name something you should not do during a wedding in India",
  answers: [
    { text: "Arrive late", points: 50 },
    { text: "Wear white", points: 30 },
    { text: "Talk during the vows", points: 15 },
    { text: "Criticize the food", points: 4 },
    { text: "Dance before the couple", points: 1 }
  ]
},
{
  prompt: "Name something you should not say to an Indian parent",
  answers: [
    { text: "I don’t want to become a doctor", points: 50 },
    { text: "I’m moving abroad", points: 30 },
    { text: "I’m quitting my studies", points: 15 },
    { text: "I’m not getting married", points: 4 },
    { text: "I don’t need your advice", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when visiting someone’s house in India",
  answers: [
    { text: "Refuse food", points: 50 },
    { text: "Sit without removing shoes", points: 30 },
    { text: "Leave without saying goodbye", points: 15 },
    { text: "Ignore elders", points: 4 },
    { text: "Argue with the host", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when eating at an Indian restaurant",
  answers: [
    { text: "Eat with your left hand", points: 50 },
    { text: "Talk loudly", points: 30 },
    { text: "Waste food", points: 15 },
    { text: "Order something too spicy", points: 4 },
    { text: "Mix dishes unnecessarily", points: 1 }
  ]
},
{
  prompt: "Name something you should not wear to an Indian wedding",
  answers: [
    { text: "Black", points: 50 },
    { text: "Casual clothes", points: 30 },
    { text: "Shorts", points: 15 },
    { text: "Too much makeup", points: 4 },
    { text: "Uncomfortable shoes", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when traveling by train in India",
  answers: [
    { text: "Sleep on the floor", points: 50 },
    { text: "Talk loudly on the phone", points: 30 },
    { text: "Ignore the ticket checker", points: 15 },
    { text: "Leave your luggage unattended", points: 4 },
    { text: "Eat smelly food", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when there’s a power cut in India",
  answers: [
    { text: "Panic", points: 50 },
    { text: "Use candles near flammable objects", points: 30 },
    { text: "Waste your phone battery", points: 15 },
    { text: "Forget to check the inverter", points: 4 },
    { text: "Blame the electricity board immediately", points: 1 }
  ]
},
{
  prompt: "Name something you should not do during the Indian monsoon season",
  answers: [
    { text: "Wear white clothes", points: 50 },
    { text: "Forget an umbrella", points: 30 },
    { text: "Drive without checking tire pressure", points: 15 },
    { text: "Stay out too long", points: 4 },
    { text: "Leave clothes to dry outside", points: 1 }
  ]
},
{
  prompt: "Name something you should not do during a power outage in an Indian household",
  answers: [
    { text: "Leave the fridge door open", points: 50 },
    { text: "Forget to use emergency lights", points: 30 },
    { text: "Waste the battery on the phone", points: 15 },
    { text: "Use candles without supervision", points: 4 },
    { text: "Panic and call everyone", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when hosting guests in India",
  answers: [
    { text: "Serve stale food", points: 50 },
    { text: "Ignore the elders", points: 30 },
    { text: "Ask them to leave too early", points: 15 },
    { text: "Force them to eat if they refuse", points: 4 },
    { text: "Serve too much spicy food", points: 1 }
  ]
},
{
  prompt: "Name something you should not do in a crowded Indian market",
  answers: [
    { text: "Push people", points: 50 },
    { text: "Bargain too aggressively", points: 30 },
    { text: "Use your phone for selfies", points: 15 },
    { text: "Ignore shopkeepers", points: 4 },
    { text: "Walk slowly", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when you visit a friend’s house in India",
  answers: [
    { text: "Refuse hospitality", points: 50 },
    { text: "Show up without calling first", points: 30 },
    { text: "Ask personal questions", points: 15 },
    { text: "Leave your shoes inside", points: 4 },
    { text: "Disrespect elders", points: 1 }
  ]
},
{
  prompt: "Name something you should not say when someone offers you food in India",
  answers: [
    { text: "I’m on a diet", points: 50 },
    { text: "I don’t like this", points: 30 },
    { text: "I’m full", points: 15 },
    { text: "I’m vegetarian", points: 4 },
    { text: "I’m allergic to that", points: 1 }
  ]
},
{
  prompt: "Name something you should not do during a wedding ceremony in India",
  answers: [
    { text: "Talk loudly", points: 50 },
    { text: "Arrive after the rituals have started", points: 30 },
    { text: "Wear casual clothes", points: 15 },
    { text: "Criticize the food", points: 4 },
    { text: "Distract the couple", points: 1 }
  ]
},
{
  prompt: "Name something you should not do during a religious festival in India",
  answers: [
    { text: "Ignore the rituals", points: 50 },
    { text: "Wear inappropriate clothing", points: 30 },
    { text: "Talk disrespectfully about the deity", points: 15 },
    { text: "Disrupt the celebrations", points: 4 },
    { text: "Eat before offering prayers", points: 1 }
  ]
},
{
  prompt: "Name something you should not do in the rain in India",
  answers: [
    { text: "Wear white clothes", points: 50 },
    { text: "Forget an umbrella", points: 30 },
    { text: "Walk through flooded streets", points: 15 },
    { text: "Wear expensive shoes", points: 4 },
    { text: "Ignore the weather forecast", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when attending a family gathering in India",
  answers: [
    { text: "Talk about politics", points: 50 },
    { text: "Use your phone excessively", points: 30 },
    { text: "Arrive empty-handed", points: 15 },
    { text: "Argue with elders", points: 4 },
    { text: "Bring up sensitive topics", points: 1 }
  ]
},
{
  prompt: "Name something you should not do during a cricket match in India",
  answers: [
    { text: "Talk loudly during crucial moments", points: 50 },
    { text: "Use your phone during important overs", points: 30 },
    { text: "Blame the umpire for every decision", points: 15 },
    { text: "Walk out before the match is over", points: 4 },
    { text: "Distract the players", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when you’re visiting a religious place in India",
  answers: [
    { text: "Disrespect the rituals", points: 50 },
    { text: "Wear revealing clothing", points: 30 },
    { text: "Talk on the phone", points: 15 },
    { text: "Touch the idols", points: 4 },
    { text: "Ignore the customs", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when traveling on public transport in India",
  answers: [
    { text: "Talk too loudly", points: 50 },
    { text: "Take up too much space", points: 30 },
    { text: "Ignore the conductor", points: 15 },
    { text: "Carry large bags", points: 4 },
    { text: "Enter without a ticket", points: 1 }
  ]
},
{
  prompt: "Name something you should not do when you're running late for work in India",
  answers: [
    { text: "Forget to carry your ID", points: 50 },
    { text: "Take an auto rickshaw without negotiating", points: 30 },
    { text: "Skip breakfast", points: 15 },
    { text: "Forget your laptop", points: 4 },
    { text: "Walk instead of taking a ride", points: 1 }
  ]
},
{
  prompt: "Name something you should not do at an Indian restaurant",
  answers: [
    { text: "Ask for a fork", points: 50 },
    { text: "Complain about the spice level", points: 30 },
    { text: "Order only one dish for the whole table", points: 15 },
    { text: "Mix all the food on the plate", points: 4 },
    { text: "Order a soft drink with biryani", points: 1 }
  ]
},
{
  prompt: "Name something you would never find in an Indian household",
  answers: [
    { text: "Microwave in the kitchen", points: 40 },
    { text: "Dryer for clothes", points: 30 },
    { text: "Central heating system", points: 20 },
    { text: "A non-vegetarian kitchen", points: 5 },
    { text: "A bathroom mirror", points: 3 }
  ]
},
{
  prompt: "Name a food you’re likely to eat in an Indian train",
  answers: [
    { text: "Chai", points: 40 },
    { text: "Samosa", points: 30 },
    { text: "Bread omelette", points: 20 },
    { text: "Pani puri", points: 5 },
    { text: "Curd rice", points: 3 }
  ]
},
{
  prompt: "Name something you’d likely hear at a crowded Indian wedding",
  answers: [
    { text: "Bajrangbali ki Jai", points: 40 },
    { text: "Yeh shaadi nahi ho sakti", points: 30 },
    { text: "Mithai khao!", points: 20 },
    { text: "Dance floor pe aao!", points: 5 },
    { text: "Nazar uthao", points: 3 }
  ]
},
{
  prompt: "Name an object in an Indian home that’s considered 'auspicious'",
  answers: [
    { text: "Tulsi plant", points: 40 },
    { text: "Ganesh idol", points: 30 },
    { text: "Kalash", points: 20 },
    { text: "Peacock feather", points: 5 },
    { text: "Shree Yantra", points: 3 }
  ]
},
{
  prompt: "Name something that’s always found in a typical Indian grandma’s bag",
  answers: [
    { text: "Medicines", points: 40 },
    { text: "Kumkum", points: 30 },
    { text: "Tissues", points: 20 },
    { text: "Sweets", points: 5 },
    { text: "Bindi", points: 3 }
  ]
},
{
  prompt: "Name a topic you’d hear a typical Indian parent talk about at the dinner table",
  answers: [
    { text: "Their childhood", points: 40 },
    { text: "The importance of education", points: 30 },
    { text: "The price of gold", points: 20 },
    { text: "Marriage", points: 5 },
    { text: "Property values", points: 3 }
  ]
},
{
  prompt: "Name something you can always find in an Indian breakfast",
  answers: [
    { text: "Paratha", points: 40 },
    { text: "Chai", points: 30 },
    { text: "Idli", points: 20 },
    { text: "Pooha", points: 5 },
    { text: "Aloo", points: 3 }
  ]
},
{
  prompt: "Name something you’d likely hear from a typical Indian driver",
  answers: [
    { text: "Horn maar", points: 40 },
    { text: "Laga lo seatbelt", points: 30 },
    { text: "Yaar, traffic lag raha hai", points: 20 },
    { text: "Chal nikal, waise bhi light green nahi hai", points: 5 },
    { text: "Mausam accha hai", points: 3 }
  ]
},
{
  prompt: "Name a typical excuse an Indian parent would give for not attending a social event",
  answers: [
    { text: "Health issues", points: 40 },
    { text: "Too much work at home", points: 30 },
    { text: "Boring event", points: 20 },
    { text: "Need to take care of children", points: 5 },
    { text: "We don’t know the people well enough", points: 3 }
  ]
},
{
  prompt: "Name something that’s always found at a typical Indian temple",
  answers: [
    { text: "Bell", points: 40 },
    { text: "Prasad", points: 30 },
    { text: "Flowers", points: 20 },
    { text: "Incense sticks", points: 5 },
    { text: "Aarti thali", points: 3 }
  ]
},
{
  prompt: "Name a type of drink that is commonly consumed during Indian festivals",
  answers: [
    { text: "Thandai", points: 40 },
    { text: "Lassi", points: 30 },
    { text: "Chaas", points: 20 },
    { text: "Sherbet", points: 5 },
    { text: "Soda", points: 3 }
  ]
},
{
  prompt: "Name something that’s always found in an Indian wedding invitation",
  answers: [
    { text: "Photos of the couple", points: 40 },
    { text: "A date and time", points: 30 },
    { text: "Venue details", points: 20 },
    { text: "List of events", points: 5 },
    { text: "Traditional designs", points: 3 }
  ]
},
{
  prompt: "Name something you always do before entering an Indian house",
  answers: [
    { text: "Remove shoes", points: 40 },
    { text: "Touch the feet of elders", points: 30 },
    { text: "Say ‘Namaste’", points: 20 },
    { text: "Carry a gift", points: 5 },
    { text: "Ask for water", points: 3 }
  ]
},
{
  prompt: "Name something you’d likely hear at an Indian family dinner",
  answers: [
    { text: "Khaana kaisa laga?", points: 40 },
    { text: "Kha lo, aur thoda", points: 30 },
    { text: "Bhai, tumhare liye kuch banate hain", points: 20 },
    { text: "Dil se khana khana chahiye", points: 5 },
    { text: "Daal to thodi zyada ho gayi", points: 3 }
  ]
},

  {
    prompt: "Name something you’ll likely find in an Indian ‘pukka’ home",
    answers: [
      { text: "A swing (jhula)", points: 40 },
      { text: "Large wooden cupboards", points: 30 },
      { text: "Family portraits", points: 20 },
      { text: "God idols", points: 5 },
      { text: "Decorative brassware", points: 3 }
    ]
  }
];

// 2) State
let selectedQuestions = [];
let answerIndex = 0;
let timeLeft = 30;
let timerStarted = false;
let revealedCount = 0;
let timerInterval;
let currentPlayer = 1;

// 3) Audio elements
const startSnd = document.getElementById('start-sound');
const tickSnd = document.getElementById('tick-sound');
const swooshSnd = document.getElementById('swoosh-sound');
const upSnd = document.getElementById('timesup-sound');
const beepSnd = document.getElementById('beep-sound');
tickSnd.loop = true;

// 4) DOM refs
const board = document.getElementById('question-board');
const timerEl = document.getElementById('timer');
const stopBtn = document.getElementById('stop-btn');
const timesUpEl = document.getElementById('times-up');
const answerBoard = document.getElementById('answer-board');
const currentQna = document.getElementById('current-qna');
const nextBtn = document.getElementById('next-btn');

// 5) Shuffle helper
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 6) Initialize round
function startGame() {
  selectedQuestions = shuffle([...fastMoneyPool]).slice(0, 5);
  answerIndex = 0;
  timeLeft = 30;
  timerStarted = false;
  revealedCount = 0;
  currentPlayer = 1;

  timerEl.textContent = timeLeft;
  stopBtn.classList.add('hidden');
  answerBoard.classList.add('hidden');
  timesUpEl.classList.add('hidden');
  document.body.classList.remove('flash-red');
  timerEl.classList.remove('timer-fast');
  board.innerHTML = '';

  selectedQuestions.forEach((q, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'tile-wrapper';

    const qText = document.createElement('div');
    qText.className = 'question-text hidden';
    qText.textContent = q.prompt;

    const box = document.createElement('div');
    box.className = 'box';
    box.dataset.idx = i;
    box.textContent = `Box ${i + 1}`;
    box.addEventListener('click', revealQuestion);

    wrapper.appendChild(qText);
    wrapper.appendChild(box);
    board.appendChild(wrapper);
  });
}

// 7) Reveal logic
function revealQuestion(e) {
  const box = e.currentTarget;
  const wrapper = box.parentNode;
  const idx = +box.dataset.idx;

  if (!timerStarted) startTimer();

  if (!box.classList.contains('revealed')) {
    box.classList.add('revealed');
    revealedCount++;

    swooshSnd.currentTime = 0;
    swooshSnd.play();
    wrapper.querySelector('.question-text').classList.remove('hidden');

    setTimeout(() => box.classList.add('slide-out'), 100);
    setTimeout(() => box.remove(), 600);

    if (revealedCount === 5) stopBtn.classList.remove('hidden');
  }
}

// 8) Timer logic
function startTimer() {
  timerStarted = true;
  startSnd.currentTime = 0;
  startSnd.play();
  setTimeout(() => tickSnd.play(), 500);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    // Speed up gradient in last 10 seconds
    if (timeLeft === 10) timerEl.classList.add('timer-fast');

    // Play beeps at 3, 2, 1
    if (timeLeft === 3 || timeLeft === 2 || timeLeft === 1) {
      beepSnd.currentTime = 0;
      beepSnd.play();
      timerEl.classList.add('timer-shake');
    }

    if (timeLeft === 0) {
      finishRound();
      timerEl.classList.remove('timer-shake');
    }
  }, 1000);
}

// 9) Manual stop
stopBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  tickSnd.pause();
  finishRound();
});

// 10) End round
function finishRound() {
  clearInterval(timerInterval);
  tickSnd.pause();
  upSnd.currentTime = 0;
  upSnd.play();
  document.body.classList.add('flash-red');
  timesUpEl.classList.remove('hidden');

  setTimeout(() => {
    document.body.classList.remove('flash-red');
    timesUpEl.classList.add('hidden');
    board.innerHTML = '';
    stopBtn.classList.add('hidden');

    if (currentPlayer === 1) {
      // Start round 2
      currentPlayer = 2;
      timeLeft = 30;
      timerStarted = false;
      revealedCount = 0;
      timerEl.textContent = timeLeft;
      timerEl.classList.remove('timer-fast');
      startSecondRound();
    } else {
      // Show answers
      showAnswer();
    }
  }, 1500);
}

// 11) Start second player
function startSecondRound() {
  board.innerHTML = '';
  selectedQuestions.forEach((q, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'tile-wrapper';

    const qText = document.createElement('div');
    qText.className = 'question-text hidden';
    qText.textContent = q.prompt;

    const box = document.createElement('div');
    box.className = 'box';
    box.dataset.idx = i;
    box.textContent = `Box ${i + 1}`;
    box.addEventListener('click', revealQuestion);

    wrapper.appendChild(qText);
    wrapper.appendChild(box);
    board.appendChild(wrapper);
  });
}

// 12) Show answers
function showAnswer() {
  answerBoard.classList.remove('hidden');
  displayAnswer(answerIndex);
}

function displayAnswer(i) {
  const q = selectedQuestions[i];
  let html = `<h2>Question ${i + 1}: ${q.prompt}</h2><ul>`;
  q.answers.forEach(a => html += `<li>${a.text} — ${a.points} pts</li>`);
  html += `</ul>`;
  currentQna.innerHTML = html;
}

// 13) Next nav
nextBtn.addEventListener('click', () => {
  answerIndex++;
  if (answerIndex < selectedQuestions.length) {
    displayAnswer(answerIndex);
  } else {
    nextBtn.disabled = true;
    nextBtn.textContent = "Done!";
  }
});

// 14) Start up
startGame();
