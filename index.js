$(document).ready(function(){
    const attributeValue = [
        {
            "sku": "12345",
            "name": "nama123",
            "photos": [
                {
                    "photo": "www.google.com"
                },
                {
                    "photo": "www.yahoo.com"
                },
                {
                    "photo": "www.youtube.com"
                }
            ]
        },
        {
            "sku": "4555",
            "name": "namaasdnasd",
            "photos": [
                {
                    "photo": "www.google2.com"
                },
                {
                    "photo": "www.yahoo3.com"
                },
                {
                    "photo": "www.youtube4.com"
                }
            ]
        }
    ];

    let card = ""

    attributeValue.forEach((item) => {
        var result = item.photos.map(item => ({ value: item.photo}));
        card += `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;" data-sku="${item.sku}" data-name="${item.name}" data-photos='${JSON.stringify(result)}'>
                    <img src="img1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.sku}</h5>
                        <p class="card-text">${item.name}</p>
        
        `

        item.photos.forEach((item) => {
            card += `
                <a href"${item.photo}">${item.photo}</a>
            `
        })

        card +=`
                    </div>
                </div>
            </div>
        `
    })

    $("#showData").append(card)

})


$("#send").click(function(){
    let value = [];
    $('.card').each(function(){
        let sku = $(this).data("sku");
        let name = $(this).data("name");
        let photos = $(this).data("photos");
    
        value.push({
            sku:sku,
            name:name,
            photos:photos.map(photo => photo.value),
        })
    })
    console.log((value));
})