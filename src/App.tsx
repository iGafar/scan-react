import CustomButton from "@/components/atoms/CustomButton";
import AppRouter from "@/router/Router";
import { Global } from "@/style/global";
import { ConfigProvider, Input } from "antd";
import ruRU from "antd/lib/locale/ru_RU";

export default function App() {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          fontFamily: "Inter",
          fontSize: 14,
          borderRadius: 5,
        },
      }}
    >
      <AppRouter />
      <Global />
    </ConfigProvider>
  );
}
