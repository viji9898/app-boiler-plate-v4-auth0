import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const FaunaBd = () => {
  const [helloWorld, setHelloWorld] = useState("");
  const [loadStatus, setLoadStatus] = useState(true);

  const getHelloWorld = () => {
    axios
      .get(".netlify/functions/getHelloWorld", {
        baseURL: "/",
      })
      .then(function (response) {
        setHelloWorld(response.data.data);
        setLoadStatus(false);
      });
  };
  useEffect(() => {
    getHelloWorld();
  }, []);
  return (
    <div>
      <Spin spinning={loadStatus} />
      <p>{helloWorld.title}</p>
    </div>
  );
};
