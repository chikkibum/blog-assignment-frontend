# Blog Application - Readme

This project is a React application built with Vite, providing features for user authentication, image uploads, and comment management.

## Table of Contents

- [Blog Application - Readme](#blog-application---readme)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
  - [API Endpoints](#api-endpoints)
  - [Backend Setup Instructions (Node.js with Express, MongoDB, ImageKit, Clerk, and Gemini)](#backend-setup-instructions-nodejs-with-express-mongodb-imagekit-clerk-and-gemini)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (comes bundled with Node.js)
*   A web browser (Chrome, Firefox, etc.)
*   A code editor (VS Code, Atom, Sublime Text, etc.)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd <YOUR_REPOSITORY_DIRECTORY>
    ```

    **(Replace `<YOUR_REPOSITORY_URL>` and `<YOUR_REPOSITORY_DIRECTORY>` with your actual repository URL and directory name.)**

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Environment Variables

Before running the application, you need to set up environment variables.

1.  **Create a `.env.local` file:**

    Create a file named `.env.local` in the root directory of your project.

2.  **Add the following variables to `.env.local`:**


    | Variable Name                 | Description                                                              |
    | ----------------------------- | ------------------------------------------------------------------------ |
    | `VITE_IK_URL_ENDPOINT`       | URL endpoint for the ImageKit.io service.                            |
    | `VITE_IK_PUBLIC_KEY`         | Your public API key for ImageKit.io.                                |
    | `VITE_CLERK_PUBLISHABLE_KEY` | Publishable key for Clerk user authentication.                       |
    | `VITE_API_URL`               | The base URL for your application's backend API (hosted on Railway). |

**Important:**

*   **DO NOT** commit your `.env.local` file to version control. Add it to your `.gitignore` file.
*   These keys are examples. Replace them with your actual keys.

## Running the Application

To run the application in development mode:

```bash
npm run dev
```
## API Endpoints

This section outlines the API endpoints provided by the backend server for the Blog Application. These endpoints are used to interact with the server's data and functionality.

**Base URL:** `https://blog-assignment-server-production.up.railway.app` (This is the base URL defined in `VITE_API_URL`)

**Authentication:** Some endpoints may require authentication using Clerk.

**Note:**  This is a sample API endpoint documentation. You may need to adjust it based on the actual implementation of your backend server.

| Method | Endpoint                       | Description                                                                                                           | Request Body                                                                                                                                                | Response (Success)                                                                                                              | Response (Error)                                                                                                                                  |
| ------ | ------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GET** | `/posts`                  | Retrieves a list of all blog posts. Supports pagination using `page` and `limit` query parameters (e.g., `/api/posts?page=1&limit=10`). | None                                                                                                                                                   | `200 OK` <br> - `posts`: An array of blog post objects. <br> - `totalPages`: Total number of pages. <br> - `currentPage`: Current page number. | `500 Internal Server Error` - Server error.                                                                                                      |
| **POST** | `/posts`                  | Creates a new blog post. Requires authentication.                                                              | `{ "title": "string", "content": "string", "imageUrl": "string" (optional) }`                                                                              | `201 Created` <br> - `post`: The newly created blog post object.                                                                     | `400 Bad Request` - Invalid input. <br> `401 Unauthorized` - User not authenticated. <br> `500 Internal Server Error` - Server error.                 |
| **GET** | `/posts/:id`              | Retrieves a specific blog post by its ID.                                                                         | None                                                                                                                                                   | `200 OK` <br> - `post`: The blog post object.                                                                                         | `404 Not Found` - Post not found. <br> `500 Internal Server Error` - Server error.                                                                 |
| **PUT** | `/posts/:id`              | Updates an existing blog post by its ID. Requires authentication.                                                  | `{ "title": "string" (optional), "content": "string" (optional), "imageUrl": "string" (optional) }`                                                      | `200 OK` <br> - `post`: The updated blog post object.                                                                                     | `400 Bad Request` - Invalid input. <br> `401 Unauthorized` - User not authenticated. <br> `404 Not Found` - Post not found. <br> `500 Internal Server Error` |
| **DELETE** | `//posts/:id`              | Deletes a blog post by its ID. Requires authentication.                                                            | None                                                                                                                                                   | `204 No Content` - Successful deletion.                                                                                              | `401 Unauthorized` - User not authenticated. <br> `404 Not Found` - Post not found. <br> `500 Internal Server Error` - Server error.                 |
| **POST** | `//comments`               | Adds a comment to a specific blog post.                                                                         | `{ "postId": "string", "text": "string" }`                                                                                                              | `201 Created` <br> - `comment`: The newly created comment object.                                                                   | `400 Bad Request` - Invalid input. <br> `404 Not Found` - Post not found. <br> `500 Internal Server Error` - Server error.                 |
| **GET** | `//comments?postId=:postId` | Retrieves all comments for a specific blog post. Supports pagination.                                                | None                                                                                                                                                   | `200 OK` <br> - `comments`: An array of comment objects.                                                                                   | `404 Not Found` - Post not found. <br> `500 Internal Server Error` - Server error.                                                                 |
|                 | 

## Backend Setup Instructions (Node.js with Express, MongoDB, ImageKit, Clerk, and Gemini)

These instructions guide you through setting up the backend server for the Blog Application.

**Prerequisites:**

*   **Node.js and npm:** Make sure you have Node.js (LTS version recommended) and npm installed on your system. You can verify by running `node -v` and `npm -v` in your terminal.
*   **MongoDB:** You'll need a MongoDB database. You can either:
    *   **Use MongoDB Atlas (Cloud):** Sign up for a free tier at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and create a cluster.
    *   **Install MongoDB Locally:** Follow the instructions for your operating system: [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
*   **Code Editor:** Use a code editor like VS Code, Sublime Text, or Atom.
*   **Git:** Make sure you have Git installed for version control.
*   **Imagekit Account**: If you don't already have one, sign up for a free ImageKit account at [https://imagekit.io/registration](https://imagekit.io/registration).
*   **Clerk Account**: If you don't already have one, sign up for a free Clerk account at [https://clerk.com/sign-up](https://clerk.com/sign-up).
*   **Google Gemini API Key**: You'll need an API key to use the Google Gemini. If you don't have one, you can get one by following the instructions here: [https://ai.google.dev/tutorials/setup](https://ai.google.dev/tutorials/setup)

**Steps:**

1.  **Clone the Backend Repository:**

    ```bash
    git clone <YOUR_BACKEND_REPOSITORY_URL>
    cd <YOUR_BACKEND_REPOSITORY_DIRECTORY>
    ```

    **(Replace `<YOUR_BACKEND_REPOSITORY_URL>` and `<YOUR_BACKEND_REPOSITORY_DIRECTORY>` with the actual URL and directory name of your backend repository.)**

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Variables:**

    *   Create a `.env` file in the root of your backend project directory.
    *   Add the following environment variables to your `.env` file, replacing the placeholder values with your actual credentials:

    

    | Variable Name             | Description                                                                                                         |
    | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
    | `MONGO`                   | Your MongoDB connection string (either from MongoDB Atlas or your local MongoDB installation).                          |
    | `IK_PRIVATE_KEY`          | Your ImageKit private API key.                                                                                    |
    | `IK_URL_ENDPOINT`         | Your ImageKit URL endpoint.                                                                                       |
    | `IK_PUBLIC_KEY`           | Your ImageKit public API key.                                                                                     |
    | `CLERK_WEBHOOK_SECRET`    | Your Clerk webhook secret (used to verify webhooks from Clerk).                                                    |
    | `CLERK_PUBLISHABLE_KEY`   | Your Clerk Publishable Key                                                                                       |
    | `CLERK_SECRET_KEY`        | Your Clerk secret API key.                                                                                          |
    | `GEMINI_API_KEY`          | Your Google Gemini API key                                                                                    |
    | `PORT`                    | (Optional) The port number your backend server will run on. Defaults to 8000 if not specified.                      |
    | `FRONTEND_URL`          | (Optional) The origin URL of your frontend (used for CORS). Defaults to `http://localhost:5173` if not specified |

    **Important Security Notes:**

    *   **Never commit your `.env` file to version control.** Add it to your `.gitignore` file.
    *   Store these keys securely, especially your database connection string, ImageKit private key, Clerk secret key, and Gemini API key.

4.  **Database Setup (if using local MongoDB):**

    *   Start your local MongoDB server. The default command is usually `mongod` (you might need to configure it based on your installation).

5.  **Run the Backend Server:**

    *   In your terminal, from the backend project's root directory, run:

    ```bash
    npm run dev
    ```

    *   or

     ```bash
    npm start
    ```

    This will typically start the server using `nodemon` (for automatic restarts on code changes) or directly using `node`. The exact command depends on how your `package.json` scripts are defined.
6. **Deploying to Railway (Optional):**

    *   **Create a Railway Account:** If you don't have one, sign up at [https://railway.app/](https://railway.app/).
    *   **Install the Railway CLI:**
        ```bash
        npm install -g @railway/cli
        ```
    *   **Login to Railway:**
        ```bash
        railway login
        ```
    *   **Create a new Project:**
        ```bash
        railway init
        ```
    *   **Link your project to your repository:** Follow the prompts during `railway init` or use `railway link`.
    *   **Add Environment Variables:** Go to your project's dashboard on Railway, navigate to "Variables," and add all the environment variables from your `.env` file.
    *   **Deploy:**
        ```bash
        railway up
        ```
    *   **Set up MongoDB on Railway:**
        *   In your project, go to "New" -> "Database" -> "MongoDB".
        *   Once provisioned, connect your MongoDB instance to your app in the app's settings. Railway will automatically inject the `DATABASE_URL` environment variable into your app. You might need to update your application code to use this


