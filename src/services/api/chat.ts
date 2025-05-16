/*import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const sendMessage = async (content: string) => {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: content }],
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
*/

// chat.ts (Mock 버전)
export const sendMessage = async (content: string) => {
  console.log("Mock sendMessage called with:", content);

  // 임의의 가짜 응답을 return (OpenAI 없이)
  return Promise.resolve({
    choices: [
      {
        message: {
          role: "assistant",
          content: "안녕하세요! (가짜 응답입니다)",
        },
      },
    ],
  });
};
