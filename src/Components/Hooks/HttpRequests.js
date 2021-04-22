import { useEffect, useState } from "react"
import axios from "axios"
import { errorNotification, successNotification } from "./NotifySuccess"

export const useAxiosGet = (url) => {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  })

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    })

    axios
      .get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        })
      })
      .catch(() => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        })
      })
  }, [url])

  return request
}

export const axiosPost = (url, body, errorMessage, successMessage) => {
  axios
    .post(url, body)
    .then((response) => {
      if (response.data.error_flag === true) {
        errorNotification(errorMessage)
      } else {
        if (
          response.data.error_flag === false &&
          response.data.paths.length > 0
        ) {
          successNotification(successMessage)
        } else if (response.data.paths.length === 0) {
          successNotification(
            "All paths are blocked, no data written in database"
          )
        }
      }
    })
    .catch((e) => errorNotification(`Something went wrong:${e.message}`))
}
