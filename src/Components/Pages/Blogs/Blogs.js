import React from "react";

const Blogs = () => {
  return (
    <div className="m-5">
      <h1 className="text-center uppercase lg:text-4xl text-xl font-bold my-4">
        Learn MongoDb
      </h1>
      <div>
        <h2 className="lg:text-2xl font-semibold capitalize my-2 ">
          1.what are the different between SQL and NOSQL ?
        </h2>
        <p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="">
                <tr>
                  <th>SQL</th>

                  <th>NOSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td>Non-relational or distributed database system.</td>
                </tr>
                <tr>
                  <td>
                    These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    These databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                <tr>
                  <td>These databases are best suited for complex queries</td>
                  <td>These databases are not so good for complex queries</td>
                </tr>
                <tr>
                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
                <tr>
                  <td>
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                  </td>
                  <td>
                    Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </p>
      </div>
      <div>
        <h2 className="lg:text-2xl font-semibold capitalize my-4">
          2.What is JWT, and how does it work?
        </h2>
        <p>
          {" "}
          <span className="font-bold uppercase">jwt:</span>JWTs or JSON Web
          Tokens are most commonly used to identify an authenticated user. They
          are issued by an authentication server and are consumed by the
          client-server (to secure its APIs).{" "}
        </p>
        <p>
          Authentication server verifies the credentials and issues a jwt signed
          using either a secret salt or a private key. User's Client uses the
          JWT to access protected resources by passing the JWT in HTTP
          Authorization header. Resource server then verifies the authenticity
          of the token using the secret salt/ public key.
        </p>
      </div>

      <div>
        <h2 className="lg:text-2xl font-semibold capitalize my-4">
          3.What is the difference between javascript and NodeJS?
        </h2>
        <p>
          <table className="table w-full">
            <thead className="">
              <tr>
                <th>JAVASCRIPT</th>

                <th>NODEJS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Javascript is a programming language that is used for writing
                  scripts on the website.{" "}
                </td>
                <td>NodeJS is a Javascript runtime environment..</td>
              </tr>
              <tr>
                <td>Javascript can only be run in the browsers.</td>
                <td>
                  We can run Javascript outside the browser with the help of
                  NodeJS
                </td>
              </tr>
              <tr>
                <td>It is basically used on the client-side.</td>
                <td>It is mostly used on the server-side.</td>
              </tr>
              <tr>
                <td>
                  Javascript is capable enough to add HTML and play with the
                  DOM.{" "}
                </td>
                <td>Nodejs does not have capability to add HTML tags.</td>
              </tr>
              <tr>
                <td>
                  It is the upgraded version of ECMA script that uses Chrome’s
                  V8 engine written in C++.
                </td>
                <td>Nodejs is written in C, C++ and Javascript.</td>
              </tr>
            </tbody>
          </table>
        </p>
      </div>

      <div>
        <h2 className="lg:text-2xl font-semibold capitalize my-4">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
