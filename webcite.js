let i = 0; // set the counter's starting point
let citeArray = [];

let citer = {
	init: (target) => {
		citer.createArray();
		citer.writeToDOM(target);
	},
	createArray: () => {
		const cites = document.querySelectorAll("cite");
		cites.forEach( (cite) => { 
			let newObj = {
				date :  citer.checkUndefined(cite.dataset.date) ,
				dateRetrieved:  citer.checkUndefined(cite.dataset.dateretrieved),
				title: citer.checkUndefined(cite.dataset.title),
				sourcename:   citer.checkUndefined(cite.dataset.sourcename),
				source: citer.checkUndefined(cite.dataset.source),
				i: i
			}
			let duplicate = citer.checkDuplicates(newObj);
			if (duplicate === false) { //only push new instance if URL is different
					i = i + 1; //citations do not start at 0 & only update the index for new URLs
					newObj.i = i;
					citeArray.push(newObj);
			}
		});
	},
	checkUndefined : (cite) => {
		if (cite === undefined) {
			return "";
		} else {
			return cite;
		}
	},
	writeToDOM: (target) => {
		let compiledList = "";
		citeArray.forEach( (instance)  => {
			
			const subcite = `<a href="#cite${instance.i}">${instance.i}</a><a name="articleCite${instance.i}"></a>`;
			
			if (instance.dateRetrieved !== "" ) {
				instance.dateRetrieved = "<span class='dateRetrieved'>Date Retreived:</span>" + instance.dateRetrieved;
			}
			const citation = `<span class="citationItem"> ${instance.i}<a class="upArrow" href="#articleCite${instance.i}">&#9650;</a>  <a href="${instance.source}" target="_blank" id="cite${instance.i}">${instance.title}</a> ${instance.date} ${instance.dateRetrieved}</span>`
			compiledList = compiledList + citation;
			document.querySelectorAll(`[data-source="${instance.source}"]`).forEach( (cite)=> { //queryAll creates an array
				cite.insertAdjacentHTML('beforeend', subcite);
			});
		});
		document.querySelectorAll(target).forEach( (cite)=> { //queryAll creates an array
				cite.insertAdjacentHTML('beforeend', compiledList);
			});
	},
	checkDuplicates: (newObj) => {
    let duplicate = false;
		citeArray.forEach( (instance) => {
			if ( instance.source === newObj.source  ) {
				duplicate = true;
			}	
 	  });
		return duplicate;
	}
}
