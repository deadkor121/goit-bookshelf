function showLoader() {
    let loaderOverlay = document.getElementById('loader-overlay');
    if (loaderOverlay) {
      loaderOverlay.style.display = 'flex';
    }
  }
  
  function hideLoader() {
    let loaderOverlay = document.getElementById('loader-overlay');
    if (loaderOverlay) {
      loaderOverlay.style.display = 'none';
    }
  }
  
  function interceptXHRRequests() {
    let originalOpen = XMLHttpRequest.prototype.open;
    let originalSend = XMLHttpRequest.prototype.send;
  
    XMLHttpRequest.prototype.open = function () {
      let self = this;
      self.addEventListener('loadstart', function () {
        showLoader();
      });
      self.addEventListener('loadend', function () {
        hideLoader();
      });
      return originalOpen.apply(this, arguments);
    };
  
    XMLHttpRequest.prototype.send = function () {
      let self = this;
      self.addEventListener('loadstart', function () {
        showLoader();
      });
      self.addEventListener('loadend', function () {
        hideLoader();
      });
      return originalSend.apply(this, arguments);
    };
  }
  
  function interceptFetchRequests() {
    let originalFetch = window.fetch;
  
    window.fetch = function () {
      showLoader();
      return originalFetch
        .apply(this, arguments)
        .then(function (response) {
          hideLoader();
          return response;
        })
        .catch(function (error) {
          hideLoader();
          throw error;
        });
    };
  }
  
  interceptXHRRequests();
  interceptFetchRequests();
  
  function updateLoaderStyle() {
    let loaderOverlay = document.getElementById('loader-overlay');
    if (document.body.classList.contains('dark')) {
      loaderOverlay.style.backgroundColor = 'rgba(17, 17, 17)';
      loaderOverlay.querySelector('.loader').style.top = '10px'; // змінюємо положення тексту
    } else {
      loaderOverlay.style.backgroundColor = ''; 
      loaderOverlay.querySelector('.loader').style.top = ''; // скидаємо положення
    }
  }