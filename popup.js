document.addEventListener('DOMContentLoaded', function() {
  const historyList = document.getElementById('historyList');

  chrome.history.search({ text: '', maxResults: 1000 }, function(results) {
    historyList.innerHTML = '';

    if (results.length === 0) {
      historyList.innerHTML = '<li>検索履歴が見つかりませんでした</li>';
      return;
    }

    results.forEach(function(historyItem) {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = historyItem.url;
      link.target = '_blank';
      link.textContent = historyItem.title || historyItem.url;

      listItem.appendChild(link);
      historyList.appendChild(listItem);
    });
  });
});

