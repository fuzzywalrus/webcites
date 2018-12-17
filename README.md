# Web&lt;cite>
a dependency free, ultra-lightweight, easy to use javascript citation list creator, inspired by Wikipedia.

## Why?

This project started out while writing an article for a company blog using web sites as sources. HTML5 (now just ol' HTML) spec includes the `<cite>` tag but it's not very useful as a list of references/citations becomes pretty unwildly as one edits an article. This brings sanity as each citation can be posted at the point in the article includes. 

When I glanced at other libraries, they were capable of doing full bibliographical citations in the various academic formats like AMA, Chicago, JM  and so on, like citeproc-js, or requiring additional JSON to be included, all powerful and useful but wanton overkill for my meager needs of my employer's blog and my own personal blog.

I didn't see a simplistic solution so I wrote one.

## Current Features (the manifesto)

* Generate a list from all the citations found within the article.
* Detect multiple instances of the same source.
* Number each `<cite>` instance, if used before, use the previous instance's number.
* Uses anchor tags to link to the source at the bottom of the page to a specificatied div
* No jQuery
* Very easy to use
  
## Planned Features

* Code fixes
* Arguments passed in as object for better configuration
* Demo files
* ES5 & ES6 variants
* Source Name (optional)
* Date Retrieved vs Article Date published
* Repository contains minified distribution ready code
* Multiple citiation lists on the same page (multi-article support)
* Optional demo Scss/CSS stylings 
* Generate as an ordered list instead of html

## Maybe features

*Auto-Initalization (Just link/bundle the JS and script auto inits with defaults)
*Hover support
*Non-Web citations


## Usage

Currently, the JS file can be linked or bundled with your current JS.  

Citations use  with three data values:

`<cite data-source="" data-date="" data-title=""></cite>`

**Source:** This is the URL and is required.
**Title:** This is the name that article
**Date:** Optional (accepts whatever format you prefer)

### Example of filed out tag

`<cite data-source="https://www.cnet.com/news/netscape-cuts-prices-on-retail-products" data-date="01/30/98" data-title="Cnet - Netscape cuts prices on retail products"></cite>`

### Initializing the Script

Currently, webcites requires the script to be initialized and a destiation target for the generated citations to be listed in. The init script currently only accepts a single argument (soon to change).

`citer.init("#citations");`

### Demo

https://codepen.io/fuzzywalrus/pen/eee9dbfc406593977d67ce0562b70950
