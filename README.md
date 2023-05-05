# supermarket-pathfinder
a simple pathfinder/wayfinder web app used within a supermarket
<br>
To use this app, clone this repository using this command:

```
git clone https://github.com/apin014/supermarket-pathfinder.git
```

When it's done cloning, navigate to the `application` directory of the repository:

```
cd supermarket-pathfinder/application
```

Afterwards, install all the dependencies using `npm` (make sure that you have `npm` installed already):

```
npm install
```

Finally, you can start a development server using the command:

```
npm start
```

<br>

A better, more advisable way to serve the app is by building a production server
To do that, we can start by running this command:

```
npm run build
```

This will compile a production build of the app and a new directory named `build` can be seen under the `application` directory
Then we can install a production server using this command:

```
npm install -g serve
```

This will install a production server globally on your machine
Finally, to serve the app, we use this command:

```
serve -s build
```
