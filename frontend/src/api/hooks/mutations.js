import axiosInstance from '../constants/api';
import { useMutation } from '@tanstack/react-query';
import { makeErrorMessage } from './useFetch';

export default function usePostRequest(
  path,
  payload,
  onSuccess,
  onFailure
) {
  const postRequest = () => axiosInstance.post(path, payload);
  const mutation = useMutation(postRequest, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error.response?.status,
        errors: error.response?.data
      });
    }
  });
  return mutation;
}

export function usePutRequest(
  path,
  payload,
  onSuccess,
  onFailure
) {
  const putRequest = () => axiosInstance.put(path, payload);
  const mutation = useMutation(putRequest, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error?.response?.status,
        errors: error.response?.data
      });
    }
  });
  return mutation;
}
export function usePatchRequest(
  path,
  payload,
  onSuccess,
  onFailure
) {
  const putRequest = () => axiosInstance.patch(path, payload);
  const mutation = useMutation(putRequest, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error.response?.status
      });
    }
  });
  return mutation;
}

export function useDeleteRequest(
  path,
  payload,
  onSuccess,
  onFailure
) {
  const deleteRequest = () => axiosInstance.delete(path);
  const mutation = useMutation(deleteRequest, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error.response?.status
      });
    }
  });
  return mutation;
}
