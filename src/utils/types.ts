export interface UserProfile {
    id: string;                // thread_id
    age: number;
    gender: "male" | "female"
    height: number            // cm
    weight: number            // kg
    goal: "lose" | "maintain" | "gain"
    level: "beginner" | "intermediate"
    equipment: string[]       // ["dumbbells", "resistance-band"]
}


// 7 days plan
export interface WorkoutPlan {
    weekId: string           
    workouts: WorkoutDay[]
    diet: DietDay[]
}

// everyday logs
export interface WorkoutLogs {
    workouts: LoggedWorkout[]; // {date, exercise, sets, reps}
    meals: LoggedMeal[];       // {date, food, kcal, protein}

}

type WorkoutDay = {
  day: number; // 0-6
  exercises: { name: string; sets: number; reps: number }[];
};

type DietDay = {
  day: number;
  targetKcal: number;
  targetProtein: number;
};
 
type LoggedWorkout = {
  date: string; 
  exercise: string;
  sets: number;
  reps: number;
  weightKg?: number;
};

type LoggedMeal = {
  date: string;
  food: string;
  kcal: number;
  protein: number;
};