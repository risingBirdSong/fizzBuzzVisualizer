### fizzbuzzing

Inspired by Jeremy talking about students struggling with implementing fizz buzz; thought it would be interesting to visualize the fizzing and buzzing.

The fizzbuzz is visualized on the left and the code is represented on the right.

For a given number, the block of code that handles it is highlighted with the same color of the representation on the left hand side. This is done to help illustrate the relationship between the code block and the visual output.

## important!

Update! I got this high quality message that shows why local installs of typescript (or really any package) are preferred over global installs... wanted to save it here

"I recommend against using global packages ever, and definitely not for TypeScript in a TypeScript project. I recommend installing it as a local dev dependency in each project.
There are two reasons for this:

1. Turn key solution. User should be able to npm install and get everything they need without additional steps.
2. Versioning. If your project works with TypeScript 1.x it may not work with 2.x, or it may work 3.3 but not 3.5, etc. If the user just does npm install typescript they'll get latest, and if you require a specific version of TypeScript it may conflict with whatever version they already had installed globally.
   While the TypeScript folder is ~50MB on disk, NPM does local caching so for many users that isn't 50MB bytes on the wire, it is just a local disk copy in many cases. As a dev dependency, it shouldn't make it into any production bundles/builds. Overall, I think it is a bad idea to try to save 50MB on disk in exchange for versioning hell for developers."

## lessons :

parcel is an awesome bundler! so nice and easy! Only had one bug which was an issue of using async await, fixed with browserlist.

CSS Grid is awesome! Great to to finally play with it.

Learned much more about useEffect, a very useful hook!

The way i've made the code representation using raw jsx was a worthwhile exercise but is time consuming and can be done better / faster by automation. Learned about libraries like Prism.js specifically to solve this problem. Plan to use libraries like those on future projects.

deployed here ->
https://fizz-buzz-visualizer.vercel.app/
