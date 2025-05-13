// File: translations.js

// 1) Static translations (exact matches) in an object for O(1) lookup
const STATIC_TRANSLATIONS = {
  // DM Screen Strings
  "Friends": "Ffrindiau",
  "Search": "Chwilio",
  "Shop": "Siop",
  "Direct Messages": "Negeseuon Cyfeiriadol",
  "Find or start a conversation": "Ffeindio neu ddechrau sgwrs",
  "Online": "Ar-lein",
  "All": "Pawb",
  "Add Friend": "Ychwanegu Ffrind",
  "New Group DM": "Neges Grŵp Newydd",
  "Add a Server": "Ychwanegu Gweinydd",
  "About Me": "Amdanaf",
  "Member Since": "Aelod Ers",
  "It's quiet for now...": "Mae hi'n dawel am y tro...",
  "When a friend starts an activity – like playing a game or hanging out on voice – we'll show it here!":
    "Pan fydd ffrind yn dechrau gweithgaredd – fel chwarae gêm neu siarad mewn sgwrs llais – byddwn ni'n ei ddangos yma!",
  "Where would you like to go?": "Lle hoffech chi fynd?",
  "new": "newydd",
  "Discount": "Ostyngiad",
  "Active Now": "Actif Rŵan",
  "Playing": "Yn chwarae ",

  // Search Options
  "Search Options": "Opsinau Chwilio",
  "from:": "gan: ",
  "mentions:": "crybwyll: ",
  "has:": "wedi: ",
  "user": "defnyddiwr",
  "link, embed or file": "dolen, menosod neu ffeil",

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

  //    Coonections
  "Connections": "Cysylltiadau",

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
