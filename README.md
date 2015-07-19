# exercise program
<div>My exercise program</div>
<div>The purpose of this program is to give a vegetarian user a workout routine and meal plan depending on their goals and experience.</div>
# JQuery 
jQuery is a javascript library with lots of nice functions that are already coded for us. All you gotta do is include it in your HTML file: 

	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">

This is how you start using it: 

- `$` is the same as typing `jQuery.(“”);`Between those "" you are going to reference your html. Such as your ID's, Classes or HTML. 
- You can call ID’s in jQuery by using the `#` sign. 
- You can also call methods to your code such as: `$(#my-teaser).html()` which will return the html inside the `my-teaser` ID. 

## What is mustache templates? 

Every part you want to be dynamic, wrap in double “mustaches” {{}}. By dynamic, I mean its going to change. Every new card we make will have a new {{image}} and new {{cast}} and a new {{teaser}}.

	<div  class=“card” style=“background-image: url({{image}})”>
	    <div  class=“cast”>{{cast}}</div>
	    <div  class=“teaser”>{{teaser}}</div>
	</div> 

When would you want to inline css or not? 
