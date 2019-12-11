import React from "react";
import style from "./NewOrder.module.css";
import { useMenu } from "../../redux/selectors/index";
import { useSaveOrder } from "../../redux/action/action-hooks";

export default function NewOrder({ handleCloseModal }) {
  const currentMenu = useMenu();
  const saveOrder = useSaveOrder();
  const userOrder = {
    starter: "",
    mainCourse: "",
    beverage: ""
  };

  function handleChange(event) {
    let currentName = "";

    switch (event.target.name) {
      case "starter":
        [currentMenu.starter1, currentMenu.starter2].find(starter => {
          if (starter.id === parseInt(event.target.value)) {
            currentName = starter.name;
            return true;
          }
        });

        userOrder.starter = {
          id: parseInt(event.target.value),
          name: currentName
        };
        break;
      case "mainCourse":
        [currentMenu.mainCourse1, currentMenu.mainCourse2].find(mainCourse => {
          if (mainCourse.id === parseInt(event.target.value)) {
            currentName = mainCourse.name;
            return true;
          }
        });
        userOrder.mainCourse = {
          id: parseInt(event.target.value),
          name: currentName
        };
        break;
    }
  }

  function handleSubmit() {
    event.preventDefault();
    userOrder.beverage = { ...currentMenu.beverage };
    saveOrder({
      beverage: userOrder.beverage.id,
      mainCourse: userOrder.mainCourse.id,
      starter: userOrder.starter.id
    });

    handleCloseModal();
  }
  return (
    <div className={style.main}>
      <h3 className={style.title}>La order actual es:</h3>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>
          Entrada:
          <select
            name="starter"
            className={style.select}
            onChange={handleChange}
            required
          >
            <option value="" hidden>
              -Elegir-
            </option>
            {!!currentMenu.starter1.id && (
              <option
                key={currentMenu.starter1.id.toString()}
                value={currentMenu.starter1.id}
              >
                {currentMenu.starter1.name}
              </option>
            )}
            {!!currentMenu.starter2.id && (
              <option
                key={currentMenu.starter2.id.toString()}
                value={currentMenu.starter2.id}
              >
                {currentMenu.starter2.name}
              </option>
            )}
          </select>
        </label>
        <label className={style.label}>
          Segundo:
          <select
            className={style.select}
            name="mainCourse"
            onChange={handleChange}
            required
          >
            <option value="" hidden>
              -Elegir-
            </option>
            {!!currentMenu.mainCourse1.id && (
              <option
                key={currentMenu.mainCourse1.id.toString()}
                value={currentMenu.mainCourse1.id}
              >
                {currentMenu.mainCourse1.name}
              </option>
            )}
            {!!currentMenu.mainCourse2.id && (
              <option
                key={currentMenu.mainCourse2.id.toString()}
                value={currentMenu.mainCourse2.id}
              >
                {currentMenu.mainCourse2.name}
              </option>
            )}
          </select>
        </label>
        <label className={style.label}>
          Bebida:
          <input
            className={style.input}
            name="beverage"
            value={
              !!currentMenu.beverage.name && `${currentMenu.beverage.name}`
            }
            readOnly
            disabled={true}
          ></input>
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
            Registrar Orden
          </button>
        </div>
      </form>
    </div>
  );
}
