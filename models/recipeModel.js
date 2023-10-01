import { model, Schema } from "mongoose";

const recipeSchema = new Schema({
    name: String,
    description: String,
    createdAt: String,
    thumbsUp: Number,
    thumbsDown: Number,
});

const Recipe =  model('myRecipes', recipeSchema);

export default Recipe;