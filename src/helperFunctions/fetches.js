export const fetchById = async (id) => {
  const url = `http://localhost:3000/questionSet/${id}`;
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
  const url = `http://localhost:3000/questionSet/date/${unixDate}`;
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
  const url = `http://localhost:3000/questionSet/questions/${unixDate}`;
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
