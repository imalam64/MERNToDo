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
const tasks = [
    {taskNum: 1, task: "Code More", progress: "Doing", difficulty: 6},
    {taskNum: 2, task: "Read More", progress: "Do", difficulty: 4},
    {taskNum: 3, task: "Workout More", progress: "Done", difficulty: 9}
];


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


module.exports = new GraphQLSchema({
    query: RootQuery
});