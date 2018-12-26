let citeCount = 0; // set the citeCounter's starting point
let citeArray = [];


let webcites = {
	init: (newSettings) => {
		//config!
		let citeSettings = {
		 target: newSettings.target ? newSettings.target : "#citations",
		 citicon: newSettings.citicon ? newSettings.citicon : "&#9650;"
		}
		webcites.createArray();
		webcites.writeToDOM(citeSettings);

	},
	createArray: () => {
		//grab all the instances of the cite tag
		const cites = document.querySelectorAll("cite");
		cites.forEach( (cite) => { //fat arrow make jQuery this goof
			let newObj = {
				date :  webcites.checkUndefined(cite.dataset.date) ,
				dateRetrieved:  webcites.checkUndefined(cite.dataset.dateretrieved),
				title: webcites.checkUndefined(cite.dataset.title),
				sourcename:   webcites.checkUndefined(cite.dataset.sourcename),
				source: webcites.checkUndefined(cite.dataset.source),
				citeCount: citeCount
			}
			let duplicate = webcites.checkDuplicates(newObj);
			if (duplicate === false) { //only push new instance if URL is different
					citeCount = citeCount + 1; //citations do not start at 0 & only update the index for new URLs
					newObj.citeCount = citeCount;
					citeArray.push(newObj);
			}
		});
	},
	checkUndefined : (cite) => {
		// error checks if cite tag doesn't have properties
		if (cite === undefined) {
			return "";
		} else {
			return cite;
		}
	},
	writeToDOM: (citeSettings) => {
		// ugly templating, cycles through the array that was created and writes them to the page.
		let compiledList = "";
		citeArray.forEach( (instance)  => {
			const subcite = `<a href="#cite${instance.citeCount}" class="subCite">${instance.citeCount}</a><a name="articleCite${instance.citeCount}"></a>`;
			if (instance.dateRetrieved !== "" ) {
				instance.dateRetrieved = "<span class='citeDateRetrieved'>Date Retreived:</span>" + instance.dateRetrieved;
			}
			const citation = `<span class="citeItem"> ${instance.citeCount}<a class="citicon" href="#articleCite${instance.citeCount}">${citeSettings.citicon}</a>  <a href="${instance.source}" target="_blank" id="cite${instance.citeCount}">${instance.title}</a> ${instance.date} ${instance.dateRetrieved}</span>`
			compiledList = compiledList + citation;
			document.querySelectorAll(`[data-source="${instance.source}"]`).forEach( (cite)=> { //queryAll creates an array
				cite.insertAdjacentHTML('beforeend', subcite);
			});
		});
		document.querySelectorAll(citeSettings.target).forEach( (cite)=> { //queryAll creates an array
				cite.insertAdjacentHTML('beforeend', compiledList);
			});
	},
	checkDuplicates: (newObj) => {
		//makes sure that the citation doesn't already dexist.
    let duplicate = false;
		citeArray.forEach( (instance) => {
			if ( instance.source === newObj.source  ) {
				duplicate = true;
			}
 	  });
		return duplicate;
	}
}
