import CarContainer from "@/components/pages/Car/CarContainer";
import store from "@/store";
import { Provider } from "react-redux";
export default function CarPageDynamic() {
  return (
    <>
      <Provider store={store}>
        <CarContainer />
      </Provider>
    </>
  );
}
