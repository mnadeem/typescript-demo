# typescript-demo
[Typescript](http://www.typescriptlang.org/) Integration with Grunt, Karma and Jasmine.

### DIRECTORY Structure ###
---

* __app/src__ ==> contains typescript files + this is where generated javascript would be kept
* __app/styles__ ==> contains your stylesheets
* __app/images__ ==> contains your images
* __build__ ==> contains files related to grunt/build
* __vendor__ ==> Client side dependencies would reside here
* __dist__ ==> Concatenated, Compiled, Comressed files would reside here, it should be copied to your web server


### Usage ###
---
Just do the following and see the magic

	grunt serve
	
Or

	grunt build
	http-server dist



