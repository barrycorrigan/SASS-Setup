# My SASS setup

This is my SASS setup for new projects. In version 3 of Sass, the SCSS (Sassy CSS) syntax was introduced as "the new main syntax" for Sass and builds on the existing syntax of CSS. I feel more comfortable with this syntax.

#### Include this in the head of your project

~~~
<link rel="stylesheet" href="css/main.css">
~~~

# Editing SASS

Please avoid making any changes directly to main.css as these will be overwritten by the SASS in the /scss folder when compiled.

# Compiling SASS

You can compile SASS with many different tools. My preferred tool is by using grunt. There is a `gruntfile.js` included in this project I won't go into detail about how to set up grunt as there are a lot of good tutorials out there

Here are a few that got me going

- http://ryanchristiani.com/getting-started-with-grunt-and-sass/
- http://www.wearejh.com/development/frontend-automation-with-grunt-sass-browsersync/
- https://css-tricks.com/video-screencasts/130-first-moments-grunt/

Simply open terminal navigate to your project and type `grunt` but make sure you have `Node.js` and `npm` installed then add all the relevant dependencies

# Future

I will be updating this as I move forward, watch this space :-)
