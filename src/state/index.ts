import { Annotation } from "@langchain/langgraph";
import { UserProfile, WorkoutLogs, WorkoutPlan } from "../utils/types";


export const queryState = Annotation.Root({
    userProfile: Annotation<UserProfile>(),
    workoutPlan: Annotation<WorkoutPlan>(),
    workoutLogs: Annotation<WorkoutLogs>(),
    streak: Annotation<number>()
})


export type state = typeof queryState.State