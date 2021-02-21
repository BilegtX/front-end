fetch('https://weather-api.endigo.now.sh/api/v1/weather', {
        headers: { Accept: 'application/json' },
      })
        .then((res) => {
          if (res.status !== 200) {
            console.log('Problem!', res.status);
            return;
          }
          res.json().then((data) => {
            var ul = document.getElementById('ul');
            // console.log(data.Cities);
            data.Cities.map((value) => {
              var li = document.createElement('Li');
              var k = document.createTextNode(value.Name);
              var ull = document.createElement('UL');
              value.Weathers.map((obj) => {
                var lii = document.createElement('LI');
                var ulll = document.createElement('UL');
                for (const [key, value] of Object.entries(obj)) {
                  var liii = document.createElement('LI');
                  var a = document.createTextNode(key + ' ' + value);
                  liii.appendChild(a);
                  ulll.appendChild(liii);
                }
                lii.appendChild(ulll);
                ull.appendChild(lii);
              });
              li.appendChild(k);
              li.appendChild(ull);
              ul.appendChild(li);
              // console.log(value);
            });
            // ul.appendChild(value);
          });
        })
        .catch((err) => {
          console.log('Fetch error', err);
        });