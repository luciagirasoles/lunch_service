const API_FETCH_BEVERAGES_URL = "/beverages";
const API_FETCH_MAINCOURSES_URL = "/main_courses";
const API_FETCH_STARTERS_URL = "/starters";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function fetchBeverages() {
  let beverages = [];
  try {
    let response = await fetch(API_FETCH_BEVERAGES_URL);
    if (!response.ok) throw await createError(response);
    const data = await response.json();
    beverages = [...data];
  } catch (error) {
    console.log("error fetching beverage data:  ", error);
  }

  return beverages;
}

async function fetchStarters() {
  let starters = [];
  try {
    let response = await fetch(API_FETCH_STARTERS_URL);
    if (!response.ok) throw await createError(response);
    const data = await response.json();
    starters = [...data];
  } catch (error) {
    console.log("error fetching starters data:  ", error);
  }

  return starters;
}

async function fetchMainCourses() {
  let mainCourse = [];
  try {
    let response = await fetch(API_FETCH_MAINCOURSES_URL);
    if (!response.ok) throw await createError(response);
    const data = await response.json();
    mainCourse = [...data];
  } catch (error) {
    console.log("error fetching beverage data:  ", error);
  }

  return mainCourse;
}

export default async function fetchDishes() {
  const dishes = {};
  dishes["beverages"] = await fetchBeverages();
  dishes["starters"] = await fetchStarters();
  dishes["mainCourses"] = await fetchMainCourses();

  return dishes;
}
