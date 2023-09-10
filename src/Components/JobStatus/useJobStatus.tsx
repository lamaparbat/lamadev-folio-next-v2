import { useState } from 'react'
import { JOB_STATUS } from './constants';

const useJobStatus = () => {
  const [status, setStatus] = useState(JOB_STATUS[0]);


  return {
    status
  }

}

export default useJobStatus;
