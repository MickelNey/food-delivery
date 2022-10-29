import { useState, useEffect} from 'react'
import { service } from "utils";

export const useQuery = <T>(endpoint: string) => {
  const [items, setItems] = useState<T[]>([])

  useEffect(() => {
    service.getAll<T[]>(endpoint).then(response => {
      setItems(response.data)
    }).catch(error => {
      console.log(error)
    })
    console.log(items)
  }, [])

  return items;
}

