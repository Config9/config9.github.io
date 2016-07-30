---
ID: 5
post_title: >
  Building a Responsive Login Form with
  SASS and Compass in 5 steps
author: loitd
post_date: 2014-06-12 08:20:29
post_excerpt: |
  This is my first tutorial about SASS and I will make a simple example: Building a Responsive Login Form with SASS and Compass in 5 steps.
  
  Audiences:
  
  All web developers who begin to learn SASS & Compass and need a clear, easy to understand example.
layout: post
permalink: >
  https://config9.com/ui/building-responsive-login-form-with-sass-compass-5-steps/
published: true
dsq_thread_id:
  - "4981798685"
---
This is my first tutorial about SASS and I will make a simple example: <strong>Building a Responsive Login Form with SASS and Compass in 5 steps</strong>.

<strong>Audiences</strong>:

All web developers who begin to learn SASS &amp; Compass and need a clear, easy to understand example.

<strong>External resources</strong>:
<ul>
	<li>Sass: sass-lang.com</li>
	<li>Compass: compass-style.org</li>
	<li>Ruby: ruby-lang.org</li>
</ul>
<strong>Environment</strong>:
<ul>
	<li>OS: Windows</li>
</ul>
Download <a href="http://loitd.com/wp-content/uploads/2014/06/sass1.zip" target="_blank">Sourcecode</a>

<em><strong>SASS</strong></em> stands for <em>Syntactically Awesome Style Sheets</em>, which is an extension of <em><strong>CSS</strong></em>. It helps us making beautiful UI in less time by using variables, mixins, imports, … The browsers haven’t understood sass yet, they only understand css for sure. So after finishing style in <em><strong>SASS</strong></em>, we need to compile to make equivalent css files.

Compass is an open-source CSS framework that uses SASS.

First, I will make a login form with HTML, CSS, and I will build this form again using SASS and Compass. We will use Compass to compile SASS to CSS. This is what the form looks like:
<h2><a title="Form1 by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14546769012"><img class="aligncenter" src="https://farm4.staticflickr.com/3908/14546769012_92c9b738bf_o.png" alt="Form1" width="416" height="295" /></a>
Step 1: Directory Structure</h2>
<a title="DirStruct by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14361362947"><img class="aligncenter" src="https://farm4.staticflickr.com/3847/14361362947_d121279956_o.png" alt="DirStruct" width="359" height="513" /></a>

I made a folder name: sass1 for this project. Inside this folder I made 2 separated folders named: css and scss. The css folder for demo with css only. The scss folder for demo with scss.

You only have to make css folder manually. The scss folder will be created by compass command prompt.
<h2>Step 2: The common HTML file</h2>
Because the HTML parts of this tutorial are the same. We only need to make it once. Below is the html code (css/index.html and scss/index.html):
<pre class="lang:default decode:true " title="index.html file content">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Loitd CSS Manual&lt;/title&gt;
&lt;link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"&gt;
&lt;link href="style.css" rel="stylesheet"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;style type="text/css"&gt;

&lt;/style&gt;

&lt;div id="login"&gt;
&lt;h2 id="header"&gt;Loitd SASS Example 1&lt;/h2&gt;

&lt;form id="frm"&gt;
&lt;i class="fa fa-envelope-o"&gt;&lt;/i&gt;&lt;input type="text" name="email" placeholder="Email"&gt;
&lt;i class="fa fa-lock"&gt;&lt;/i&gt;&lt;input type="password" name="pwd" placeholder="Password"&gt;
&lt;input type="submit" value="Login" class="btn"&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
And we have this layout:

<a title="FormNoCSS by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14547820804"><img class="aligncenter" src="https://farm3.staticflickr.com/2925/14547820804_7e4ea51f48_o.png" alt="FormNoCSS" width="437" height="118" /></a>
<h2>Step 3: Decorating with CSS (css/style.css file)</h2>
<span style="line-height: 1.714285714; font-size: 1rem;">Now we fill the style.css with the code below:</span>
<pre class="lang:default decode:true " title="style.css file content">*{
margin: 0; padding: 0;
}

div#login {
width: 400px;
margin: 0 auto;
margin-top: 50px;
}

h2#header {
text-align: center;
padding: 20px 0px;
background-color: #37a;
color: white;
font-weight: normal;
}

form#frm {
background-color: #f1f1f1;
padding: 5% 5%;
}

input[type="text"], input[type="email"], input[type="password"] {
width: 81%;
padding: 4% 4% 4% 15%;
border: 1px solid #ccc;
font-size: 95%;
margin-bottom: 4%;
}

input.btn {
width: 100%;
background: #39a;
border: 0;
padding: 4%;
font-size: 100%;
color: #fff;
}

i.fa {
position: absolute;
padding: 16px;
color: #AAA;
}
input:-webkit-autofill{
background-color: #fff;
}</pre>
&nbsp;

The css is so simple and easy to understand. Save the file and run the css/index.html we have the layout like this:

<a title="Form1 by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14546769012"><img class="aligncenter" src="https://farm4.staticflickr.com/3908/14546769012_92c9b738bf_o.png" alt="Form1" width="416" height="295" /></a>
As I showed you at the beginning of this article.
<h2>Step 4: Installing Compass in Windows</h2>
First go to ruby-lang.org/download to download &amp; install the appropriate version for the Windows (this is our environment).

After that, open command prompt and run the following command:
<code>Gem update –system
Gem install compass</code>

Change directory to the sass1 root folder and run this command
<code>Compass create scss</code>

Compass will automatically create the scss project (in scss folder) with the following file &amp; folder structure:

<a title="SassNewCreateStruct by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14362946730"><img class="aligncenter" src="https://farm3.staticflickr.com/2896/14362946730_ca86f4a961_o.png" alt="SassNewCreateStruct" width="369" height="194" /></a>
To make the compass framework automatically compiles and detect changes in this project, in the command prompt, type the following command:
<code>Cd cscc
Compass watch</code>

Any changes in the sass folder to the file scss will be detected
<a title="compass.watch.console.window by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14569746203"><img class="aligncenter" src="https://farm4.staticflickr.com/3908/14569746203_450996ff25_o.png" alt="compass.watch.console.window" width="604" height="94" /></a>
Create the folder breakpoints and partials inside scss/sass folder and some file to make the following structure
<a title="DirStruct by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14361362947"><img class="aligncenter" src="https://farm4.staticflickr.com/3847/14361362947_d121279956_o.png" alt="DirStruct" width="359" height="513" /></a>
<h2>Step 5: Filling with styles</h2>
Because we will build a responsive login form, so we will define layout for the different screen dimensions and media types. In the sass/style.scss, we paste the following code:
<pre class="lang:default decode:true" title="style.scss file content">/*Reset from compass core*/
@import "compass/reset";
/*Import color variables*/
@import "partials/colors";
/*Import all fucntions*/
@import "partials/functions";
/*Set layout for screen &gt;= 481px*/
@media only screen and (min-width: 481px) {
@import "breakpoints/481up";
}
/*Set layout for screen &gt;= 1030px*/
@media only screen and (min-width: 1030px) {
@import "breakpoints/1030up";
}
/*Set layout for print media*/
@media print {
@import "breakpoints/print";
}</pre>
The code is so clear with all the comments in-line. The compass framework provides the reset code, so we don’t have to write long, traditional reset in sass code. But as you guess, the long and well-known reset css will be in the compile file: stylesheets/style.css.

Let’s copy the code for each partial file here:

<strong>File: sass/breakpoints/_1030up.scss</strong>
<pre class="lang:default decode:true" title="_1030up.scss file content">div#login {
width: 400px;
margin: 0 auto;
margin-top: 50px;
}

h2#header {
text-align: center;
padding: 20px 0px;
background-color: #37a;
color: $white;
font-weight: normal;
}

form#frm {
background-color: $loginbox-gray;
padding: 5% 5%;
}

input[type="text"], input[type="email"], input[type="password"] {
width: 81%;
padding: 4% 4% 4% 15%;
border: 1px solid #ccc;
font-size: 95%;
margin-bottom: 4%;
}

input.btn {
width: 100%;
background: #39a;
border: 0;
padding: 4%;
font-size: 100%;
color: $white;
}

i.fa {
position: absolute;
padding: 16px;
color: #AAA;
}

input:-webkit-autofill{
background-color: $white;
}</pre>
<strong>File: sass/breakpoints/_481up.scss</strong>
<pre class="lang:default decode:true " title="_481up.scss">div#login {
width: 200px;
margin: 0 auto;
margin-top: 25px;
}

h2#header {
text-align: center;
padding: 10px 0px;
background-color: #37a;
color: $white;
font-weight: normal;
}

form#frm {
background-color: $loginbox-gray;
padding: 5% 5%;
}

input[type="text"], input[type="email"], input[type="password"] {
width: 81%;
padding: 4% 4% 4% 15%;
border: 1px solid #ccc;
font-size: 95%;
margin-bottom: 4%;
}

input.btn {
width: 100%;
background: #39a;
border: 0;
padding: 4%;
font-size: 100%;
color: $white;
}

i.fa {
position: absolute;
padding: 8px;
color: #AAA;
}

input:-webkit-autofill{
background-color: $white;
}
</pre>
<strong>File: sass/partials/_colors.scss</strong>

<code>$black: #323944;
$white: #ffe;</code>

Let the _print.scss and _functions.scss empty as we don’t style for printing and have no function to import in this example.

We see that the _481up.scss and _1030up.scss file are the same except some element’s sizes are changed.

Have a look at _1030up.scss we find that h2#header color property has been defined with $white variable:

color: $white;

the $white variable is defined in the _colors.scss which had been imported into main style.scss file before.

Have a look at the opened command prompt at which we run the “compass watch” command, we see that all the changes we made has been registered and there are compiled file named style.css in the stylesheets folder.

Now just make a little fix for scss/index.html file:

We use the stylesheets/style.css instead of style.css so we will modify the location.

Replace the line

<em>&lt;link href="style.css" rel="stylesheet"&gt;</em>

With this line:

<em>&lt;link href="stylesheets/style.css" rel="stylesheet"&gt;</em>

All done! We will have the decorated login form like this:

<a title="Final.Login.Form.1030 by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14363334270"><img class="aligncenter" src="https://farm4.staticflickr.com/3860/14363334270_b2d1d018bd_o.png" alt="Final.Login.Form.1030" width="670" height="393" /></a>
For smaller screen:
<a title="Final.Login.Form.481 by Tran Duc Loi, on Flickr" href="https://www.flickr.com/photos/60375584@N05/14363334310"><img class="aligncenter" src="https://farm6.staticflickr.com/5033/14363334310_5942140d6e_o.png" alt="Final.Login.Form.481" width="271" height="265" /></a>