import { END, START, StateGraph } from "@langchain/langgraph";
import { queryState } from "./state";
import { workoutPlan } from "./nodes/workoutPlanNode";


const graph = new StateGraph (queryState)
.addNode("plan",workoutPlan)
.addEdge(START,"plan")
.addEdge("plan",END)
.compile()

const main = async () => {
    const result = await graph.invoke({userProfile:{
        id:"kishan",
        age:24,
        weight:81,
        gender:"male",
        height:183,
        goal:"gain",
        level:"intermediate",
        equipment:["dumbbells", "resistance-band","barbell"]
    }})
    // console.log(JSON.stringify(result.workoutPlan))
    console.log('result', JSON.stringify(result, null, 2))
}

main()