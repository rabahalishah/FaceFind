
# About the Project


## FaceFind
FaceFind is a full stack web application that utilizes a powerful face detection model of Clarifai API to detect human faces from user-provided images via link. With its user-friendly interface and efficient backend, this app allows users to effortlessly detect and analyze faces in various images. 
This app also have its own database made in PostgreSQL (RDBMS). All users info will be stored in it.
## Features
#### Face Detection: 
The core functionality of the web app is its ability to detect human faces from images. By utilizing state-of-the-art face detection algorithms, the app accurately identifies faces and highlights them for easy visualization.

#### Image Link Support: 
Users can provide the web app with an image link from any online source, allowing them to analyze faces in images without the need for local file uploads. This feature enhances convenience and expands the app's usability.

#### Responsive Design: 
The web app is a single page application and designed in React to be fully responsive, ensuring seamless user experience across different devices and screen sizes. Whether accessed from a desktop computer, tablet, or smartphone, the app will adapt to the user's device, providing an optimal viewing and interaction experience.

#### Robust Backend: 
The web app employs a robust backend architecture that efficiently handles user requests and processes image data. The integration with the [Clarifai](https://www.clarifai.com) face detection model API ensures fast and accurate results, even when dealing with large image files.


## Signin Page

![App Screenshot](https://github.com/rabahalishah/FaceFind/assets/117630286/f8d7344d-4e52-4366-bf60-4195aec210ae)

## Register Page

![App Screenshot](https://github.com/rabahalishah/FaceFind/assets/117630286/c53fdb5c-5661-489c-985a-4be1f99dee37)

## Home Page

![App Screenshot](https://github.com/rabahalishah/FaceFind/assets/117630286/0188aa70-7ea6-4050-97d5-d5681b5b7f98)

## Detecting Face

![App Screenshot](https://github.com/rabahalishah/FaceFind/assets/117630286/7589719e-f965-4925-a783-86464291fa55)


## Built With
### Front-End
<img src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/reactlogo_4.png?itok=LXFHZrKJ" width="250"/>

### Back-End
<img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png" width="250"/>
<img src="https://testrigor.com/wp-content/uploads/2023/01/express-logo.png" width="250"/>

### Database
<img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.png" width="250"/>



# Getting Started
Following are some easy steps you have to follow to run this project in your machine
## Prerequisites
* Install [Node](https://nodejs.org/en/download)
* Install [PostreSQL](https://www.postgresql.org/download/)

  

## Installation

1. Fork this Repo
2. Clone this repo

```bash
  git clone https://github.com/github_username/repo_name.git
```
3. Simply Run
```bash
  npm install
  
```
4. It is recommended to install nodemon before starting the app as nodemon is added in the script tag of package.json file
```bash
  npm install nodemon
  npm start
```
### Note
This should be noted that the backend also inlcude the database script using knex.JS. To get the data from the users you must to connect the backend with the your database (PostgreSQL).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
```bash
  git checkout -b feature/AmazingFeature
```
3. Commit your Changes 
```bash
  git commit -m 'Add some AmazingFeature'
```
4. Push to the Branch 
```bash
  git push origin feature/AmazingFeature
```
5. Open a Pull Request


## Contact
Rabah Ali Shah - Software Developer
- https://www.linkedin.com/in/rabah-ali-shah-774706202 
- muhammadrabah.ali46@gmail.com
