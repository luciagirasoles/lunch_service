import React from "react";
import style from "./SelectMenu.module.css";
import { useMenu } from "../../redux/selectors/index";
import { useUpdateMenu } from "../../redux/action/action-hooks";
import fetchDishes from "../utils/fetchDishes";
import {
  submitBeverage,
  submitMainCourse,
  submitStarter
} from "../utils/saveMenu";

export default function SelectMenu({ handleCloseModal }) {
  const currentMenu = useMenu();
  const updateMenu = useUpdateMenu();
  const [beverages, setBeverages] = React.useState([]);
  const [starters, setStarters] = React.useState([]);
  const [mainCourses, setMainCourses] = React.useState([]);
  const [chefOption, setChefOption] = React.useState({
    beverage: currentMenu.beverage,
    starter1: currentMenu.starter1,
    starter2: currentMenu.starter2,
    mainCourse1: currentMenu.mainCourse1,
    mainCourse2: currentMenu.mainCourse2
  });

  React.useEffect(() => {
    async function getDishes() {
      const dataDishes = await fetchDishes();
      setBeverages(dataDishes.beverages);
      setStarters(dataDishes.starters);
      setMainCourses(dataDishes.mainCourses);
    }
    getDishes();
  }, []);

  function handleChange(event) {
    let currentName = "";
    let currentDish = 0;
    switch (event.target.name) {
      case "starter1":
      case "starter2":
        currentDish = starters.findIndex(
          starter => starter.id == event.target.value
        );
        currentName = starters[currentDish].name;
        break;

      case "mainCourse1":
      case "mainCourse2":
        currentDish = mainCourses.findIndex(
          mainCourse => mainCourse.id == event.target.value
        );
        currentName = mainCourses[currentDish].name;
        break;

      case "beverage":
        currentDish = beverages.findIndex(
          beverage => beverage.id == event.target.value
        );
        currentName = beverages[currentDish].name;
        break;
    }

    setChefOption({
      ...chefOption,
      [event.target.name]: {
        id: event.target.value * 1,
        name: currentName
      }
    });
  }
  function handleSubmit() {
    event.preventDefault();
    Object.keys(chefOption).forEach(type => {
      if (chefOption[type] !== currentMenu[type]) {
        switch (type) {
          case "starter1":
          case "starter2":
            if (!!currentMenu[type].id) {
              submitStarter({ id: currentMenu[type].id, selected: false });
            }
            submitStarter({ id: chefOption[type].id, selected: true });
            break;

          case "mainCourse1":
          case "mainCourse2":
            if (!!currentMenu[type].id) {
              submitMainCourse({ id: currentMenu[type].id, selected: false });
            }
            submitMainCourse({
              id: chefOption[type].id,
              selected: true
            });
            break;

          case "beverage":
            if (!!currentMenu.beverage.id) {
              submitBeverage({
                id: currentMenu.beverage.id,
                selected: false
              });
            }
            setTimeout(() => {
              submitBeverage({ id: chefOption.beverage.id, selected: true });
            }, 1000);
            break;
        }

        updateMenu(chefOption);
      }
    });

    handleCloseModal();
  }

  return (
    <div className={style.main}>
      <h3 className={style.title}>Elige el menu de hoy</h3>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>
          Entrada 1:
          <select
            className={style.select}
            name="starter1"
            onChange={handleChange}
            value={chefOption.starter1.id}
            required
          >
            <option value="" hidden>
              -Elegir-
            </option>
            {starters.map((starter, index) => {
              return (
                <option
                  key={index.toString()}
                  id={index}
                  value={starter.id}
                  hidden={chefOption.starter2.id === starter.id}
                >
                  {starter.name}
                </option>
              );
            })}
          </select>
        </label>
        <label className={style.label}>
          Entrada 2:
          <select
            className={style.select}
            name="starter2"
            onChange={handleChange}
            value={chefOption.starter2.id}
            required
          >
            <option value="" hidden>
              -Elegir-
            </option>
            {starters.map((starter, index) => {
              return (
                <option
                  key={index.toString()}
                  id={index}
                  value={starter.id}
                  hidden={chefOption.starter1.id === starter.id}
                >
                  {starter.name}
                </option>
              );
            })}
          </select>
        </label>
        <label className={style.label}>
          Segundo 1:
          <select
            className={style.select}
            name="mainCourse1"
            onChange={handleChange}
            value={chefOption.mainCourse1.id}
            required
          >
            <option value="" hidden>
              -Elegir-
            </option>
            {mainCourses.map((mainCourse, index) => {
              return (
                <option
                  key={index.toString()}
                  id={index}
                  value={mainCourse.id}
                  hidden={chefOption.mainCourse2.id === mainCourse.id}
                >
                  {mainCourse.name}
                </option>
              );
            })}
          </select>
        </label>
        <label className={style.label}>
          Segundo 2:
          <select
            className={style.select}
            name="mainCourse2"
            onChange={handleChange}
            value={chefOption.mainCourse2.id}
            required
          >
            <option value="" hidden>
              -Elegir-
            </option>
            {mainCourses.map((mainCourse, index) => {
              return (
                <option
                  key={index.toString()}
                  id={index}
                  value={mainCourse.id}
                  hidden={chefOption.mainCourse1.id === mainCourse.id}
                >
                  {mainCourse.name}
                </option>
              );
            })}
          </select>
        </label>
        <label className={style.label}>
          Bebida:
          <select
            className={style.select}
            name="beverage"
            onChange={handleChange}
            value={chefOption.beverage.id}
            required
          >
            <option value="" hidden>
              -Elegir-
            </option>
            {beverages.map((beverage, index) => {
              return (
                <option key={index.toString()} id={index} value={beverage.id}>
                  {beverage.name}
                </option>
              );
            })}
          </select>
        </label>
        <div className={style.buttonArea}>
          <button
            type="button"
            onClick={handleCloseModal}
            className={`${style.button} ${style.color_red}`}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={`${style.button} ${style.color_green}`}
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}
