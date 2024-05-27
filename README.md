# Nasza biblioteka

Nasza Biblioteka is my first fullstack project that I created on my own. School project I did on library management. This is web service that allows you to easily add, edit and remove books, authors and translators. I used spring boot with React as the stack technology.

## Requirements

1) Make sure you have Node.js installed. You can install Node.js directly from this link ```https://nodejs.org/en```
2) Make sure you have JDK 17 installed. You can install JDK directly from this link ```https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html```.
3) Make sure you have MySQL Workbench 8.0 installed. You can install Workbench directly from this link ```https://dev.mysql.com/downloads/installer/```
4) Install Volta shell to management your Node.js version. You can intsall Volta shell directly from this link ```https://volta.sh/```

## Instructions (step by step)

### API:

1) Open the MySQL Workbench and create a user with the ```username: root``` and ```password: _Ga03aY_```.
2) Create a new schema called ```library_db```
3) Start the application ```api/src/main/java/com.library.api/ApiApplication.java```. The database should be created automatically.
4) The application should run on the port ```http://localhost:8080```

### Frontend:

1) Open the cmd and navigate to the ```front``` directory.
2) Then run the command ```yarn``` or ```volta run yarn``` to install the necessary dependencies.
3) If everything goes well, run ```yarn dev``` or ```volta run yarn dev``` in the terminal. Before running the client side application, you must run the API application.
4) The application should run on the port ```http://localhost:5173```

## Technologies used:

Back-End:
* Java
* Spring
* Spring Boot
* Spring Data JPA
* MySQL
* Loombok
* ModelMapper

Front-End:
    
* React
* React Query
* React Router Dom
* i18next
* Axios
* Dayjs
* Sass
* TailwindCSS
* Ant Design
* GSAP
* Typescript
* Vite
* Prettier
* Eslint
