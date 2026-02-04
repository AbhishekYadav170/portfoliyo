import React, { useEffect, useState } from 'react'

const DateTime = () => {

  const [datetime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const formattedDateTime = now.toLocaleString('en-US',{
        weekday: 'short',
        month:'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true

      }).toLowerCase().replace(/,/g,'')
      setDateTime(formattedDateTime)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime,1000)
    return () => clearInterval(interval)
  },[])

  return (
    <div className='center'>
       {datetime}
    </div>
  )
}

export default DateTime
