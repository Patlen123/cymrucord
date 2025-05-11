(function() {
  if (typeof TRANSLATIONS !== 'object') {
    console.error('Translation data not loaded.');
    return;
  }

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

  function isMarkup(node) {
    let el = node.parentElement;
    while (el)  {
          let el = node.parentElement;
    while (el) {
      if (el.getAttribute && el.getAttribute('class') && /markup/.test(el.getAttribute('class'))) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
    }
  }

  // Utility: replace text nodes (UI only), skipping message content and textAreas
  function translateNode(node) {
    if (
      node.nodeType === Node.TEXT_NODE &&
      !isMessageContent(node) &&
      !isInTextArea(node) &&
      !isMarkup(node)
    ) {
      const txt = node.nodeValue.trim();
      if (TRANSLATIONS[txt]) {
        node.nodeValue = node.nodeValue.replace(txt, TRANSLATIONS[txt]);
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
  }

  // Observe for dynamic changes (UI only)
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          translateNode(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          walkAndTranslate(node);
        }
      }
    }
  });

  // Start observer on body
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Initial pass
  walkAndTranslate(document.body);
})();
