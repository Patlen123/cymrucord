/**
 * @name WelshTranslator
 * @author YourName
 * @description Automatically translates Discord UI into Welsh using a local dictionary.
 * @version 1.0.0
 */

module.exports = class WelshTranslator {
  constructor(meta) {
    // Initialization if needed
    this.observer = null;
  }

  start() {
    // --- Begin translations.js logic ---

    // 1) Static translations (exact matches) in an object for O(1) lookup
const STATIC_TRANSLATIONS = {
  // Top Bar
  "Inbox": "Mewnflwch",
  "Help": "Helpu (Saesneg)",
  
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
  "Add Friends to DM": "Ychwanegu Ffrindiau i DM",
  "Show User Profile": "Dangos Proffil Defnyddiwr",
  "Hide User Profile": "Cuddio Proffil Defnyddiwr",
  "You can add friends with their Discord usernames.": "Ti fedri ychwanegu ffrindiau gan ddefnyddio eu henwau defnyddwyr ar Discord",
  "Send Friend Request": "Anfon Cais Ffrind",
  "Other Places to Make Friends": "Lleoedd Arall i Gwneud Ffrindiau",
  "Don’t have a username on hand? Check out our list of public servers that includes everything from gaming to cooking, music, anime and more.": "Does gen ti ddim enw defniddiwr i ddefnyddio? Edrych ar ein rhestr o weinyddion cyhoeddus sy’n cynnwys popeth o gemau i goginio, cerddoriaeth, anime a mwy.",
  "Explore Discoverable Servers": "Archwilio Gweinyddion Darganfyddadwy",
  "Discover": "Archwilio",
  "Download Apps": "Wedi Lawrlwytho Apiau",
  "View Full Profile": "Dangos Proffil Llawn",
  "Upload a File": "Llwytho Ffeil i Fyny",
  "Create Poll": "Creu Pleidlais",
  "Use Apps": "Defnyddio Apiau",
  "Search Tenor": "Chwilio Tenor",
  "Stickers": "Sticeri",
  "Find the perfect sticker": "Ffeindio'r sticer perffaith",
  "Find the perfect emoji": "Ffeindio'r emoji perffaith",
  "Frequently Used": "Defnyddiwyd Yn Amlach",
  "Click to react": "Cliciwch i reagor",
  "Add Reaction": "Ychwanegu Reagor",
  "Reply": "Ateb",
  "Forward": "Anfon Ymlaen",
  "Edit Message": "Golygu Neges",
  "Copy Text": "Copïo Testun",
  "Pin Message": "Pinio Neges",
  "Mark Unread": "Marcio Fel Heb Ei Darllen",
  "Copy Message Link": "Copïo Dolen Neges",
  "Speak Message": "Siarad Neges",
  "Delete Message": "Dileu Neges",
  "Copy Message ID": "Copïo ID Neges",
  "Direct Messages": "Negeseuon Uniongyrchol",
  "Join Nitro": "Ymuno â Nitro",
  "Mutual Servers": "Gweinyddion Cyffredin",
  "Mutual Friends": "Ffrindiau Cyffredin",




  // Download Apps Box
  "Get Discord at Home": "Cael Discord Adre",
  "Or on the go": "Neu wrth fynd",
  "Download": "Lawrlwytho",
  "Want some of that fresh off-the-vine Discord?": "Wyt ti isio'r fersiwn beta Discord?",
  "Get the public test build": "Cael fersiwn prawf cyhoeddus Discord.",

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
  "Undeafen": "Dad-distewi",
  "Turn On Microphone": "Galluogi Meicroffon",
  "Turn Off Microphone": "Analluogi Meicroffon",
  "Invisible": "Anweledig",
  "Do Not Disturb": "Peidiwch ag Aflonyddu",
  "Idle": "Segur",
  "You will not receive desktop notifications": "Ni fyddwch yn derbyn hysbysiadau bwrdd gwaith",
  "You will appear offline": "Ni fyddwch yn ymddangos all-lein",
  "Mute": "Mud",
  "Unmute": "Dad-fud",
  "Copy Username": "Copïo Enw Defnyddiwr",
  "Pronouns": "Rhagenwau",
  "Amp up your profile": "Gwella Eich Proffil",
  "Get Nitro": "Cael Nitro",
  "Edit Profile": "Golygu Proffil",
  "Switch Accounts": "Newid Cyfrifau",
  "Copy User ID": "Copïo ID Defnyddiwr",
  "Manage Accounts": "Rheoli Cyfrifau",

  // Discover
  "Apps": "Apiau",
  "Servers": "Gweinyddol",
  "Find your community on Discord": "Darganford dy cymuned ar Discord",
  "From gaming, to music, to learning, there's a place for you.": "O gemau, i gerddoriaeth, i ddysgu, mae lle i ti",
  "Featured Servers": "Gweinyddion Nodwedig",
  "Get updates, connect with developers and chat with other players.": "Cael diweddariadau, cysylltu efo datblygwyr a sgwrsio efo chwaraewyr eraill.",
  "Get updates, connect with artists and chat with other music fans.": "Cael diweddariadau, cysylltu efo cerddorion a sgwrsio efo dilynwyr cerddoriaeth eraill.",
  "Entertainment": "Diddanwch",
  "Connect with your favorite creators and their fans.": "Cysylltu efo dy hoff greuwyr a'u dilynwyr.",
  "Science & Tech": "Gwyddoniaeth a Thechnoleg",
  "Connect with developers, afficionados and technology brands.": "Cysylltu efo datblygwyr, cefnogwyr a brandiau technoleg.",
  "Education": "Addysg",
  "Connect with students, teachers and learning centers.": "Cysylltu efo myfyrwyr, athrawon a chanolfannau dysgu.",
  "Student Hubs": "Hwbau Myfyrwyr",
  "Join the Student Hub for your school": "Ymunu â Hwb Myfyrwyr dy (prif)ysgol",
  "Meet classmates from your school, discover communities and share your servers.": "Cyfarfod efo myfyrwyr, archwilio cymunedau a rhannu dy weinyddion.",
  "Find study groups, clubs and friends in the Student Hub for your school or university!": "Ffeindio grwpiau astudio, clybiau a ffrindiau yn y Hwb Myfyrwyr ar gyfer dy (prif)ysgol!",
  "Meet classmates from your school, discover communities and share your servers, all in one place.": "Cyfarfod efo myfyrwyr, archwilio cymunedau a rhannu dy weinyddion, popeth mewn yn lle.",
  "Hubs are not affiliated with or managed by schools or universities.": "Dydy Hwbau ddim yn gysylltiedig neu wedi'u rheoli gan ysgolion neu prifysgolion.",
  "Servers listed in the school or university's Student Hub are run by students. Users do not need to be a member of a Student Hub to be invited to join a server listed there.": "Mae gweinyddion wedi'u rhestru yn y Hwb Myfyrwyr ysgol neu brifysgol yn cael eu rhedeg gan fyfyrwyr. Nid oes angen i ddefnyddiwr bod yn aelod o Hwb Myfyrwyr i ymuno â gweinydd sydd wedi'i rhestru yno.",
  "Home": "Cartref",
  "Music": "Cerddoriaeth",
  "Quests": "Tasgau (Saesneg)",

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
  "Edit User Profile": "Golygu Proffil Defnyddiwr",
  "Edit": "Golygu",
  "Age group": "Grŵp Oedran",
  "Unverified": "Heb ei Ddilysu",
  "Verify": "Ddilysu",
  "Password and Authentication": "Cyfrinair a Dilysu",
  "Change Password": "Newid Cyfrinair",


  //    Connections
  "Connections": "Cysylltiadau",

  //    Server Creator
  "Create Your Server": "Creu Eich Gweinydd",
  "Your server is where you and your friends hang out.\nMake yours and start talking.": "Eich gweinydd yw lle wyt ti'n a ti ffrindiau'n cwrdd. Creu eich rŵan!",
  "Create My Own": "Creu Fy Un",
  "Gaming": "Gemau",
  "Study Group": "Grŵp Astudio",
  "School Club": "Clwb Ysgol",
  "Local Community": "Cymuned Leol",
  "Artists & Creators": "Arlunwyr a Creawyr",
  "Already have an invite?": "Oes gen ti wahoddiad?",
  "Join a Server": "Ymuno â Gweinydd",
  "Enter an invite below to join an existing server": "Teipio gwahoddiad isod i ymuno â gweinydd presennol",
  "Invite link": "Dolen gwahoddiad",
  "Invites should look like": "Dylai Gwahoddiadau Edrych Fel Hyn",
  "Don’t have an invite?": "Does gen ti ddim gwahoddiad?",
  "Check out Discoverable communities in Server Discovery.": "Edrych ar y cymunedau Darganfyddadwy mewn Archwilio Gweinydd",
  "Back": "Yn ôl",
  "Join Server": "Ymuno â Gweinydd",
  
  
  

};

    // 2) Dynamic translations (wildcards) as an array of [pattern, replacer]
    const DYNAMIC_TRANSLATIONS = [
      [/^Online\s*–\s*(\d+)$/, (_, num) => `Ar-lein – ${num}`],
      [/^All friends\s*–\s*(\d+)$/, (_, num) => `Pawb yn fy ffrindiau – ${num}`],
      [/^Today at (\d{2}:\d{2})$/, (_, time) => `Heddiw ar ${time}`],
      // ... (rest of your dynamic translations here, truncated for brevity)
      [/^Message (.+)$/, (_, text) => `Anfon neges i ${text}`],
    ];

    // 3) Translation cache to avoid redundant computations
    const TRANSLATION_CACHE = new Map();

    // Generic translate helper with caching
    function translate(str) {
      if (TRANSLATION_CACHE.has(str)) {
        return TRANSLATION_CACHE.get(str);
      }
      if (STATIC_TRANSLATIONS[str]) {
        TRANSLATION_CACHE.set(str, STATIC_TRANSLATIONS[str]);
        return STATIC_TRANSLATIONS[str];
      }
      for (const [pattern, replacer] of DYNAMIC_TRANSLATIONS) {
        const m = str.match(pattern);
        if (m) {
          const result = replacer(...m);
          TRANSLATION_CACHE.set(str, result);
          return result;
        }
      }
      TRANSLATION_CACHE.set(str, str);
      return str;
    }

    // --- End translations.js logic ---

    // --- Begin content_script.js logic ---

    // Utility: check if element is part of Discord message content
    function isMessageContent(node) {
      let el = node.parentElement;
      while (el) {
        if (el.getAttribute && el.getAttribute('class') && /messageContent/.test(el.getAttribute('class'))) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    // Utility: check if element is within a class containing "textArea"
    function isInTextArea(node) {
      let el = node.parentElement;
      while (el) {
        if (el.getAttribute && el.getAttribute('class') && /textArea/.test(el.getAttribute('class'))) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    // Utility: check if element is within a class containing "markup"
    function isMarkup(node) {
      let el = node.parentElement;
      while (el) {
        if (el.getAttribute && el.getAttribute('class') && /markup/.test(el.getAttribute('class'))) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    // Utility: replace text nodes (UI only), skipping message content and textAreas
    function translateNode(node) {
      if (
        node.nodeType === Node.TEXT_NODE &&
        !isMessageContent(node) &&
        !isInTextArea(node) &&
        !isMarkup(node)
      ) {
        const raw = node.nodeValue.trim();
        const translated = translate(raw);
        if (translated && translated !== raw) {
          node.nodeValue = node.nodeValue.replace(raw, translated);
        }
      }
    }

    // Translate existing placeholders (for inputs and textareas)
    function translatePlaceholders(root) {
      const els = root.querySelectorAll('input[placeholder], textarea[placeholder]');
      for (const el of els) {
        const ph = el.getAttribute('placeholder');
        const translated = translate(ph);
        if (translated && translated !== ph) {
          el.setAttribute('placeholder', translated);
        }
      }
    }

    // Walk the DOM and translate existing text (UI only)
    function walkAndTranslate(root) {
      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
      let n;
      while (n = walker.nextNode()) {
        translateNode(n);
      }
      translatePlaceholders(root);
    }

    // Combined MutationObserver for text nodes and placeholder attributes
    this.observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        if (m.type === 'childList') {
          for (const node of m.addedNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
              translateNode(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              walkAndTranslate(node);
            }
          }
        }
        else if (m.type === 'attributes' && m.attributeName === 'placeholder') {
          const el = m.target;
          const ph = el.getAttribute('placeholder');
          const translated = translate(ph);
          if (translated && translated !== ph) {
            el.setAttribute('placeholder', translated);
          }
        }
      }
    });

    // Start observing body for child additions and placeholder attribute changes
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['placeholder']
    });

    // Initial pass
    walkAndTranslate(document.body);

    // --- End content_script.js logic ---
  }

  stop() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
};