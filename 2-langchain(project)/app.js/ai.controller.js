import {ChatGoogle} from "@langchain/google"

export const modelai=async(req,res)=>{
  try {
    const {prompt}=req.body;
    const ai =new ChatGoogle("gemini-3.8-flash")
    const result=await ai.invoke(prompt)

    return res.json(result.content)

  } catch (error) {
    console.log(error)
  }
}