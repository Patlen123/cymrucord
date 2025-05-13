// File: content_script.js

(function() {
  // Ensure translate function is available
  if (typeof window.translate !== 'function') {
    console.error('Translate function not loaded.');
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
      const translated = window.translate(raw);
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
      const translated = window.translate(ph);
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
  const observer = new MutationObserver(mutations => {
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
        const translated = window.translate(ph);
        if (translated && translated !== ph) {
          el.setAttribute('placeholder', translated);
        }
      }
    }
  });

  // Start observing body for child additions and placeholder attribute changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['placeholder']
  });

  // Initial pass
  walkAndTranslate(document.body);
})();
