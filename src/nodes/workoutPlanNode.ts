import { state } from "../state";

export const workoutPlan = async (state : state) => {
    const {height,weight,level,age,goal,equipment,gender}= state.userProfile
    // model call to get 
    const {workouts,diet,weekId}=state.workoutPlan
    
    return {

    }
}