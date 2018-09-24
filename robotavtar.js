fetch('https://my.api.mockaroo.com/robot.json?key=eb3274c0')
.then(function(response) 
{
return response.json();
})

.then(function(data){
heroes = data;
const HtmlSninnet=heroes.map ((  xyz ,index)   =>`
  
        <div class="email-item email-item-selected pure-g">
            <div class="pure-u">
                <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src=${xyz.avtar}>
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">${xyz.name}</h5>
                <h4 class="email-subject">${xyz.slogan}</h4>
                <p class="email-desc">
                    ${xyz.subject}
                </p>
            </div>
        </div>`);
const main = document.querySelector("#list");    
main.innerHTML= HtmlSninnet;

})