/* eslint-disable @typescript-eslint/no-explicit-any */


export function ThrowError(error: any) {

  // Check if the error response exists and return the message
  if (error.response && error.response.data) {
    throw new Error(error.response.data.message);
  } else {

    throw new Error("An unexpected error occurred");
  }
}
