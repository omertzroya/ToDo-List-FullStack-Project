
# ToDo List App

This is a ToDo list web application built with Express.js and PostgreSQL.



## Main Features
1.  Web Application with Express.js:
 The app is built using the Express.js framework, which is a popular web framework for Node.js. Express.js simplifies the process of building web applications and APIs.

1.  PostgreSQL Database Integration: 
The app uses a PostgreSQL database to store ToDo list items. It establishes a connection to the database and performs basic CRUD (Create, Read, Update, Delete) operations on the items table.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/omertzroya/ToDo-List-FullStack-Project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To run the application, use the following command:

```bash
npm install 
```

Visit `http://localhost:3000` in your web browser to access the ToDo list application.

## Database Configuration

Before running the application, make sure to configure the PostgreSQL database. Modify the following section in `app.js`:

```javascript
// database connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "YOUR_DATABASE_NAME",
  password: "YOUR_PASSWORD",
  port: 5432,
});
db.connect();
```

Replace `YOUR_DATABASE_NAME` and `YOUR_PASSWORD` with your PostgreSQL database name and password.


## Technology Used
<div>
\<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' alt='JavaScript'/>
<img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS3'/>
<img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML5'/>
<img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' alt='Node.js'/>
<img src='https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white' alt='Express'/> 
<img src='https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white' alt='SQL'/>
</div>

## Screenshots
<div style="display: flex; justify-content: space-between;">
    <div style="flex: 1; text-align: center;">
        <img src="Scrennshots/Screenshots1.png" width="300" alt="Screenshot 1">
       <img src="Scrennshots/Screenshots2.png" width="300" alt="Screenshot 2">
       
</div>


## Contributing

Feel free to contribute to the project by opening issues or creating pull requests. 

## License

![GitHub](https://img.shields.io/github/license/ItsAlexanderPopov/Simon-game)














