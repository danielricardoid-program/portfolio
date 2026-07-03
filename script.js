/* =================================================================
   DANIEL RICARDO — PORTFOLIO SCRIPT
   =================================================================
   This file only does ONE thing: switches the page between
   English and Indonesian when you click the EN/ID buttons.

   HOW IT WORKS:
   Every translatable element in index.html has two attributes:
     data-en="English text here"
     data-id="Teks Indonesia di sini"

   When you click a language button, this script reads the
   matching attribute and swaps it into the visible text.
   ================================================================= */

function setLang(lang) {
  // 1. Highlight whichever button (EN or ID) was just clicked
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  // 2. Find every element that has a data-en / data-id translation
  //    and swap its text to the selected language
  document.querySelectorAll('[data-en]').forEach(function (el) {
    var translation = el.getAttribute('data-' + lang);
    if (translation) {
      el.textContent = translation;
    }
  });

  // 3. The footer copyright line isn't tagged with data-en/data-id
  //    (it has a quote mark © that's easier to handle separately)
  var footerCopy = document.getElementById('footer-copy');
  if (footerCopy) {
    footerCopy.textContent = (lang === 'id')
      ? '© 2026 Daniel Ricardo. Hak cipta dilindungi.'
      : '© 2026 Daniel Ricardo. All rights reserved.';
  }
}
