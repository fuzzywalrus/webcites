# Web&lt;cite>
a dependency free, ultra-lightweight, easy to use javascript citation list creator, inspired by Wikipedia.
[Project site](https://fuzzywalrus.github.io/webcites/)

## Why?

This project started out while writing an article for a company blog using web sites as sources. HTML5 (now just ol' HTML) spec includes the `<cite>` tag but it's not very useful as a list of references/citations becomes pretty unwieldy as one edits an article. This brings sanity as each citation can be posted at the point in the article includes.

When I glanced at other libraries, they were capable of doing full bibliographical citations in the various academic formats like AMA, Chicago, JM  and so on, like citeproc-js, or requiring additional JSON to be included, all-powerful and useful but wanton overkill for my meager needs of my employer's blog and my own personal blog.

I didn't see a simple solution, so I wrote one. Currently is under 2kb.

## Current Features (the manifesto)

* Generate a list from all the citations found within the article.
* Detect multiple instances of the same source.
* Number each `<cite>` instance, if used before, use the previous instance's number.
* Uses anchor tags to link to the source at the bottom of the page to a specified div
* No jQuery
* Very easy to use

## Planned Features

* Code fixes and some basic error checking
* MORE DOCUMENTATION!
* Demo files
* Author (optional)
* Repository contains minified distribution ready code
* Multiple citation lists on the same page (multi-article support)
* Optional demo Scss/CSS stylings
* Generate as an ordered list instead of spans

## Completed
* ~~Source Title (optional)~~
* ~~Date Retrieved (optional)~~
* ~~Arguments passed in an object for better configuration~~
* ~~CSS attributes for each property so lists can easily be customized~~
* ~~Date Retrieved vs Article Date published~~
* ~~ES5 & ES6 variants~~


## Maybe features

* Auto-Initializing (Just link/bundle the JS and script auto inits with defaults)
* Hover support
* Non-Web citations
* Custom Domain?


## Usage

Currently, the JS file can be linked or bundled with your current JS.  The ES5 transpiled version can be found in the dist folder.

Citations use  with multiple data values:

`<cite data-source=""data-title=""></cite>`

**source:** This is the URL and is **required**.

**title:** This is the name that article is **required**

**date:** Optional (accepts string)

**sourcename:** Optional (accepts string)

**dateretreived:**  Optional (accepts string)


### Example of filled out tag

`<cite data-source="https://www.cnet.com/news/netscape-cuts-prices-on-retail-products" data-date="01/30/98" data-title=" Netscape cuts prices on retail products" data-sourcename="Cnet.com" data-dateretrieved="11/01/18"></cite>`

### Initializing the Script

Currently, webcites requires the script to be initialized.

`citer.init();`

### Configuration


#### target
Accepts a string, used for the citation list.

By default looks for a div with the id tag of `#citations`. To change the target you need to pass in an object:

```
citer.init({
  target: ".mydestination"
});
```



####  citicon
Accepts a string, can use HTML or a Unicode/HTML code  

The default link uses a triangle ▲ (html code &#9650;) but this can be switched to your own HTML or another unicode:

Example:

```
citer.init({
  target: ".mydestination",
  citicon: "<img src='/src/myicon.png'>"
});
```


### Demo

https://codepen.io/fuzzywalrus/pen/eee9dbfc406593977d67ce0562b70950
