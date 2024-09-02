import React from 'react'
import ClientCard from './client-card'

const ClientList = () => {
  const clients = [
    {
      comment: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
          accumsan ultricies at in libero accumsan Lorem Ipsum has been the
          industry standard"`,
      client_name: 'Musharof Chy',
      client_profession: 'Founder @ Pimjo',
    },
    //  {
    //    comment: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
    //        condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
    //        accumsan ultricies at in libero accumsan Lorem Ipsum has been the
    //        industry standard"`,
    //    client_name: 'Musharof Chy',
    //    client_profession: 'Founder @ Pimjo',
    //  },
    //  {
    //    comment: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
    //        condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
    //        accumsan ultricies at in libero accumsan Lorem Ipsum has been the
    //        industry standard"`,
    //    client_name: 'Musharof Chy',
    //    client_profession: 'Founder @ Pimjo',
    //  },
  ]
  return (
    <ul className='w-full'>
      {clients.map((client) => {
        return (
          <li key={Math.random()}>
            <ClientCard
              comment={client.comment}
              name={client.client_name}
              proffesion={client.client_profession}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default ClientList
