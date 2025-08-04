import { llm } from "../model";
import { state } from "../state";
import { gymPrompt } from "../utils/promptTemplate";
import { JsonOutputParser } from "@langchain/core/output_parsers";

const parser = new JsonOutputParser();

const chain = gymPrompt.pipe(llm).pipe(parser);

export const workoutPlan = async (state: state) => {
    console.log(state.userProfile)
  const newPlan = await chain.invoke({
    user: state.userProfile,
    thisWeekPlan: state.workoutPlan,
    logsTillYesterday: state.workoutLogs,
    userMessage: "generate the plan"
  });

  console.log(newPlan)
  return { workoutPlan: newPlan };
};