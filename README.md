# GraphQL-Apis-Examples


This Markdown file provides an overview of the GraphQL application code in this repository.

## Overview

This GraphQL application is built using Node.js, Express, Apollo Server, and MongoDB. It provides a GraphQL API for managing recipes.

## Files and Structure

The code is organized into several files and directories:

- **`index.js`**: The entry point of the application. It sets up the Apollo Server, connects to MongoDB, and listens on port 8001.

- **`models/recipeModel.js`**: Defines the Mongoose schema for the `Recipe` model.

- **`typeDefs.js`**: Contains the GraphQL type definitions for the `Recipe` type and various queries and mutations.

- **`resolvers.js`**: Contains the GraphQL resolvers for handling queries and mutations.

## Dependencies

This application relies on the following dependencies:

- **`apollo-server`**: Implements a GraphQL server using Apollo Server.

- **`mongoose`**: MongoDB ODM for Node.js.

- **`dotenv`**: Allows you to load environment variables from a `.env` file.

## GraphQL Schema

The GraphQL schema defines the following types:

- **`Recipe`**: Represents a recipe with fields such as `name`, `description`, `createdAt`, `thumbsUp`, and `thumbsDown`.

- **`RecipeInput`**: Input type for creating and updating recipes.

The schema also includes the following queries and mutations:

- **`Query`**:
  - `recipe(id: ID!)`: Retrieves a single recipe by its ID.
  - `getRecipes(amount: Int)`: Retrieves a list of recipes, optionally limited by the specified amount.

- **`Mutation`**:
  - `createRecipe(recipeInput: RecipeInput)`: Creates a new recipe.
  - `deleteRecipe(id: ID!)`: Deletes a recipe by its ID.
  - `updateRecipe(id: ID!, recipeInput: RecipeInput)`: Updates a recipe by its ID.

## Setting up and Running the Application

1. Install the required dependencies by running `npm install`.

2. Create a `.env` file in the project root directory and set the `MONGO_URI` environment variable with your MongoDB connection URI.

3. Run the application with `npm start`.

## Usage

To use the GraphQL API, you can send queries and mutations to the server endpoint, typically at `http://localhost:8001`.

Example query to get a recipe by ID:
```graphql
query {
  recipe(id: "yourRecipeID") {
    name
    description
  }
}
