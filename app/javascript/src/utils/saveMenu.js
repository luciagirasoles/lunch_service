const API_UPDATE_BEVERAGE_URL = "/beverages";
const API_UPDATE_STARTER_URL = "/starters";
const API_UPDATE_MAINCOURSE_URL = "/main_courses";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function submitBeverage(beverage) {
  try {
    let response = await fetch(`${API_UPDATE_BEVERAGE_URL}/${beverage.id}`, {
      method: "PATCH",
      body: JSON.stringify({ beverage: { selected: beverage.selected } }),
      headers: {
        "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) throw await createError(response);
    let data = await response.json();
  } catch (error) {
    console.log("error saving Beverage data:  ", beverage, " ,error: ", error);
  }
}

async function submitStarter(starter) {
  try {
    let response = await fetch(`${API_UPDATE_STARTER_URL}/${starter.id}`, {
      method: "PATCH",
      body: JSON.stringify({ starter: { selected: starter.selected } }),
      headers: {
        "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) throw await createError(response);
    let data = await response.json();
  } catch (error) {
    console.log("error saving Starter data:  ", starter, " ,error: ", error);
  }
}

async function submitMainCourse(mainCourse) {
  try {
    let response = await fetch(
      `${API_UPDATE_MAINCOURSE_URL}/${mainCourse.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ mainCourse: { selected: mainCourse.selected } }),
        headers: {
          "X-CSRF-Token": document.querySelector("meta[name=csrf-token]")
            .content,
          "Content-Type": "application/json"
        }
      }
    );
    if (!response.ok) throw await createError(response);
    let data = await response.json();
  } catch (error) {
    console.log(
      "error saving Main Course data:  ",
      mainCourse,
      " ,error: ",
      error
    );
  }
}

export { submitBeverage, submitMainCourse, submitStarter };
