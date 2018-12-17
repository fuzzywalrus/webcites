let i = 0; // set the counter's starting point
let citeArray = [];

let citer = {
	init: (target) => {
		citer.createArray();
		citer.writeToDOM(target);
	},
	createArray: () => {
		const cites = document.querySelectorAll("cite");
		//console.log("createArray cites")
		//console.log(cites)
		cites.forEach( (cite) => { //fat arrow make jQuery this goof
			let newObj = {
				date :  cite.dataset.date,
				title: cite.dataset.title,
				source: cite.dataset.source,
				i: i
			}
			console.log(newObj);
			let duplicate = citer.checkDuplicates(newObj);
			if (duplicate === false) { //only push new instance if URL is different
					i = i + 1; //citations do not start at 0 & only update the index for new URLs
					newObj.i = i;
					citeArray.push(newObj);
			}
		});
	},
	writeToDOM: (target) => {
		let compiledList = "";
		citeArray.forEach( (instance)  => {
			const subcite = `<a href="#cite${instance.i}">${instance.i}</a>`;
			const citation = `<span><a href="${instance.source}" id="cite${instance.i}">${instance.i} ${instance.title}</a> ${instance.date}</span>`
			//console.log(`citation: ${citation}`)
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
