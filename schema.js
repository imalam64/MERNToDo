//const axios = require('axios');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


// Hardcoded data
const tasks = require('./models/toDo')


// Task Type
const ToDoType = new GraphQLObjectType({
    name:'Task',
    fields:() => ({
        taskNum: {type:GraphQLInt},
        task: {type: GraphQLString},
        progress: {type: GraphQLString},
        difficulty: {type: GraphQLInt},
    })
});

// Root Query
const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        task:{
            type: ToDoType,
            args:{
                taskNum:{type:GraphQLInt}
            },
            resolve(parentValue, args){
                for(let i = 0;i < tasks.length;i++){
                    if(tasks[i].taskNum === args.taskNum){
                        return tasks[i];
                    }
                }
            }
        },
        allTasks:{
            type: new GraphQLList(ToDoType),
            resolve(parentValue, args){
                return tasks;
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'MutationAdd',
    fields:{
        addTask: {
            type: ToDoType,
            args:{
                taskNum:{
                    name: 'Task Number',
                    type: new GraphQLNonNull(GraphQLInt)
                },
                task:{
                    name: 'Task Description',
                    type: new GraphQLNonNull(GraphQLString)
                },
                progress:{
                    name: 'Task Status',
                    type: new GraphQLNonNull(GraphQLString)
                },
                difficulty:{
                    name: 'Task Difficulty out of 10',
                    type: new GraphQLNonNull(GraphQLInt)
                }
            },
            resolve(parentValue, args){
                return tasks
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});