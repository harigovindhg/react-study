### Igniting Our React App
We can create our package.json, which is a configuration file for the node packages we will use in our React App.

We initiate the configuration using the below command:
```
npm init
```
which generates the package.json file for us.

The most important package for our React project is a 'bundler', like Parcel, Webpack, Wheat etc.
Install Parcel with this command

```
npm install -D parcel
```

There are 2 types of depencies we can have for our app:
	1. Dev Dependencies
		 dependencies we use during development
	2. Normal Dependencies
		dependencies we will have in production

**The `-D` we are using during npm install means that Parcel (any package that we are adding) will be added as a Dev dependency**

**Note**: In the package.json we can see sometimes `^ (caret)` and `~ (tilde)` next to the version of the package.
The difference between the 2 is that **`^` will automatically upgrade the package to the next available MINOR version, whereas `~` automatically upgrades the package to the next available MAJOR version**

package.json will have only the version of the node module, with the `^` next to it.
package-lock.json will have the exact version locked in for use in the project, and its details, including integrity hashes, sub-dependencies of the package we are using, etc.

#### Transitive Dependencies
A node module can have its own dependencies, and the sub dependencies can have its own dependencies, and so on and so forth. This tree of dependencies is called transitive dependencies.

Node modules can get quite chunky (large in size), and we absolutely do not want it to go to production, or to the git. 
To omit this file during our packaging, and pushing to github, we will create a `.gitignore` file.

```
.gitignore

	/node_modules
```

#### Igniting our React App

`npx parcel <core_fileName>` lets parcel to bundle our project, and runs it on the localhost for us

`npx` means `node package execute`.

`npx parcel core_fileName` executes parcel and asks parcel to use our `core_filename` file as the root file.

Parcel packages our files in a production ready package, and hosts it on a local server, which basically makes our code production ready.

##### Features of Parcel
1. Creating Dev build of codebase
2. Hosting to Local Server
3. **HMR** - Hot Module Replacement - As soon as changes are made to the code, parcel repackages the code and reruns the server.
4. Parcel achieves this using a File Watching Algorithm which is written in C++
5. Caching
6. Image Optimization
7. Minification
8. Compress
9. Content Hashing - **need to study about this**
10. Code Splitting - **need to study about this**
11. Differential Bundling - Browser specific bundling, creates a nomodule when `<script type="module">` is given
12. Diagnostics
13. Error Handling and Error Suggestions
14. HTTPS hosting
15. Tree Shaking - removes unused code
16. Transpiling

##### Running parcel to create a production build

`npx parcel build corefile_name`
**Note:** remove App.js as the main file from package.json, to allow the build to be successful


##### Browserslist

This is a node module which the user can use to specify the browsers which can run our code/webpage.

we will use it in our package.json

Sample Syntax:
```
"browserslist": [
"Last 2 Chrome versions",
"Last 2 Firefox versions"
]
```

This list specified means that our code will 100% work on the mentioned list, for rest of the browsers, there is no 100% guarantee from our end, that the webpage will load without any issues.

