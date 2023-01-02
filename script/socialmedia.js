buttons = [
    {
        "active": true,
        "name": "newgrounds",
        "description": "art and games. start here!",
        "link": "https://honiemun.newgrounds.com",
        "image": "svg/newgrounds.svg",
        "background": "#ffc01d",
        "text": "black"
    },
    {
        "active": true,
        "name": "twitter",
        "description": "drawings and projects",
        "link": "https://twitter.com/honiemun",
        "icon": "fa-twitter",
        "background": "#1da1f2",
        "text": "black"
    }
]

var container = document.getElementById('buttons');

for (let button of buttons) {
    if (!button.active) continue;

    iconOrImage = button.icon ? "<i class='fab " + button.icon + " fa-3x'></i>" : "<img src='" + button.image + "'` style='width:48px;'/>"

    let element = `
        <div class="col-md-6 pt-4">
            <a href="` + button.link + `">
                <div class="card text-body mb-3" style="color:` + button.text + ` !important; background-color:` + button.background + `;">
                    <div class="row">
                        <div class="col-md-2 col-sm-4 d-flex align-items-center px-5 card-logo">` + iconOrImage + `</div>
                        <div class="col">
                            <div class="card-body">
                                <h3 class="card-title">` + button.name + `</h3>
                                <p class="card-text small-card-font">
                                    ` + button.description + `
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>`
    
    container.innerHTML += element;
}