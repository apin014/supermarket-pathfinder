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
A more advisable way to serve the app is by creating a production build, run this command:
```
npm run build
```
This command will also create a `build` directory inside the `application` directory
To serve it, install the `serve` production server globally on your machine:
```
npm install -g serve
```
Finally, execute this command to serve the app:
```
serve -s build
```