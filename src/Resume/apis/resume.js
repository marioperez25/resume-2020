export const fetchResume = async () => {
    try {
      const response = await fetch("https://api.jsonbin.io/b/5f84d311302a837e95789669/9");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };