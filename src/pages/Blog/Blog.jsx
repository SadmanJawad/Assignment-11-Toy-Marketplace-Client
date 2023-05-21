import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog")
  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 shadow-sky-600 mb-5">
      <div className="bg-sky-100">
        <h1 className="bg-sky-300 font-bold text-lg">
          Q-1: What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          Access tokens and refresh tokens are integral components of
          authentication and authorization systems commonly used in web
          applications and APIs. An access token serves as a credential to
          access secured resources, such as APIs or web services. On the other
          hand, a refresh token acts as a credential that allows obtaining a new
          access token without the need for the user or application to undergo
          re-authentication.
        </p>
        <p>
          Access tokens have a finite lifetime and are used in resource access
          requests, while refresh tokens have a longer lifetime and are used to
          get new access tokens when they expire. When it comes to storing
          access tokens, a common method is to store access tokens only during
          the client session in temporary storage, e.g. B. in memory or in a
          short-term mechanism to store. This ensures that the access token
          remains available as long as the user is actively using the
          application. Similar to for storing refresh tokens, it is recommended
          to store refresh tokens in a secure HTTP-only cookie or local storage
          provided by the client environment. This approach helps protect the
          refresh token from unauthorized access by malicious JavaScript code
          and reduces the risk of cross-site scripting (XSS) attacks.
        </p>
      </div>
      <div>
        <h1 className="bg-sky-300 font-bold text-lg">Q-2: Compare SQL and NoSQL databases?</h1>
        <p>
          SQL databases can be scaled up, which means they can handle a larger
          load by adding more resources to a single server. NoSQL databases, on
          the other hand, are designed to scale, which means the database is
          spread across multiple servers to handle larger amounts of data and
          traffic. SQL databases organize data in tables while NoSQL databases
          support different data models like document storage, key values,
          charts or wide columns.
        </p>
        <p>
          When comparing SQL and NoSQL databases, there are several key
          differences. SQL databases use a structured data model based on tables
          with fixed schemas and predefined structures. In contrast, NoSQL
          databases offer a more flexible data model that can be document-based,
          key-value pair-based, column-based, or chart-based. In terms of
          schema, SQL databases require a standard schema that dictates the
          structure of the data. On the other hand, NoSQL databases are
          schema-free or flexible, which allows for easier management of dynamic
          and scalable data structures.When it comes to scalability, SQL
          databases traditionally scale, meaning they are optimized to run on a
          single server with increased hardware resources. NoSQL databases, on
          the other hand, are designed for horizontal scalability. You can
          distribute data across multiple servers and efficiently run large
          applications.
        </p>
      </div>
      <div>
        <h1 className="bg-sky-300 font-bold text-lg">Q-3 : What is express js? What is Nest JS?</h1>
        <p>
          Express.js is a lightweight and versatile web application framework
          built specifically for Node.js. It offers a simple and minimalist
          methodology for building web applications and APIs. It offers a range
          of features and middleware to streamline your tasks, e.g. B. HTTP
          request processing, routing support, integration of middleware
          components and rendering templates.With a thriving and active
          community, Express.js offers a variety of third-party middleware and
          plugins. It is perfect for building small to medium-sized apps and APIs
          where simplicity, speed, and scalability are key.
        </p>
        <p>
          Nest.js is a comprehensive and influential framework for building
          server-side applications that are scalable and easy to maintain. It
          follows an Angular-inspired structured architecture and includes
          things like decorators, modules, dependency injection, and a powerful
          command-line interface (CLI). With Nest.js, developers have the
          freedom to choose from a variety of HTTP platforms, including
          Express.js and Fastify. The framework offers a wide range of features
          such as dependency injection, middleware, validation, routing,
          database integration (ORM/ODM), web sockets, testing tools and much
          more out of the box. It encourages modular and scalable application
          development, making it an excellent choice for developing large
          applications with complex business logic and multiple
          modules/components.
        </p>
      </div>
      <div  className="bg-sky-100">
        <h1 className="bg-sky-300 font-bold text-lg">What is MongoDB aggregate and how does it work?</h1>
        <p>
          In MongoDB, the Aggregate method is used to perform complex data
          aggregation operations on collections. Facilitate the processing and
          transformation of data across a series of stages in the pipeline. Each
          stage of the aggregation pipeline performs a separate operation on
          input documents and passes the results to the next stage.
        </p>
        <p>
          The aggregation method in MongoDB works through a multi-stage
          pipeline, with each stage represented by an object in an array. Input
          documents are documents from an aggregated collection that are
          processed and transformed at each stage of the pipeline. Each step
          performs a specific operation on input documents, e.g. B. matching,
          grouping, distributing, sorting, restricting, omitting or searching.
          With the aggregation method and its pipeline stages, you can
          efficiently perform complex data aggregations, transformations, and
          calculations directly in MongoDB, eliminating the need for data
          transfer and processing in your app code. With this feature, you can
          create comprehensive reports, perform analysis, and gain meaningful
          insights from your data.
        </p>
      </div>
    </div>
  );
};

export default Blog;
