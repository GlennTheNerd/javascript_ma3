//Console.log out elements in JSON file
var jsonFile = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};

jsonFile.video.forEach((video) => {
    console.log('Id', video.id);
    console.log('Name', video.name);
    console.log('Url', video.url);
    console.log('Author', video.author)
    video.author.data.forEach((authorData) => {
        console.log('Author', authorData.name_author);
        console.log('Author url', authorData.url);
        console.log('Author type', authorData.type);
    });
    
});



/*
let output = "";

console.log(jsonFile);

// Ecma6
jsonFile.video.forEach(() => {})

// standard old
for (let x = 0; x < jsonFile.video.length; x++) {

}

for (key in jsonFile.video) {
    if (jsonFile.video.hasOwnProperty(key)){
        output = jsonFile;
    };
};

console.log(output);*/