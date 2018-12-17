# Web&lt;cite>
a dependency free, ultra-lightweight, easy to use javascript citation list creator.

## Why?

This project started out while writing an article for a company blog using web sites as sources. HTML5 (now just ol' HTML) spec includes the `<cite>` tag but it's not very useful as a list of references/citations becomes pretty unwildly as one edits an article. This brings sanity as each citation can be posted at the point in the article includes.

When I glanced at other libraries, they were capable of doing full bibliographical citations in the various academic formats like AMA, Chicago, JM  and so on, like citeproc-js, or requiring additional JSON to be included, all powerful and useful but wanton overkill for my meager needs of my employer's blog and my own personal blog.

I didn't see a simplistic solution so I wrote one.

## Current Features

*Generate a list from all the citations found within the article.
*Detect multiple instances of the same source.
*Number each <cite> instance, if used before, use the previous instance's number.
*Use anchor tags to link to the source at the bottom of the page a div at the specification
*No jQuery
  
## Planned Features

*Code fixes
*Demo files
*ES5 & ES6 variants
*Source Name
*Date Retrieved vs Article Date published
*Repository contains minified distribution ready code
*Multiple citiation lists on the same page (multi-article support)
*Optional demo Scss/CSS stylings 

## Maybe features

*Auto-Initalization (Just link/bundle the JS and script auto inits with defaults)
*Hover support
*None Website citations


## Usage

Currently, the JS file can be linked or bundled with your current JS

https://codepen.io/fuzzywalrus/pen/eee9dbfc406593977d67ce0562b70950
