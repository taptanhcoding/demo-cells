import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "react-query";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { GetInfinitePagesInterface } from "../interfaces";
import { axiosAuth } from "api/axiosClient";

type QueryKeyT = [string, object | undefined];

export const fetcher = async <T>({
  queryKey,
  pageParam,
}: {
  queryKey: QueryKeyT;
  pageParam?: number;
}): Promise<T> => {
  const [url, params] = queryKey;
  const res = await axiosAuth.get<T>(url, { params: { ...params, pageParam } });
  return res.data;
};

export const useLoadMore = <T>(url: string | null, params?: object) => {
  const context = useInfiniteQuery<
    GetInfinitePagesInterface<T>,
    Error,
    GetInfinitePagesInterface<T>,
    QueryKeyT
  >(
    [url!, params],
    ({ queryKey, pageParam = 1 }) => fetcher({ queryKey, pageParam }),
    {
      getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
      getNextPageParam: (lastPage) => {
        return lastPage.nextId ?? false;
      },
    }
  );

  return context;
};

export const usePrefetch = <T>(url: string | null, params?: object) => {
  const queryClient = useQueryClient();

  return () => {
    if (!url) {
      return;
    }

    queryClient.prefetchQuery<T, Error, T, QueryKeyT>(
      [url!, params],
      ({ queryKey }) => fetcher({ queryKey })
    );
  };
};

// export const useFetch = <T>(
//   se: any,
//   params?: object,
//   config?: UseQueryOptions<T, Error, T, QueryKeyT>
// ) => {
//   const context = useQuery<T, Error, T, QueryKeyT>(
//     [url!, params],
//     ({ queryKey }) => fetcher({ queryKey }),
//     {
//       enabled: !!url,
//       ...config,
//     }
//   );

//   return context;
// };

export const useFetch = (
  services: AxiosInstance,
  url: string,
  params: any,
  config: any
) => {
  const queryKeys = config?.queryKey || [];
  if (params) {
    queryKeys.push(params);
  }
  const context = useQuery(
    [...queryKeys],
    () => {
      return services
        .get(url, { params: { ...params } })
        .then((res) => res.data);
    },
    {
      enabled: !!url,
      refetchOnWindowFocus: false,
      ...config,
    }
  );
  return context;
};
const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object[],
  updater?: ((oldData: T, newData: S) => T) | undefined
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([params]);


      // const previousData = params && queryClient.getQueryData([
      //   ...params]);
      // return previousData;
    },
    onSuccess: () => {
      params && params.forEach(param => queryClient.invalidateQueries([...params]))
      // Hoặc làm bất kỳ hành động nào khác
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([url!, params], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries([url!, params]);
    },
  });
};

export const useDelete = <T>(
  services: any,
  url: string,
  params?: any[],
) => {
  return useGenericMutation<T, string | number>(
    (id) => services.delete(`${url}/${id}`),
    url,
    params,
    undefined
  );
};

export const usePost = <T, S>(
  services: AxiosInstance,
  url: string,
  params?: any[],
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data) => services.post<S>(url, data),
    url,
    params,
    updater
  );
};

export const useUpdate = <T, S>(
  services: AxiosInstance,
  url: string,
  params?: any[],
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data:any) => services.patch<S>(url + `${data._id}`, data),
    url,
    params,
    updater
  );
};

export const useDeleteMulti = <T, S>(
  services: AxiosInstance,
  url: string,
  params?: any[],
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation(
    (data) => services.post(url, data),
    url,
    params,
    updater,
  );
};


export const useStatusMulti = <T, S>(
  services: AxiosInstance,
  url: string,
  params?: any[],
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation(
    (data) => services.patch(url, data),
    url,
    params,
    updater,
  );
};

