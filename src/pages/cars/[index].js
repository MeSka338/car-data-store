import CarPage from "@/components/pages/CarPage";
import store from "@/store";
import { Provider } from "react-redux";
export default function CarPageDynamic() {
  return (
    <>
      <Provider store={store}>
        <CarPage />
      </Provider>
    </>
  );
}
