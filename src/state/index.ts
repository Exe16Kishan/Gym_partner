import { Annotation } from "@langchain/langgraph";
import { GOAL, MealPlan, TrainingPlan } from "../utils/types";


export const queryState = Annotation.Root({
    weight : Annotation<number>(),
    height : Annotation<number>(),
    goal : Annotation<GOAL>(),
    trainingReminder : Annotation<boolean>(),
    mealReminder : Annotation<boolean>(),
    mealPlan : Annotation<MealPlan>(),
    trainingPlan : Annotation<TrainingPlan>()
})


export type state =  typeof queryState.State