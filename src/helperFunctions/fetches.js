const URL = import.meta.env.VITE_API_URL;

export const fetchById = async (id) => {
  const url = `${URL}/questionSet/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchQuestionSetByDate = async (unixDate) => {
  const url = `${URL}/questionSet/date/${unixDate}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchQuestionsAndQuestionSetByDate = async (unixDate) => {
  const url = `${URL}/questionSet/questions/${unixDate}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};
