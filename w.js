function search() {

    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => el.classList.remove('highlight'));
  
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
    const contentDiv = document.getElementById('content');
    const content = contentDiv.innerHTML.toLowerCase();
  
    if (searchTerm.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
  
    const regex = new RegExp(searchTerm, 'gi');
    let matches = content.match(regex);
  
    if (matches) {
      contentDiv.innerHTML = contentDiv.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
  
      // Find the first highlighted element and scroll to it
      const firstMatch = document.querySelector('.highlight');
      if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert("No matches found.");
    }
  }
  
  function showSuggestions() {
  
    const searchInput = document.getElementById('searchInput');
    const suggestionsDiv = document.getElementById('suggestions');
    const searchTerm = searchInput.value.toLowerCase();
    const contentDiv = document.getElementById('content');
    const content = contentDiv.innerText.toLowerCase();
  
    if (searchTerm.trim() === "") {
      suggestionsDiv.innerHTML = "";
      return;
    }
  
    const words = content.split(/[\s,]+/);
    const filteredWords = words.filter(word => word.startsWith(searchTerm));
  
    suggestionsDiv.innerHTML = "";
  
    filteredWords.forEach(word => {
      const suggestionElement = document.createElement('div');
      suggestionElement.textContent = word;
  
      suggestionElement.onclick = () => {
        searchInput.value = word;
        suggestionsDiv.innerHTML = "";
        search();
      };
  
      suggestionsDiv.appendChild(suggestionElement);
    });
  }
