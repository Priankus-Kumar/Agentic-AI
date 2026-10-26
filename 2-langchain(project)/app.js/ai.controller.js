import { ChatGoogle } from "@langchain/google";

export const modelai = async (req, res) => {
  try {
    const { prompt } = req.body;
    const ai = new ChatGoogle("gemini-3.6-flash");
    // const result=await ai.invoke(prompt)
    const result = await ai.invoke([
      {
        role: "system",
        content: "your ar ai assistant",
      },
      {
        role: "human",
        content: prompt,
      },
    ]);

    return res.json(result.content);
  } catch (error) {
    console.log(error);
  }
};
