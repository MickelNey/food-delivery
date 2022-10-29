import {instance} from "./instance";

export const service = {
  getAll: function<T>(endpoint: string){
    return instance.get<T>(endpoint)
  },
}