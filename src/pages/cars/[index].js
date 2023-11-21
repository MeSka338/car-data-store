import Car from "@/components/pages/Car";
import store from "@/store";
import { Provider } from "react-redux";
export default function CarPageDynamic() {
  return (
    <>
      <Provider store={store}>
        <Car />
      </Provider>
    </>
  );
}
