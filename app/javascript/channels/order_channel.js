import consumer from "./consumer";
import store from "../redux/store/index";
import { fetchNewOrder } from "../redux/action/actions";

consumer.subscriptions.create("OrderChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const order = JSON.parse(data.content);
    const formattedOrder = {
      id: order.id,
      starter: { id: order.starter_id, name: order.starter.name },
      mainCourse: { id: order.mainCourse_id, name: order.mainCourse.name },
      beverage: { id: order.beverage_id, name: order.beverage.name },
      status: order.status
    };
    store.dispatch(fetchNewOrder(formattedOrder));
  }
});
