import axios from "axios";
import { useState } from "react";
import { ISubscriber } from "../interfaces/ICommon";

export const useCreateSubscriber = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createdSubscriber, setCreatedSubscriber] =
    useState<ISubscriber | null>(null);

  const createSubscriber = async (subscriberEmail: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1/content/subscriber/create`,
        subscriberEmail,
        { withCredentials: true },
      );
      setCreatedSubscriber(response.data);
      return { success: true };
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { createSubscriber, createdSubscriber, isLoading, error };
};
