import Recipe from "./models/recipeModel.js";

export const resolvers = {

    Query: {

        async recipe(_, { id }) {
            return await Recipe.findById(id);
        },

        async getRecipes(_, { amount }) {
            return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
        }

    },

    Mutation: {

        async createRecipe(_, { recipeInput: { name, description } }) {

            const createdRecipe = new Recipe({
                name: name,
                description: description,
                createdAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            })

        const result = await createdRecipe.save(); 
            return {
                id: result.id,
                ...result._doc
            };
        },

        async deleteRecipe (_, {id}) {
            const isDeleted = (await Recipe.deleteOne({_id: id})).deletedCount;
            return isDeleted; // 1 if deleted & 0 if nothing was deleted
        },

        async updateRecipe (_, {id, recipeInput: {name, description}}) {
            const isUpdated = (await Recipe.updateOne({_id:id}, {name:name, description: description})).modifiedCount;
            return isUpdated;
        }
    }

}
