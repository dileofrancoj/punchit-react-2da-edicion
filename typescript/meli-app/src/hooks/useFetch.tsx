import { useEffect, useCallback, useState } from "react";
import { AxiosResponse } from "axios";

import API from "../API";

export const useFetch = (endpoint: string): [any, boolean] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const fetchData = useCallback(async () => {
    try {
      const { data }: AxiosResponse = await API.get(endpoint);
      setData(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, loading];
};
