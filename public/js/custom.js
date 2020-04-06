(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'retecion.myshopify.com',
      storefrontAccessToken: '214beea71159446323f0db90ccbeb9b2',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4736861405243',
        node: document.getElementById('product-component-1586193837023'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  }
},
      });
    });
  }
})();

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'retecion.myshopify.com',
      storefrontAccessToken: '214beea71159446323f0db90ccbeb9b2',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4730799095867',
        node: document.getElementById('product-component-1586193955393'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  }
},
      });
    });
  }
})();

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'retecion.myshopify.com',
      storefrontAccessToken: '214beea71159446323f0db90ccbeb9b2',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4730802962491',
        node: document.getElementById('product-component-1586194017209'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  }
},
      });
    });
  }
})();

let covidApidata;

const url = 'https://api.covid19api.com/summary';
fetch(url) 
.then(data=>{return data.json()})
.then(res=>{

covidApidata = res;
console.log(res);

let search = (key, inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].Country === key) {
          return inputArray[i];
      }
  }
}

let chinaResults = search('China', covidApidata.Countries);
let italyResults = search('Italy', covidApidata.Countries);
let usaResults = search('United States of America', covidApidata.Countries);
let spainResults = search('Spain', covidApidata.Countries);
let germanyResults = search('Germany', covidApidata.Countries);
let franceResults = search('France', covidApidata.Countries);
let iranResults = search('Iran', covidApidata.Countries);

countryData = [
  usaData = {
    country: usaResults.Country,
    total: usaResults.TotalConfirmed
  },
  italyData = {
    country: italyResults.Country,
    total: italyResults.TotalConfirmed
  },
  chinaData = {
    country: chinaResults.Country,
    total: chinaResults.TotalConfirmed
  },
  spainData = {
    country: spainResults.Country,
    total: spainResults.TotalConfirmed
  },
    germanyData = {
      country: germanyResults.Country,
      total: germanyResults.TotalConfirmed
  },
  franceData = {
    country: franceResults.Country,
    total: franceResults.TotalConfirmed
  }
];
  document.getElementById('usa').innerHTML = countryData[0].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[0].total;
  document.getElementById('italy').innerHTML = countryData[1].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[1].total;
  document.getElementById('china').innerHTML = countryData[2].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[2].total;
  document.getElementById('spain').innerHTML = countryData[3].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[3].total;
  document.getElementById('germany').innerHTML = countryData[4].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[4].total;
  document.getElementById('france').innerHTML = countryData[5].country + ' Covid Cases: ' + '<i style="color:#99D315" class="fas fa-chevron-up"></i>' + countryData[5].total;
})
.catch(error=>console.log(error));
