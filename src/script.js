// Функция для отправки запроса к API Pipedrive
function sendRequestToPipedriveAPI(deal) {
    // Использование fetch для отправки POST-запроса:
    fetch('https://api.pipedrive.com/v1/deals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deal)
    })
      .then(response => {
        // Обработка ответа от API Pipedrive
        if (response.ok) {
          console.log('Запрос к API Pipedrive выполнен успешно.');
        } else {
          console.log('Ошибка при выполнении запроса к API Pipedrive.');
        }
      })
      .catch(error => {
        console.log('Ошибка при выполнении запроса к API Pipedrive:', error);
      });
  }
  
  // Загрузка страницы со встроенным iframe
  window.onload = function() {
    var iframe = document.getElementById('myIframe');
    iframe.src = 'https://doc.clickup.com/36925455/p/h/136w0f-58802/2c5d002c981d8c4';
    
    // Обработчик события загрузки iframe
    iframe.onload = function() {
      var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      var inputInfo = iframeDocument.getElementById('inputInfo').value;
      var pipedriveDeal = {
        inputInfo: inputInfo
      };
      sendRequestToPipedriveAPI(pipedriveDeal);
    };
  };

// Получение элемента iframe
var iframe = document.getElementById('myIframe');

// Обработчик события загрузки iframe
iframe.onload = function() {
  // Получение содержимого iframe
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  
  // Получение входной информации из iframe
  var inputInfo = iframeDocument.getElementById('inputInfo').value;
  
  // Создание новой сделки в Pipedrive
  var pipedriveDeal = {
    inputInfo: inputInfo,
  };
}