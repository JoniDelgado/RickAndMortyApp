import { useEffect, useState } from "react";
import { getCharacterData } from "../config/getCharacterData";

const useFetchRequest = (data) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    getData(data);
  }, []);

  const getData = (data) => {
    getCharacterData(data).then((res) => {
      setFetchedData(res);
      setIsLoading(false);
    });
  };

  return [isLoading, fetchedData, getData];
};
export default useFetchRequest;
