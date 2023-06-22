import { Link } from "react-router-dom";
import Title from "../../Hook/Title";
import { FaChevronRight } from "react-icons/fa";

const Blog = () => {
    Title('Blog')
    return (
        <div>
            <h2 className="hero p-10 font-extrabold text-5xl" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/autumn-leaves-background_23-2148619742.jpg?w=740&t=st=1684563349~exp=1684563949~hmac=14fa213af2be59091519351229b1949bdd90bcea70ac7e038f90228de0304184")` }}>Blog Section</h2>
            <div className="bg-[#feefb186] p-10">

               
                <p className="shadow-xl bg-white p-5 rounded-xl"> <span className="font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</span>
                <hr />
                <br />
                Access Token: An access token is a credential that is issued by an authentication server after a client successfully authenticates.Access tokens typically have a limited lifespan and expire after a set period.
                <br />
                <br />
                Refresh Token: A refresh token is a long-lived credential that is also issued by the authentication server along with the access token. While access tokens have a short lifespan, refresh tokens are used to obtain new access tokens without requiring the client to re-authenticate. When an access token expires, the client can use the refresh token to request a new access token from the authentication server.
<br />
<br />
Access tokens should be stored securely on the client-side to prevent unauthorized access. It is typically stored in memory or local storage. Storing the access token in memory (e.g., within the application state or a variable) is generally more secure as it is not accessible to other websites or scripts. However, it will be lost if the page is refreshed or the browser is closed.
<br />
<br />
Refresh tokens are more sensitive and long-lived than access tokens, so they require stronger security measures. Refresh tokens should be stored in a secure HTTP-only cookie, which helps protect them against cross-site scripting (XSS) attacks. Storing the refresh token in an HTTP-only cookie ensures that it is sent automatically with each request, without being accessible to JavaScript code running on the client-side.
<hr />
<br />


                </p>

<p className="shadow-xl bg-white p-5 rounded-xl my-10">
<span className="font-semibold">2. Compare SQL and NoSQL databases?</span>
<hr />
<br />
SQL
<br />
Stands for Structured Query Language
<br />
Relational database management system (RDBMS)
<br />
Suitable for structured data with predefined schema	
<br />
Data is stored in tables with columns and rows	
<br />
Follows ACID properties (Atomicity, Consistency, Isolation, Durability) for transaction management	
<br />
Supports JOIN and complex queries	
<br />
Uses normalized data structure	
<br />
Requires vertical scaling to handle large volumes of data	
<br />
Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server	
<br />
<br />
NoSQL
<br />
Stands for Not Only SQL

<br />
Non-relational database management system

<br />
Suitable for unstructured and semi-structured data

<br />
Data is stored in collections or documents

<br />
Does not necessarily follow ACID properties

<br />
Does not support JOIN and complex queries

<br />
Uses denormalized data structure
<hr />
<br />
</p>

<p className="shadow-xl bg-white p-5 rounded-xl mb-10">
<span className="font-semibold">3. What is express js? What is Nest JS?</span>
<hr />
<br />
Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js allows developers to handle various HTTP requests, define routes, manage middleware functions, and interact with databases and other resources. It has a lightweight core and offers a wide range of community-developed middleware and extensions, making it popular for building server-side applications.
<br /> 
<br /> 
NestJS, on the other hand, is a framework for building scalable and maintainable server-side applications. It is built on top of Express.js and leverages TypeScript, a statically-typed superset of JavaScript, to enhance developer productivity and code maintainability. NestJS follows the architectural pattern known as "Model-View-Controller" (MVC) and provides a modular structure for building applications. It offers features such as dependency injection, decorators, middleware, and a powerful CLI (Command Line Interface) for generating boilerplate code and managing project structure. NestJS is often used for building complex and enterprise-grade applications.
<hr />
<br />
</p>

<p className="shadow-xl bg-white p-5 rounded-xl mb-10">
<span className="font-semibold">4. What is express js? What is Nest JS?</span>
<hr />
<br />
Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is known for its minimalist approach, allowing developers to create robust and scalable web applications with less overhead. It provides a set of features for handling routes, requests, responses, middleware, and more. With Express.js, developers have the freedom to structure their application as they see fit and integrate additional libraries or tools as needed.
<br />
<br />
Nest.js, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. Nest.js takes inspiration from Angular, leveraging TypeScript as its primary language and adopting a modular architecture. It aims to provide a structured and opinionated framework for building enterprise-grade applications. Nest.js focuses on the concept of modules, decorators, and dependency injection, making it easy to create reusable and testable components. It also provides out-of-the-box support for features like routing, validation, authentication, caching, and more.
<hr />
<br />
</p>

<div className="text-center">
<Link to='/' className="bg-orange-600 p-3 rounded-lg inline-flex items-center gap-2 hover:bg-black duration-500 font-medium hover:text-white">Back to Home <FaChevronRight/></Link>
</div>


            </div>
        </div>
    );
};

export default Blog;