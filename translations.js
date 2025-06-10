// File: translations.js

// 1) Static translations (exact matches) in an object for O(1) lookup
const STATIC_TRANSLATIONS = {
  // DM Screen Strings
  "Friends": "Ffrindiau",
  "Search": "Chwilio",
  "Shop": "Siop",
  "Direct Messages": "Negeseuon Uniongyrchol",
  "Find or start a conversation": "Ffeindio neu ddechrau sgwrs",
  "Online": "Ar-lein",
  "Offline": "All-lein",
  "All": "Pawb",
  "Add Friend": "Ychwanegu Ffrind",
  "All Friends": "Pawb yn fy Ffrindiau",
  "New Group DM": "Neges Grŵp Newydd",
  "Add a Server": "Ychwanegu Gweinydd",
  "About Me": "Amdanaf",
  "Member Since": "Aelod Ers",
  "It's quiet for now...": "Mae hi'n dawel am y tro...",
  "When a friend starts an activity – like playing a game or hanging out on voice – we'll show it here!":
    "Pan fydd ffrind yn dechrau gweithgaredd – fel chwarae gêm neu siarad mewn sgwrs llais – byddwn ni'n ei ddangos yma!",
  "Where would you like to go?": "Lle hoffet ti fynd?",
  "new": "newydd",
  "Discount": "Ostyngiad",
  "Active Now": "Actif Rŵan",
  "Playing": "Yn chwarae ",
  "More": "Mwy",
  "Message": "Anfon Neges",
  "Start Voice Call": "Dechrau Galwad Llais",
  "Start Video Call": "Dechrau Galwad Fideo",
  "Remove Friend": "Tynnu Ffrind",
  "Pinned Messages": "Negeseuon Wedi'u Pinio",
  "Add Friends to DM": "Ychwanegu Ffrindiau i Neges Breifat",
  "Show User Profile": "Dangos Proffil Defnyddiwr",
  "Hide User Profile": "Cuddio Proffil Defnyddiwr",

  // Search Options
  "Search Options": "Dewisiadau Chwilio",
  "from:": "gan: ",
  "mentions:": "crybwyll: ",
  "has:": "gyda: ",
  "before:": "cyn: ",
  "during:": "tra: ",
  "after:": "ar ôl: ",
  "pinned:": "wedi’i binio: ",
  "user": "defnyddiwr",
  "link, embed or file": "dolen, mewnosodiad neu ffeil",
  "specific date": "ddyddiad penodol",
  "true or false": "gwir neu ffug",
  "Learn More": "Dysgu Mwy",


  // User Box Strings
  "User Settings": "Gosodiadau Defnyddiwr",
  "Voice Connected": "Llais wedi'i gysylltu",
  "Deafen": "Distewi",
  "Turn On Microphone": "Galluogi Meicroffon",
  "Turn Off Microphone": "Analluogi Meicroffon",
  "Invisible": "Anweledig",
  "Do Not Disturb": "Peidiwch ag Aflonyddu",
  "Idle": "Segur",
  "You will not receive desktop notifications": "Ni fyddwch yn derbyn hysbysiadau bwrdd gwaith",
  "You will appear offline": "Ni fyddwch yn ymddangos all-lein",
  "Mute": "Tewi",
  "Unmute": "Dad-dewi",
  "Copy Username": "Copïo Enw Defnyddiwr",
  "Pronouns": "Rhagenwau",
  "Amp up your profile": "Gwella Eich Proffil",
  "Get Nitro": "Cael Nitro",
  "Edit Profile": "Golygu Proffil",
  "Switch Accounts": "Newid Cyfrifau",
  "Copy User ID": "Copïo ID Defnyddiwr",
  "Manage Accounts": "Rheoli Cyfrifau",

  // Settings Strings
  //    My Account
  "My Account": "Fy Cyfrianir",
  "Security": "Diogelwch",
  "Standing": "Enw Da",
  "Display Name":"Enw Arddangos",
  "Username": "Enw Defnyddiwr",
  "Email": "E-Bost",
  "Phone Number":"Rhif Ffôn",
  "Reveal": "Datgelu",

  //    Connections
  "Connections": "Cysylltiadau",

  //    Server Creator
  "Create Your Server": "Creu Eich Weinydd",
  "Your server is where you and your friends hang out. Make yours and start talking.": "Eich gweinydd yw lle wyt ti'n a ti ffrindiau'n cwrdd. Creu eich rŵan!",
  "Create My Own": "Creu Fy Un",
  "Gaming": "Gemau",
  "Study Group": "Grŵp Astudio",
  "School Club": "Clwb Ysgol",
  "Local Community": "Cymuned Leol",
  "Artists & Creators": "Arlunwyr a Creawyr",
  "Already have an invite?": "Oes gen ti wahoddiad?",
  "Join a Server": "Ymunwch â Weinydd"
  
  

};

// 2) Dynamic translations (wildcards) as an array of [pattern, replacer]
const DYNAMIC_TRANSLATIONS = [
  [/^Online\s*–\s*(\d+)$/, (_, num) => `Ar-Lein – ${num}`],
  [/^Today at (\d{2}:\d{2})$/, (_, time) => `Heddiw ar ${time}`],

  // Dates
  [/^(\d{1,2}) Jan (\d{4})$/, (_, day, year) => `${day} Ionawr ${year}`],
  [/^(\d{1,2}) Feb (\d{4})$/, (_, day, year) => `${day} Chwefror ${year}`],
  [/^(\d{1,2}) Mar (\d{4})$/, (_, day, year) => `${day} Mawrth ${year}`],
  [/^(\d{1,2}) Apr (\d{4})$/, (_, day, year) => `${day} Ebrill ${year}`],
  [/^(\d{1,2}) May (\d{4})$/, (_, day, year) => `${day} Mai ${year}`],
  [/^(\d{1,2}) Jun (\d{4})$/, (_, day, year) => `${day} Mehefin ${year}`],
  [/^(\d{1,2}) Jul (\d{4})$/, (_, day, year) => `${day} Gorffennaf ${year}`],
  [/^(\d{1,2}) Aug (\d{4})$/, (_, day, year) => `${day} Awst ${year}`],
  [/^(\d{1,2}) Sep (\d{4})$/, (_, day, year) => `${day} Medi ${year}`],
  [/^(\d{1,2}) Oct (\d{4})$/, (_, day, year) => `${day} Hydref ${year}`],
  [/^(\d{1,2}) Nov (\d{4})$/, (_, day, year) => `${day} Tachwedd ${year}`],
  [/^(\d{1,2}) Dec (\d{4})$/, (_, day, year) => `${day} Rhagfyr ${year}`],
];

// 3) Translation cache to avoid redundant computations
const TRANSLATION_CACHE = new Map();

// Generic translate helper with caching
function translate(str) {
  // Return cached result if exists
  if (TRANSLATION_CACHE.has(str)) {
    return TRANSLATION_CACHE.get(str);
  }

  // 1) Static lookup (fast)
  if (STATIC_TRANSLATIONS[str]) {
    TRANSLATION_CACHE.set(str, STATIC_TRANSLATIONS[str]);
    return STATIC_TRANSLATIONS[str];
  }

  // 2) Dynamic patterns
  for (const [pattern, replacer] of DYNAMIC_TRANSLATIONS) {
    const m = str.match(pattern);
    if (m) {
      const result = replacer(...m);
      TRANSLATION_CACHE.set(str, result);
      return result;
    }
  }

  // 3) Fallback: original string
  TRANSLATION_CACHE.set(str, str);
  return str;
}

// Expose translate on window for content scripts
window.translate = translate;
