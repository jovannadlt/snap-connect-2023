var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer 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");

export const getChat = async (messages) => {
    var raw = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 1,
        top_p: 1,
        n: 1,
        stream: false,
        max_tokens: 250,
        presence_penalty: 0,
        frequency_penalty: 0
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
      let response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
      return response.json();
}
