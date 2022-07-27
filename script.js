var requestUrl = ('https://app.pixelencounter.com/api/basic/svgmonsters/{21567756}/json?fillType=3', {mode: "cors"});

fetch(requestUrl, {
    method : "GET",
    mode: 'cors',
    
})

.then(function (response) {
    console.log(response);
return (response.json());
}).then(function(data) {
    console.log(data);
    
});